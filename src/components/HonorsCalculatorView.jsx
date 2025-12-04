import React, { useState } from 'react';

const HonorsCalculatorView = () => {
  const [cgpa, setCgpa] = useState(3.50);
  const [completedCredits, setCompletedCredits] = useState(90);
  const [remainingCredits, setRemainingCredits] = useState(42);

  const getHonorStatus = () => {
    if (cgpa >= 3.75) return { level: 'เกียรตินิยมอันดับ 1', color: 'text-yellow-400' };
    if (cgpa >= 3.50) return { level: 'เกียรตินิยมอันดับ 2', color: 'text-blue-400' };
    return { level: 'ยังไม่ถึงเกณฑ์', color: 'text-gray-400' };
  };

  const calculateRequiredGPA = (target) => {
    const totalCredits = completedCredits + remainingCredits;
    const requiredPoints = target * totalCredits;
    const currentPoints = cgpa * completedCredits;
    const neededPoints = requiredPoints - currentPoints;
    const requiredGPA = neededPoints / remainingCredits;
    if (remainingCredits <= 0) return '--';
    if (requiredGPA > 4.0) return 'เป็นไปไม่ได้';
    if (requiredGPA <= 0) return '0.00';
    return requiredGPA.toFixed(2);
  };

  const status = getHonorStatus();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">คำนวณเกียรตินิยม</h2>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">CGPA ปัจจุบัน</label>
            <input type="number" step="0.01" className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white" value={cgpa} onChange={(e) => setCgpa(parseFloat(e.target.value) || 0)} />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">หน่วยกิตที่ผ่านแล้ว</label>
            <input type="number" className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white" value={completedCredits} onChange={(e) => setCompletedCredits(parseInt(e.target.value) || 0)} />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">หน่วยกิตที่เหลือ</label>
            <input type="number" className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white" value={remainingCredits} onChange={(e) => setRemainingCredits(parseInt(e.target.value) || 0)} />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="text-center mb-6">
          <div className="text-gray-400 text-sm mb-2">สถานะปัจจุบัน</div>
          <div className={`text-3xl font-bold ${status.color}`}>{status.level}</div>
        </div>

        <div className="space-y-4">
          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">เกรดที่ต้องได้เพื่อเกียรตินิยมอันดับ 1 (3.75)</span>
              <span className="text-white font-semibold">{calculateRequiredGPA(3.75)}</span>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">เกรดที่ต้องได้เพื่อเกียรตินิยมอันดับ 2 (3.50)</span>
              <span className="text-white font-semibold">{calculateRequiredGPA(3.50)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HonorsCalculatorView;
