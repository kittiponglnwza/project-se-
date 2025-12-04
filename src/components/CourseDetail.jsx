import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses as allCoursesData } from '../data/courses';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 5,
    difficulty: 3,
    workload: 3,
    comment: '',
    tips: '',
    professor: '',
    semester: '',
    grade: ''
  });
  const [showReviewForm, setShowReviewForm] = useState(false);

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

  // โหลดรีวิวจาก localStorage
  useEffect(() => {
    const savedReviews = localStorage.getItem(`reviews_${id}`);
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, [id]);

  // บันทึกรีวิว
  const handleSubmitReview = (e) => {
    e.preventDefault();
    const review = {
      ...newReview,
      id: Date.now(),
      date: new Date().toLocaleDateString('th-TH'),
      likes: 0
    };
    
    const updatedReviews = [review, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
    
    // รีเซ็ตฟอร์ม
    setNewReview({
      rating: 5,
      difficulty: 3,
      workload: 3,
      comment: '',
      tips: '',
      professor: '',
      semester: '',
      grade: ''
    });
    setShowReviewForm(false);
  };

  // กด Like รีวิว
  const handleLikeReview = (reviewId) => {
    const updatedReviews = reviews.map(review => 
      review.id === reviewId 
        ? { ...review, likes: review.likes + 1 }
        : review
    );
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
  };

  // คำนวณค่าเฉลี่ย
  const avgRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 'N/A';
  
  const avgDifficulty = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.difficulty, 0) / reviews.length).toFixed(1)
    : 'N/A';

  const avgWorkload = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.workload, 0) / reviews.length).toFixed(1)
    : 'N/A';

  if (!course) return <div className="text-white p-6">ไม่พบรายวิชา</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#1e1b4b] p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <button
          onClick={() => navigate(-1)}
          className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
        >
          <span className="text-xl">←</span> กลับ
        </button>

        {/* Course Info Card */}
        <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] p-6 rounded-2xl border border-gray-600 shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-blue-400 font-bold text-3xl mb-2">{course.id}</div>
              <div className="text-white text-2xl font-semibold">{course.name}</div>
            </div>
            <div className="text-right">
              <div className="text-gray-400 text-sm">หน่วยกิต</div>
              <div className="text-white text-3xl font-bold">{course.credits}</div>
            </div>
          </div>

          {course.prereq && (
            <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-lg">
              <span className="text-cyan-400 text-sm">📚 ต้องผ่าน: {course.prereq}</span>
            </div>
          )}
        </div>

        {/* Statistics Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-sm mb-1">ความพึงพอใจเฉลี่ย</div>
                <div className="text-white text-3xl font-bold">{avgRating}</div>
              </div>
              <div className="text-4xl">⭐</div>
            </div>
            <div className="text-gray-400 text-xs mt-2">{reviews.length} รีวิว</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-sm mb-1">ความยากเฉลี่ย</div>
                <div className="text-white text-3xl font-bold">{avgDifficulty}</div>
              </div>
              <div className="text-4xl">🎯</div>
            </div>
            <div className="text-gray-400 text-xs mt-2">จาก 5 คะแนน</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-sm mb-1">ภาระงานเฉลี่ย</div>
                <div className="text-white text-3xl font-bold">{avgWorkload}</div>
              </div>
              <div className="text-4xl">📝</div>
            </div>
            <div className="text-gray-400 text-xs mt-2">จาก 5 คะแนน</div>
          </div>
        </div>

        {/* Add Review Button */}
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {showReviewForm ? '❌ ยกเลิก' : '✍️ เขียนรีวิววิชานี้'}
        </button>

        {/* Review Form */}
        {showReviewForm && (
          <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] p-6 rounded-2xl border border-gray-600 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">แบ่งปันประสบการณ์ของคุณ</h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-sm block mb-2">อาจารย์ผู้สอน</label>
                  <input
                    type="text"
                    value={newReview.professor}
                    onChange={(e) => setNewReview({...newReview, professor: e.target.value})}
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                    placeholder="ชื่ออาจารย์"
                  />
                </div>
                <div>
                  <label className="text-gray-300 text-sm block mb-2">ภาคการศึกษา</label>
                  <input
                    type="text"
                    value={newReview.semester}
                    onChange={(e) => setNewReview({...newReview, semester: e.target.value})}
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                    placeholder="เช่น 2/2566"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2">เกรดที่ได้ (ถ้าต้องการบอก)</label>
                <input
                  type="text"
                  value={newReview.grade}
                  onChange={(e) => setNewReview({...newReview, grade: e.target.value})}
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                  placeholder="เช่น A, B+, C"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-gray-300 text-sm block mb-2">ความพึงพอใจ ⭐</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})}
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                  >
                    {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-gray-300 text-sm block mb-2">ความยาก 🎯</label>
                  <select
                    value={newReview.difficulty}
                    onChange={(e) => setNewReview({...newReview, difficulty: Number(e.target.value)})}
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                  >
                    {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-gray-300 text-sm block mb-2">ภาระงาน 📝</label>
                  <select
                    value={newReview.workload}
                    onChange={(e) => setNewReview({...newReview, workload: Number(e.target.value)})}
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                  >
                    {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2">ความคิดเห็น / ประสบการณ์ *</label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none h-24"
                  placeholder="แชร์ประสบการณ์ของคุณกับวิชานี้..."
                  required
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2">เทคนิคการเรียน / คำแนะนำ</label>
                <textarea
                  value={newReview.tips}
                  onChange={(e) => setNewReview({...newReview, tips: e.target.value})}
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none h-20"
                  placeholder="แชร์ tips & tricks สำหรับน้อง ๆ ที่จะเรียนวิชานี้..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                📮 โพสต์รีวิว
              </button>
            </form>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            รีวิวจากรุ่นพี่ ({reviews.length})
          </h3>

          {reviews.length === 0 ? (
            <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] p-8 rounded-2xl border border-gray-600 text-center">
              <div className="text-6xl mb-4">📝</div>
              <div className="text-gray-400">ยังไม่มีรีวิว - เป็นคนแรกที่รีวิววิชานี้!</div>
            </div>
          ) : (
            reviews.map(review => (
              <div key={review.id} className="bg-gradient-to-r from-[#1e293b] to-[#334155] p-6 rounded-2xl border border-gray-600 shadow-lg hover:border-blue-500/50 transition-all">
                
                {/* Review Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {review.professor ? review.professor[0] : '?'}
                      </div>
                      <div>
                        {review.professor && (
                          <div className="text-white font-semibold">อ. {review.professor}</div>
                        )}
                        <div className="text-gray-400 text-xs">{review.date}</div>
                      </div>
                    </div>
                    {review.semester && (
                      <div className="text-gray-400 text-sm">ภาคการศึกษา: {review.semester}</div>
                    )}
                  </div>
                  {review.grade && (
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 px-4 py-2 rounded-lg">
                      <div className="text-yellow-400 font-bold text-lg">{review.grade}</div>
                    </div>
                  )}
                </div>

                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400 text-xs mb-1">ความพึงพอใจ</div>
                    <div className="text-yellow-400 font-bold">{review.rating} ⭐</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400 text-xs mb-1">ความยาก</div>
                    <div className="text-purple-400 font-bold">{review.difficulty} 🎯</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400 text-xs mb-1">ภาระงาน</div>
                    <div className="text-cyan-400 font-bold">{review.workload} 📝</div>
                  </div>
                </div>

                {/* Comment */}
                <div className="mb-3">
                  <div className="text-gray-300 leading-relaxed">{review.comment}</div>
                </div>

                {/* Tips */}
                {review.tips && (
                  <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg mb-3">
                    <div className="text-blue-400 text-sm font-semibold mb-1">💡 เทคนิคการเรียน</div>
                    <div className="text-gray-300 text-sm">{review.tips}</div>
                  </div>
                )}

                {/* Like Button */}
                <div className="flex items-center gap-2 pt-3 border-t border-gray-700">
                  <button
                    onClick={() => handleLikeReview(review.id)}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    <span>👍</span>
                    <span>มีประโยชน์ ({review.likes})</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;