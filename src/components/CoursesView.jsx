import React from "react";
import { useNavigate } from "react-router-dom";
import { courses as allCoursesData } from "../data/courses";

const CoursesView = () => {
  const navigate = useNavigate();

  const allCourses = [
    ...allCoursesData.semester1,
    ...allCoursesData.semester2,
    ...allCoursesData.semester3,
    ...allCoursesData.semester4,
    ...allCoursesData.semester5,
    ...allCoursesData.semester6,
    ...allCoursesData.semester7,
    ...allCoursesData.semester8,
    ...allCoursesData.semester9,
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">รายวิชาทั้งหมด</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allCourses.map(course => (
          <div
            key={course.id}
            className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-blue-500 cursor-pointer transition-colors"
            onClick={() => navigate(`/course/${course.id}`)}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="text-blue-400 font-semibold text-lg">{course.id}</div>
                <div className="text-white">{course.name}</div>
              </div>
              <div className="text-gray-400 text-sm">{course.credits} หน่วยกิต</div>
            </div>

            <div className="flex gap-4 text-sm">
              <div className="text-gray-400">
                ความยาก: <span className="text-white">{course.difficulty}/5</span>
              </div>
              <div className="text-gray-400">
                พึงพอใจ: <span className="text-white">{course.satisfaction}/5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesView;
