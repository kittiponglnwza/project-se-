import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';

const semesterNames = {
  semester1: 'SEMESTER 1',
  semester2: 'SEMESTER 2',
  semester3: 'SEMESTER 3',
  semester4: 'SEMESTER 4',
  semester5: 'SEMESTER 5',
  semester6: 'SEMESTER 6',
  semester7: 'SEMESTER 7 (SUMMER)',
  semester8: 'SEMESTER 8',
  semester9: 'SEMESTER 9',
};

const RoadmapView = ({ onSelectCourse }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // วาดลูกศรเชื่อมระหว่างวิชาแบบสวยงาม
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    
    // ตั้งขนาด canvas ให้เท่ากับ container
    const resizeCanvas = () => {
      canvas.width = container.scrollWidth;
      canvas.height = container.scrollHeight;
      drawArrows();
    };

    const drawArrows = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // วนหาวิชาทั้งหมดที่มี prerequisite
      Object.entries(courses).forEach(([semesterKey, courseList], semesterIndex) => {
        courseList.forEach(course => {
          if (!course.prereq) return;
          
          const fromElement = container.querySelector(`[data-course-id="${course.prereq}"]`);
          const toElement = container.querySelector(`[data-course-id="${course.id}"]`);
          
          if (fromElement && toElement) {
            const fromRect = fromElement.getBoundingClientRect();
            const toRect = toElement.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            // ตรวจสอบว่าวิชาอยู่คนละเทอมหรือไม่ (ถ้าอยู่เทอมเดียวกันจะไม่วาดลูกศร)
            const fromSemester = Object.entries(courses).find(([key, list]) => 
              list.some(c => c.id === course.prereq)
            );
            const toSemester = Object.entries(courses).find(([key, list]) => 
              list.some(c => c.id === course.id)
            );
            
            if (fromSemester && toSemester && fromSemester[0] === toSemester[0]) {
              return; // ข้ามถ้าอยู่เทอมเดียวกัน
            }
            
            // คำนวณตำแหน่งจุดเริ่มต้นและปลาย
            const startX = fromRect.left + fromRect.width / 2 - containerRect.left;
            const startY = fromRect.bottom - containerRect.top + 5;
            const endX = toRect.left + toRect.width / 2 - containerRect.left;
            const endY = toRect.top - containerRect.top - 5;
            
            // ถ้าห่างกันมากเกินไป (มากกว่า 300px) ให้ใช้สีอ่อนลง
            const distance = Math.abs(endY - startY);
            const opacity = distance > 300 ? 0.3 : 0.8;
            
            // สร้าง gradient สีสวยงาม
            const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity})`);
            gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity})`);
            
            // วาดเงาให้ลูกศร
            ctx.shadowColor = `rgba(59, 130, 246, ${opacity * 0.5})`;
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            
            // วาดเส้นโค้งแบบ Bezier curve (โค้งในแนวตั้ง)
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2.5; // 2.5
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            
            // คำนวณจุดควบคุมสำหรับเส้นโค้งแนวตั้ง
            const midY = startY + (endY - startY) / 2;
            const controlX1 = startX;
            const controlY1 = midY;
            const controlX2 = endX;
            const controlY2 = midY;
            
            ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
            ctx.stroke();
            
            // วาดหัวลูกศรแบบสวยงาม (รูปหยดน้ำชี้ลง)
            const arrowSize = 12;
            
            // วาดเงาของหัวลูกศร
            ctx.shadowColor = `rgba(6, 182, 212, ${opacity * 0.8})`;
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 2;
            
            // วาดหัวลูกศรแบบโค้งมน
            ctx.fillStyle = `rgba(6, 182, 212, ${opacity + 0.2})`;
            ctx.beginPath();
            ctx.moveTo(endX, endY);
            ctx.lineTo(endX - arrowSize / 2, endY - arrowSize);
            ctx.quadraticCurveTo(endX, endY - arrowSize * 0.7, endX + arrowSize / 2, endY - arrowSize);
            ctx.closePath();
            ctx.fill();
            
       
            
            // รีเซ็ตเงา
            ctx.shadowBlur = 0;
          }
        });
      });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    container.addEventListener('scroll', drawArrows);
    
    // รอให้ DOM โหลดเสร็จก่อนวาด
    const timer = setTimeout(drawArrows, 100);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container.removeEventListener('scroll', drawArrows);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#1e1b4b] p-4 flex flex-col relative">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6 flex-shrink-0">
        แผนการเรียน Computer Science 🎓
      </h2>

      <div ref={containerRef} className="space-y-4 relative">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />
        
        {Object.entries(courses).map(([semester, courseList]) => (
          <div key={semester} className="bg-gradient-to-r from-[#1e293b] to-[#334155] p-4 rounded-2xl border border-gray-600 shadow-xl flex-shrink-0 relative backdrop-blur-sm">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-3">
              {semesterNames[semester]}
            </h3>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              {courseList.map(course => (
                <div
                  key={course.id}
                  data-course-id={course.id}
                  onClick={() => navigate(`/course/${course.id}`)}
                  className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-3 rounded-xl border-2 border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-[220px] flex flex-col"
                >
                  <div className="text-blue-400 font-bold text-sm mb-1">{course.id}</div>

                  <div className="text-white text-xs mb-2 line-clamp-2 leading-tight font-medium">
                    {course.name}
                  </div>

                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span className="bg-blue-500/10 px-2 py-0.5 rounded-full">{course.credits} หน่วย</span>
                    <span className="bg-purple-500/10 px-2 py-0.5 rounded-full">⭐ {course.difficulty}/5</span>
                  </div>

                  {course.prereq && (
                    <div className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-md truncate">
                      ต้องผ่าน: {course.prereq}
                    </div>
                  )}

                  {course.note && (
                    <div className="text-[10px] text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded-md truncate mt-1">
                      📌 {course.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapView;