export const courses = {
  semester1: [
    { id: '040203101', name: 'MATHEMATICS I', credits: 3, difficulty: 4.0, satisfaction: 3.8, prereq: null },
    { id: '040613103', name: 'DISCRETE MATH. FOR COMPUTER SCIENCE', credits: 3, difficulty: 4.2, satisfaction: 3.9, prereq: null },
    { id: '040613201', name: 'COMPUTER PROGRAMMING I', credits: 3, difficulty: 3.5, satisfaction: 4.3, prereq: null },
    { id: '040613100', name: 'FUNDAMENTAL OF CS AND PROF. ISSUES', credits: 3, difficulty: 2.8, satisfaction: 4.0, prereq: null },
    { id: '0802xxxxx', name: 'SOCIAL SCIENCES ELECTIVE COURSE', credits: 3, difficulty: 2.5, satisfaction: 4.1, prereq: null },
    { id: '04xxxxxxx', name: 'SCIENCES & MATH. ELECTIVE COURSE', credits: 3, difficulty: 3.8, satisfaction: 3.7, prereq: null },
  ],
  semester2: [
    { id: '040613104', name: 'MATHEMATICS FOR COMPUTER', credits: 3, difficulty: 4.1, satisfaction: 3.8, prereq: '040203101' },
    { id: '040613301', name: 'DATABASE SYSTEMS', credits: 3, difficulty: 3.6, satisfaction: 4.2, prereq: '040613201' },
    { id: '040613203', name: 'STRUCTURE PROGRAMMING', credits: 3, difficulty: 3.8, satisfaction: 4.0, prereq: '040613201' },
    { id: '040613501', name: 'COMPUTER ORGANIZATION AND OPERATING SYSTEM', credits: 3, difficulty: 4.3, satisfaction: 3.9, prereq: '040613100' },
    { id: '040613303', name: 'HUMAN COMPUTER INTERACTION', credits: 3, difficulty: 3.2, satisfaction: 4.3, prereq: null },
    { id: '040503011', name: 'STAT. FOR ENGINEERS AND SCIENTISTS', credits: 3, difficulty: 3.9, satisfaction: 3.8, prereq: null },
  ],
  semester3: [
    { id: '040613105', name: 'NUMERICAL METHODS', credits: 3, difficulty: 4.0, satisfaction: 3.7, prereq: '040613104' },
    { id: '040613205', name: 'DATA STRUCTURE', credits: 3, difficulty: 4.2, satisfaction: 4.1, prereq: '040613203' },
    { id: '040613204', name: 'OBJECT-ORIENTED PROGRAMMING', credits: 3, difficulty: 3.7, satisfaction: 4.2, prereq: '040613203' },
    { id: '040613302', name: 'SYSTEM ANALYSIS AND DESIGN', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: '040613301' },
    { id: '040613xxx', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: null },
    { id: '08xxxxxxx', name: 'LANGUAGE ELECTIVE COURSE', credits: 3, difficulty: 2.8, satisfaction: 4.2, prereq: null },
  ],
  semester4: [
    { id: '040613502', name: 'COMPUTER NETWORKS', credits: 3, difficulty: 3.8, satisfaction: 4.1, prereq: '040613501' },
    { id: '040613206', name: 'DESIGN AND ANALYSIS OF ALGORITHM', credits: 3, difficulty: 4.5, satisfaction: 4.0, prereq: '040613205' },
    { id: '040613701', name: 'INTELLIGENT SYSTEMS', credits: 3, difficulty: 4.3, satisfaction: 4.2, prereq: '040613205' },
    { id: '040613306', name: 'SOFTWARE ENGINEERING', credits: 3, difficulty: 3.6, satisfaction: 4.3, prereq: '040613302' },
    { id: '040613601', name: 'COMPUTER SYSTEM SECURITY', credits: 3, difficulty: 4.0, satisfaction: 4.1, prereq: '040613100' },
    { id: '08xxxxxxx', name: 'LANGUAGE ELECTIVE COURSE', credits: 3, difficulty: 2.8, satisfaction: 4.2, prereq: null },
  ],
  semester5: [
    { id: '040613xxx', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: null },
    { id: '040613xxx-2', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: null },
    { id: '040613xxx-3', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: null },
    { id: '040613xxx-4', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: null },
    { id: '04xxxxxxx-2', name: 'SCIENCES & MATH. ELECTIVE COURSE', credits: 3, difficulty: 3.8, satisfaction: 3.7, prereq: null },
    { id: '08xxxxxxx-2', name: 'LANGUAGE ELECTIVE COURSE', credits: 3, difficulty: 2.8, satisfaction: 4.2, prereq: null },
  ],
  semester6: [
    { id: '040613xxx-5', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: null },
    { id: '040613xxx-6', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: null },
    { id: '040613xxx-7', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: null },
    { id: '040003004', name: 'DESIGN THINKING', credits: 3, difficulty: 3.0, satisfaction: 4.4, prereq: null },
    { id: '0803xxxxx', name: 'SPORT AND RECREATION ELECTIVE COURSE', credits: 1, difficulty: 2.0, satisfaction: 4.5, prereq: null },
    { id: '08xxxxxxx-3', name: 'LANGUAGE ELECTIVE COURSE', credits: 3, difficulty: 2.8, satisfaction: 4.2, prereq: null },
  ],
  semester7: [
    { id: 'INTERNSHIP', name: 'INTERNSHIP', credits: 0, difficulty: 3.5, satisfaction: 4.5, prereq: null, note: '240 hours' },
  ],
  semester8: [
    { id: '040613141', name: 'SPECIAL PROJECT I', credits: 1, difficulty: 3.8, satisfaction: 4.3, prereq: null },
    { id: '040613xxx-8', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: null },
    { id: '040613xxx-9', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: null },
    { id: 'xxxxxxxxx', name: 'FREE ELECTIVE COURSE', credits: 3, difficulty: 3.0, satisfaction: 4.0, prereq: null },
  ],
  semester9: [
    { id: '040613142', name: 'SPECIAL PROJECT II', credits: 3, difficulty: 4.0, satisfaction: 4.4, prereq: '040613141' },
    { id: '0802xxxxx-2', name: 'SOCIAL SCIENCE ELECTIVE COURSE', credits: 3, difficulty: 2.5, satisfaction: 4.1, prereq: null },
    { id: '0803xxxxx-2', name: 'HUMANTIES ELECTIVE COURSE', credits: 3, difficulty: 2.6, satisfaction: 4.2, prereq: null },
    { id: 'xxxxxxxxx-2', name: 'FREE ELECTIVE COURSE', credits: 3, difficulty: 3.0, satisfaction: 4.0, prereq: null },
  ],
};

