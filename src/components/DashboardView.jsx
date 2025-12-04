import React from 'react';
import { courses } from '../data/courses';

const DashboardView = ({ studentData }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="text-gray-400 text-sm mb-2">CGPA</div>
          <div className="text-3xl font-bold text-white">{(studentData.currentCGPA || 0).toFixed(2)}</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="text-gray-400 text-sm mb-2">หน่วยกิตสะสม</div>
          <div className="text-3xl font-bold text-white">{studentData.totalCredits || 0}</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="text-gray-400 text-sm mb-2">สถานะ</div>
          <div className="text-xl font-semibold text-green-400">ปลอดภัย</div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">วิชาที่แนะนำเทอมหน้า</h3>
        <div className="space-y-3">
          {courses.semester2.slice(0, 3).map(course => (
            <div key={course.id} className="flex justify-between items-center py-2 border-b border-gray-700">
              <div>
                <div className="text-white font-medium">{course.id}</div>
                <div className="text-sm text-gray-400">{course.name}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">ความยาก: {course.difficulty}/5</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
