import React, { useState } from 'react';

const ProbationCheckerView = () => {
  const [gpa, setGpa] = useState(2.80);
  const [cgpa, setCgpa] = useState(2.50);

  const getProbationStatus = () => {
    if (gpa < 2.00 || cgpa < 2.00) {
      return { status: 'ติดโปร', color: 'text-red-400', message: 'CGPA หรือ GPA ต่ำกว่า 2.00' };
    } else if (gpa < 2.25 || cgpa < 2.25) {
      return { status: 'เสี่ยง', color: 'text-yellow-400', message: 'ใกล้เกณฑ์ติดโปร ควรปรับปรุงเกรด' };
    }
    return { status: 'ปลอดภัย', color: 'text-green-400', message: 'อยู่ในเกณฑ์ที่ดี' };
  };

  const calculateRecoveryGPA = () => {
    if (cgpa >= 2.00) return 'ไม่ต้องกังวล';
    return '2.50+';
  };

  const status = getProbationStatus();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">ตรวจสอบสถานะโปร</h2>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">GPA เทอมล่าสุด</label>
            <input type="number" step="0.01" className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white" value={gpa} onChange={(e) => setGpa(parseFloat(e.target.value) || 0)} />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">CGPA สะสม</label>
            <input type="number" step="0.01" className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white" value={cgpa} onChange={(e) => setCgpa(parseFloat(e.target.value) || 0)} />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="text-center mb-6">
          <div className="text-gray-400 text-sm mb-2">สถานะ</div>
          <div className={`text-4xl font-bold ${status.color} mb-2`}>{status.status}</div>
          <div className="text-gray-400 text-sm">{status.message}</div>
        </div>

        <div className="space-y-4 border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">เกรดที่ต้องดึงเทอมหน้า</span>
            <span className="text-white font-semibold">{calculateRecoveryGPA()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProbationCheckerView;