/* ex 2

export const courses = {
  semester1: [
    { id: '040203101', name: 'MATHEMATICS I', credits: 3, difficulty: 4.0, satisfaction: 3.8, prereq: null },
    { id: '040613103', name: 'DISCRETE MATH. FOR COMPUTER SCIENCE', credits: 3, difficulty: 4.2, satisfaction: 3.9, prereq: null },
    { id: '040613201', name: 'COMPUTER PROGRAMMING I', credits: 3, difficulty: 3.5, satisfaction: 4.3, prereq: null },
    { id: '040613100', name: 'FUNDAMENTAL OF CS AND PROFESSIONAL ISSUES', credits: 3, difficulty: 2.8, satisfaction: 4.0, prereq: null },
    { id: '0802xxxxx', name: 'SOCIAL SCIENCES ELECTIVE COURSE', credits: 3, difficulty: 2.5, satisfaction: 4.1, prereq: null },
    { id: '04xxxxxxx', name: 'SCIENCES & MATH. ELECTIVE COURSE', credits: 3, difficulty: 3.8, satisfaction: 3.7, prereq: null },
  ],

  semester2: [
    { id: '040613104', name: 'MATHEMATICS FOR COMPUTER', credits: 3, difficulty: 4.1, satisfaction: 3.8, prereq: '040203101' },
    { id: '040613301', name: 'DATABASE SYSTEMS', credits: 3, difficulty: 3.6, satisfaction: 4.2, prereq: '040613201' },
    { id: '040613203', name: 'STRUCTURE PROGRAMMING', credits: 3, difficulty: 3.8, satisfaction: 4.0, prereq: '040613201' },
    { id: '040613501', name: 'COMPUTER ORGANIZATION AND OPERATING SYSTEM', credits: 3, difficulty: 4.3, satisfaction: 3.9, prereq: '040613100' },
    { id: '040613303', name: 'HUMAN COMPUTER INTERACTION', credits: 3, difficulty: 3.2, satisfaction: 4.3, prereq: null },
    { id: '040503011', name: 'STAT. FOR ENGINEERS AND SCIENTISTS', credits: 3, difficulty: 3.9, satisfaction: 3.8, prereq: null },
  ],

  semester3: [
    { id: '040613105', name: 'NUMERICAL METHODS', credits: 3, difficulty: 4.0, satisfaction: 3.7, prereq: '040613104' },
    { id: '040613205', name: 'DATA STRUCTURE', credits: 3, difficulty: 4.2, satisfaction: 4.1, prereq: '040613203' },
    { id: '040613204', name: 'OBJECT-ORIENTED PROGRAMMING', credits: 3, difficulty: 3.7, satisfaction: 4.2, prereq: '040613203' },
    { id: '040613302', name: 'SYSTEM ANALYSIS AND DESIGN', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: '040613301' },
    { id: '040613xxx', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.5, satisfaction: 4.0, prereq: null },
    { id: '08xxxxxxx', name: 'LANGUAGE ELECTIVE COURSE', credits: 3, difficulty: 2.8, satisfaction: 4.2, prereq: null },
  ],

  semester4: [
    { id: '040613502', name: 'COMPUTER NETWORKS', credits: 3, difficulty: 3.8, satisfaction: 4.1, prereq: '040613501' },
    { id: '040613206', name: 'DESIGN AND ANALYSIS OF ALGORITHM', credits: 3, difficulty: 4.5, satisfaction: 4.0, prereq: '040613205' },
    { id: '040613701', name: 'INTELLIGENT SYSTEMS', credits: 3, difficulty: 4.3, satisfaction: 4.2, prereq: '040613205' },
    { id: '040613306', name: 'SOFTWARE ENGINEERING', credits: 3, difficulty: 3.6, satisfaction: 4.3, prereq: '040613302' },
    { id: '040613601', name: 'COMPUTER SYSTEM SECURITY', credits: 3, difficulty: 4.0, satisfaction: 4.1, prereq: '040613100' },
    { id: '08xxxxxxx', name: 'LANGUAGE ELECTIVE COURSE', credits: 3, difficulty: 2.8, satisfaction: 4.2, prereq: null },
  ],

  semester5: [
    { id: '040613505', name: 'NETWORK MANAGEMENT AND ADMINISTRATION', credits: 3, difficulty: 3.7, satisfaction: 4.1, prereq: '040613502' },
    { id: '040613307', name: 'SOFTWARE DEVELOPMENT PROCESS', credits: 3, difficulty: 3.6, satisfaction: 4.0, prereq: '040613306' },
    { id: '040613603', name: 'CRYPTOGRAPHY AND NETWORK SECURITY', credits: 3, difficulty: 4.2, satisfaction: 4.0, prereq: '040613601' },
    { id: '040613310', name: 'WEB PROGRAMMING AND WEB SERVICES', credits: 3, difficulty: 3.4, satisfaction: 4.2, prereq: '040613204' },
    { id: '04xxxxxxx', name: 'FREE ELECTIVE COURSE', credits: 3, difficulty: 2.5, satisfaction: 4.3, prereq: null },
    { id: '0406xxxx', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.0, satisfaction: 4.0, prereq: null },
  ],

  semester6: [
    { id: '040613306', name: 'SOFTWARE QUALITY ASSURANCE', credits: 3, difficulty: 3.8, satisfaction: 4.0, prereq: '040613307' },
    { id: '040613607', name: 'ADVANCE COMPUTER SECURITY', credits: 3, difficulty: 4.3, satisfaction: 4.1, prereq: '040613603' },
    { id: '040613110', name: 'MOBILE PROGRAMMING', credits: 3, difficulty: 3.5, satisfaction: 4.2, prereq: '040613204' },
    { id: '040613xxx', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.2, satisfaction: 4.0, prereq: null },
    { id: '04xxxxxxx', name: 'FREE ELECTIVE COURSE', credits: 3, difficulty: 2.7, satisfaction: 4.2, prereq: null },
    { id: '040613107', name: 'CO-OPERATIVE EDUCATION PREPARATION', credits: 3, difficulty: 2.8, satisfaction: 4.0, prereq: null },
  ],

  semester7: [
    { id: '040613112', name: 'WEB APPLICATION SECURITY', credits: 3, difficulty: 4.0, satisfaction: 4.1, prereq: '040613603' },
    { id: '040613102', name: 'SOFTWARE SECURITY TESTING', credits: 3, difficulty: 4.1, satisfaction: 4.0, prereq: '040613306' },
    { id: '040613xxx', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.2, satisfaction: 4.2, prereq: null },
    { id: '04xxxxxxx', name: 'FREE ELECTIVE COURSE', credits: 3, difficulty: 2.8, satisfaction: 4.1, prereq: null },
    { id: '040613108', name: 'COMPUTER SCIENCE SEMINAR', credits: 1, difficulty: 2.0, satisfaction: 4.0, prereq: null },
  ],

  semester8: [
    { id: '040613111', name: 'PROJECT I', credits: 3, difficulty: 4.0, satisfaction: 4.3, prereq: '040613307' },
    { id: '04xxxxxxx', name: 'FREE ELECTIVE COURSE', credits: 3, difficulty: 2.5, satisfaction: 4.1, prereq: null },
    { id: '040613xxx', name: 'PROFESSIONAL ELECTIVE COURSE', credits: 3, difficulty: 3.2, satisfaction: 4.0, prereq: null },
  ],

  semester9: [
    { id: '040613112', name: 'PROJECT II', credits: 3, difficulty: 4.2, satisfaction: 4.4, prereq: '040613111' },
    { id: '040613113', name: 'IT PROFESSIONAL ETHICS', credits: 3, difficulty: 2.5, satisfaction: 4.0, prereq: null },
  ],
};
*/