import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

const CoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allCourses = [
    ...courses.semester1,
    ...courses.semester2,
    ...courses.semester3,
    ...courses.semester4,
    ...courses.semester5,
    ...courses.semester6,
    ...courses.semester7,
    ...courses.semester8,
    ...courses.semester9,
  ];

  const course = allCourses.find(c => c.id === id);

  if (!course) return <div className="text-white">ไม่พบข้อมูลวิชา</div>;

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-400 hover:text-blue-200"
      >
        ← กลับ
      </button>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="text-2xl text-blue-400 font-bold">{course.id}</div>
        <div className="text-xl text-white mt-2">{course.name}</div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-900 p-4 rounded">
            <div className="text-gray-400 text-sm">หน่วยกิต</div>
            <div className="text-white text-2xl font-bold">{course.credits}</div>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <div className="text-gray-400 text-sm">ความยาก</div>
            <div className="text-white text-2xl font-bold">{course.difficulty}/5</div>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <div className="text-gray-400 text-sm">พึงพอใจ</div>
            <div className="text-white text-2xl font-bold">{course.satisfaction}/5</div>
          </div>
        </div>

        {course.prereq && (
          <div className="bg-gray-900 p-4 rounded mt-6">
            <div className="text-gray-400 text-sm">ต้องผ่าน</div>
            <div className="text-blue-400">{course.prereq}</div>
          </div>
        )}

        {course.note && (
          <div className="bg-yellow-900 mt-6 p-4 border border-yellow-600 rounded">
            <div className="text-yellow-400">{course.note}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
