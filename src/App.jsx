import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import RoadmapView from './components/RoadmapView';
import GPACalculatorView from './components/GPACalculatorView';
import HonorsCalculatorView from './components/HonorsCalculatorView';
import ProbationCheckerView from './components/ProbationCheckerView';
import CoursesView from './components/CoursesView';
import CoursePage from './components/CoursePage';

import { menuItems } from './data/menuItems';
import './index.css';



// React Router
import { Routes, Route } from "react-router-dom";

// ------------------ Prereq Function ------------------
import { courses } from './data/courses';

const getPrereqChain = (courseId) => {
  let chain = [];
  let current = courseId;

  while (current && courses[current]) {
    chain.unshift(courses[current].name);
    current = courses[current].prereq;
  }
  return chain;
};
// ------------------------------------------------------

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [selectedChain, setSelectedChain] = useState([]);

  const [studentData, setStudentData] = useState({
    completedCourses: [],
    currentGPA: 0,
    currentCGPA: 0,
    totalCredits: 0,
  });

  const handleSelectCourseFromRoadmap = (courseId) => {
    const chain = getPrereqChain(courseId);
    setSelectedChain(chain);
    setActiveTab('courses');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView studentData={studentData} />;

      case 'roadmap':
        return <RoadmapView onSelectCourse={handleSelectCourseFromRoadmap} />;

      case 'gpa':
        return <GPACalculatorView />;

      case 'honors':
        return <HonorsCalculatorView />;

      case 'probation':
        return <ProbationCheckerView />;

      case 'courses':
        return <CoursesView chain={selectedChain} />;

      default:
        return <DashboardView studentData={studentData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-400 hover:text-white lg:hidden"
            >
              {sidebarOpen ? '✖' : '☰'}
            </button>
            <h1 className="text-xl font-bold text-white">GPA Navigator</h1>
          </div>
        </div>
      </header>

      <div className="flex">
        <Sidebar
          menuItems={menuItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-6 lg:p-8">
          <Routes>
            {/* UI หลักใช้ activeTab แบบเดิม */}
            <Route path="/" element={renderContent()} />

            {/* หน้าแยกรายวิชา */}
            <Route path="/course/:id" element={<CoursePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
