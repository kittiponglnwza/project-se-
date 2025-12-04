import React, { useState } from 'react';

const GPACalculatorView = () => {
  const [courses, setCourses] = useState([{ name: '', credits: 3, grade: 'A' }]);
  const gradePoints = { A: 4.0, 'B+': 3.5, B: 3.0, 'C+': 2.5, C: 2.0, 'D+': 1.5, D: 1.0, F: 0 };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    courses.forEach(c => {
      const credits = Number(c.credits) || 0;
      const gp = gradePoints[c.grade] ?? 0;
      totalPoints += credits * gp;
      totalCredits += credits;
    });
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  const addCourse = () => setCourses([...courses, { name: '', credits: 3, grade: 'A' }]);
  const removeCourse = idx => setCourses(courses.filter((_, i) => i !== idx));
  const updateCourse = (idx, field, value) => {
    const updated = [...courses];
    updated[idx][field] = field === 'credits' ? (value === '' ? '' : parseInt(value)) : value;
    setCourses(updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">คำนวณเกรด</h2>
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="space-y-4">
          {courses.map((course, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-3 items-center">
              <input
                type="text"
                placeholder="ชื่อวิชา"
                className="col-span-5 bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
                value={course.name}
                onChange={e => updateCourse(idx, 'name', e.target.value)}
              />
              <input
                type="number"
                className="col-span-2 bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
                value={course.credits}
                onChange={e => updateCourse(idx, 'credits', e.target.value)}
              />
              <select
                className="col-span-2 bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
                value={course.grade}
                onChange={e => updateCourse(idx, 'grade', e.target.value)}
              >
                {Object.keys(gradePoints).map(g => <option key={g} value={g}>{g}</option>)}
              </select>
              <button onClick={() => removeCourse(idx)} className="col-span-3 bg-red-900 hover:bg-red-800 text-white px-3 py-2 rounded">
                ลบ
              </button>
            </div>
          ))}
        </div>
        <button onClick={addCourse} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          เพิ่มวิชา
        </button>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="text-center">
          <div className="text-gray-400 text-sm mb-2">GPA เทอมนี้</div>
          <div className="text-5xl font-bold text-white">{calculateGPA()}</div>
        </div>
      </div>
    </div>
  );
};

export default GPACalculatorView;
