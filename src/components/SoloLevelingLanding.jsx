import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SoloLevelingLanding = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-indigo-950 opacity-70"></div>

      {/* Glow following mouse */}
      <div
        className="absolute w-[700px] h-[700px] bg-purple-600 rounded-full blur-[120px] opacity-10 transition-all duration-500 pointer-events-none"
        style={{
          left: `${mousePosition.x - 350}px`,
          top: `${mousePosition.y - 350}px`,
        }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-12 py-6 border-b border-purple-900/20 backdrop-blur-sm">
        <div className="flex items-center gap-10 text-gray-300 text-sm font-light">
          <button onClick={() => navigate('/')} className="hover:text-purple-400">Home</button>
          <button onClick={() => navigate('/dashboard')} className="hover:text-purple-400">Stories</button>
          <button onClick={() => navigate('/dashboard')} className="hover:text-purple-400">GPA Calculator</button>
          <button onClick={() => navigate('/dashboard')} className="hover:text-purple-400">Tools</button>
          <button onClick={() => navigate('/dashboard')} className="hover:text-purple-400">Results</button>
        </div>
        <button
          onClick={() => navigate('/dashboard')}
          className="px-8 py-2 bg-white text-black rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all hover:scale-105"
        >
          MUSES
        </button>
      </nav>

      {/* Main Section */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-16 py-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[80vh]">

            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <h1
                className="text-6xl lg:text-8xl font-bold text-white leading-tight"
                style={{
                  textShadow: '0 0 40px rgba(168, 85, 247, 0.5)',
                  letterSpacing: '0.04em'
                }}
              >
                Com Sci<br />ต้องรอดดด
              </h1>

              <p className="text-purple-300 text-xl tracking-[0.3em] opacity-80">
                อย่าดึงฟ้าต่ำ
              </p>

              <p className="text-gray-300 max-w-md font-light leading-relaxed">
                อย่ามาเล่นกับใจ เพราะ รักใครแล้วรักเลย<br />
                ผู้ใดไม่รู้จักความเจ็บปวด ย่อมไม่รู้จักความสงบที่แท้จริง<br />
                ขออย่างเดียวอยากกระแทกทรงซ้อ
              </p>

              {/* Buttons */}
              <div className="flex gap-6">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
                >
                  <span className="relative z-10">เข้าสู่ระบบ</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"></div>
                </button>

                <button
                  onClick={() => navigate('/dashboard')}
                  className="px-10 py-4 bg-transparent border-2 border-purple-600/50 text-purple-300 rounded-full hover:bg-purple-600/10 hover:text-white transition-all hover:scale-105"
                >
                  เริ่มต้นใช้งาน
                </button>
              </div>

              {/* Small Stats */}
              <div className="flex gap-4 pt-4">
                <div className="px-6 py-3 bg-black/40 border border-purple-900/30 rounded-xl backdrop-blur-md">
                  <div className="text-purple-400 text-xs mb-1">Active Users</div>
                  <div className="text-white text-2xl font-bold">1,234+</div>
                </div>
                <div className="px-6 py-3 bg-black/40 border border-purple-900/30 rounded-xl backdrop-blur-md">
                  <div className="text-purple-400 text-xs mb-1">Courses Tracked</div>
                  <div className="text-white text-2xl font-bold">890+</div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE (NO overflow, centered better) */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[110px]"></div>

              <img
                src="/5.png"
                alt="Character"
                className="relative z-10 object-contain"
                style={{
                  maxHeight: "75vh",
                  width: "auto",
                  filter: 'drop-shadow(0 0 70px rgba(168, 85, 247, 0.8))'
                }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* Profile Button */}
      <div className="absolute bottom-10 right-10 z-20">
        <div className="w-20 h-20 bg-black/60 border border-purple-800 rounded-xl backdrop-blur-md flex items-center justify-center hover:scale-105 transition duration-300 cursor-pointer">
          <div className="text-cyan-400 text-3xl">👤</div>
        </div>
      </div>

    </div>
  );
};

export default SoloLevelingLanding;
