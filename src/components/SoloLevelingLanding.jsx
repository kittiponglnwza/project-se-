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
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-indigo-950 opacity-70"></div>

      {/* Subtle Animated Glow */}
      <div
        className="absolute w-[800px] h-[800px] bg-purple-600 rounded-full blur-[120px] opacity-10 transition-all duration-500 ease-out pointer-events-none"
        style={{
          left: `${mousePosition.x - 400}px`,
          top: `${mousePosition.y - 400}px`,
        }}
      ></div>

      {/* Top Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-16 py-8 border-b border-purple-900/30 backdrop-blur-sm">
        <div className="flex items-center gap-12 text-gray-300 text-sm font-light tracking-wide">
          <button onClick={() => navigate('/')} className="hover:text-purple-400 transition-colors duration-300">Home</button>
          <button onClick={() => navigate('/dashboard')} className="hover:text-purple-400 transition-colors duration-300">Stories</button>
          <button onClick={() => navigate('/dashboard')} className="hover:text-purple-400 transition-colors duration-300">GPA Calculator</button>
          <button onClick={() => navigate('/dashboard')} className="hover:text-purple-400 transition-colors duration-300">Miscellaneous</button>
          <button onClick={() => navigate('/dashboard')} className="hover:text-purple-400 transition-colors duration-300">Results</button>
        </div>
        <button
          onClick={() => navigate('/dashboard')}
          className="px-8 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
        >
          MUSES
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-[calc(100vh-100px)]">
        <div className="container mx-auto px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-100px)]">

            {/* Left Text */}
            <div className="flex flex-col justify-center space-y-8 lg:pl-12">
              <div className="space-y-4">
                <h1
                  className="text-6xl lg:text-8xl font-bold text-white leading-tight"
                  style={{
                    textShadow: '0 0 40px rgba(168, 85, 247, 0.5), 0 0 80px rgba(168, 85, 247, 0.3)',
                    letterSpacing: '0.05em'
                  }}
                >
                  Com Sci<br />ต้องรอดดด
                </h1>
                <p className="text-purple-400 text-xl font-light tracking-[0.3em] opacity-80">
                  อย่าดึงฟ้าต่ำ
                </p>
              </div>

              <p className="text-gray-400 text-base leading-relaxed max-w-lg font-light">
                อย่ามาเล่นกับใจ เพราะ รักใครแล้วรักเลย<br />
                ผู้ใด ไม่รู้จักความเจ็บปวด ย่อมไม่รู้จักความสงบที่แท้จริง<br />
                ขออย่างเดียวอยากกระแทกทรงซ้อ
              </p>

              {/* Buttons */}
              <div className="flex gap-6 pt-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <span className="relative z-10 tracking-wide">เข้าสู่ระบบ</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                <button
                  onClick={() => navigate('/dashboard')}
                  className="px-10 py-4 bg-transparent border-2 border-purple-600/50 text-purple-300 font-semibold text-lg rounded-full hover:bg-purple-600/10 hover:border-purple-500 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <span className="tracking-wide">เริ่มต้นใช้งาน</span>
                </button>
              </div>

              {/* Stats Cards */}
              <div className="flex gap-4 pt-8">
                <div className="px-6 py-3 bg-black/40 border border-purple-900/30 rounded-xl backdrop-blur-md">
                  <div className="text-purple-400 text-xs font-light mb-1">Active Users</div>
                  <div className="text-white text-2xl font-bold">1,234+</div>
                </div>
                <div className="px-6 py-3 bg-black/40 border border-purple-900/30 rounded-xl backdrop-blur-md">
                  <div className="text-purple-400 text-xs font-light mb-1">Courses Tracked</div>
                  <div className="text-white text-2xl font-bold">890+</div>
                </div>
              </div>
            </div>

            {/* Right Image - BIG HERO MODE */}
            <div className="relative flex items-center justify-center lg:justify-end h-screen pointer-events-none">

              {/* Glow Behind Image */}
              <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>

              {/* Character Image */}
              <img
                src="/3.png"
                alt="Character"
                className="relative z-10 object-contain drop-shadow-2xl
               scale-125 lg:scale-150"
                style={{
                  maxHeight: '90vh',
                  filter:
                    'drop-shadow(0 0 100px rgba(168, 85, 247, 0.9)) drop-shadow(0 30px 70px rgba(0,0,0,0.9))',
                }}
              />
            </div>


          </div>
        </div>
      </div>

      {/* Stats Card (Right Only) */}
      <div className="absolute bottom-12 right-12 z-20">
        <div className="w-20 h-20 bg-black/60 border border-cyan-900/40 rounded-xl backdrop-blur-md flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="text-cyan-400 text-3xl">👤</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600/50 to-transparent"></div>
    </div>
  );
};

export default SoloLevelingLanding;