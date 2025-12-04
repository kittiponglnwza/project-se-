import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses as allCoursesData } from '../data/courses';

const CourseDetail = () => {
  const { id } = useParams();
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

  const course = allCourses.find(c => c.id === id);

  if (!course) return <div className="text-white">ไม่พบรายวิชา</div>;

  return (
    <div className="space-y-6 p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-400 hover:text-blue-300"
      >
        ← กลับ
      </button>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="mb-6">
          <div className="text-blue-400 font-semibold text-2xl">{course.id}</div>
          <div className="text-white text-xl mt-2">{course.name}</div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-900 p-4 rounded">
            <div className="text-gray-400 text-sm">หน่วยกิต</div>
            <div className="text-white text-2xl font-bold">{course.credits}</div>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <div className="text-gray-400 text-sm">ความยาก</div>
            <div className="text-white text-2xl font-bold">{course.difficulty}/5</div>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <div className="text-gray-400 text-sm">ความพึงพอใจ</div>
            <div className="text-white text-2xl font-bold">{course.satisfaction}/5</div>
          </div>
        </div>

        {course.prereq && (
          <div className="mb-6 p-4 bg-gray-900 rounded">
            <div className="text-gray-400 text-sm mb-1">วิชาที่ต้องผ่านก่อน</div>
            <div className="text-blue-400">{course.prereq}</div>
          </div>
        )}

        <div className="border-t border-gray-700 pt-4">
          <h4 className="text-white font-semibold mb-3">รีวิวจากรุ่นพี่</h4>
          <div className="space-y-3">
            <div className="bg-gray-900 p-4 rounded">
              <div className="text-gray-400 text-sm mb-2">นักศึกษา A</div>
              <div className="text-gray-300 text-sm">
                วิชานี้ต้องทำงานกลุ่มเยอะ แนะนำให้หาเพื่อนกลุ่มที่ดีตั้งแต่แรก
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded">
              <div className="text-gray-400 text-sm mb-2">นักศึกษา B</div>
              <div className="text-gray-300 text-sm">
                สอบยากพอสมควร ต้องเข้าใจคอนเซปต์ก่อนทำโจทย์
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 mt-4">
          <h4 className="text-white font-semibold mb-3">แนวข้อสอบปีก่อน (สมมุติ)</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• อธิบายแนวคิดพื้นฐานของวิชา</li>
            <li>• ทำโจทย์คำนวณ 3 ข้อ</li>
            <li>• เขียนอธิบายการทำงานของระบบตามที่กำหนด</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
