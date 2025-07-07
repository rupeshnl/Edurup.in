export interface Course {
  id: string;
  label: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: string;
  level: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  features: string[];
  skills: string[];
  tools: string[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
  }[];
  curriculum: {
    module: string;
    topics: string[];
    duration: string;
  }[];
  mentors: {
    name: string;
    role: string;
    experience: string;
    image: string;
    linkedin?: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    image: string;
    rating: number;
    review: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  fee: {
    original: number;
    discounted: number;
    currency: string;
    installments?: {
      months: number;
      amount: number;
    }[];
  };
  jobRoles: string[];
  averageSalary: {
    min: number;
    max: number;
    currency: string;
  };
  placementSupport: string[];
  certification: string;
  prerequisites: string[];
  courseHighlights: string[];
}

export const courses: Course[] = [
  {
    id: "mern-stack",
    label: "MERN Stack Development",
    slug: "mern-stack-developer-course",
    title: "Full Stack MERN Developer Course",
    description:
      "Master the MERN stack (MongoDB, Express.js, React.js, Node.js) and become a full-stack web developer. Build real-world projects and get placed in top companies.",
    shortDescription:
      "Complete MERN stack development course with hands-on projects and placement assistance.",
    duration: "6 months",
    level: "Beginner to Advanced",
    heroTitle: "Become a Full Stack MERN Developer",
    heroSubtitle: "Master MongoDB, Express.js, React.js & Node.js",
    heroDescription:
      "Join our comprehensive MERN stack course and build real-world applications. Get hands-on experience with industry-standard tools and technologies.",
    features: [
      "Live Interactive Classes",
      "Real-world Projects",
      "1-on-1 Mentorship",
      "Placement Assistance",
      "Industry Certification",
      "Lifetime Access",
    ],
    skills: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git & GitHub",
      "Deployment",
    ],
    tools: [
      "VS Code",
      "MongoDB Compass",
      "Postman",
      "Git",
      "Figma",
      "Chrome DevTools",
      "Netlify",
      "Heroku",
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description:
          "Full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      },
      {
        title: "Social Media Dashboard",
        description:
          "Real-time social media management platform with analytics, post scheduling, and user engagement tracking.",
        technologies: ["React", "Express.js", "Socket.io", "MongoDB"],
      },
      {
        title: "Task Management System",
        description:
          "Collaborative project management tool with team features, real-time updates, and progress tracking.",
        technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      },
    ],
    curriculum: [
      {
        module: "Frontend Development with React",
        topics: [
          "HTML5 & CSS3",
          "JavaScript ES6+",
          "React Components",
          "State Management",
          "React Router",
          "Hooks & Context API",
        ],
        duration: "2 months",
      },
      {
        module: "Backend Development with Node.js",
        topics: [
          "Node.js Fundamentals",
          "Express.js Framework",
          "REST API Development",
          "Authentication & Authorization",
          "Middleware",
          "Error Handling",
        ],
        duration: "2 months",
      },
      {
        module: "Database with MongoDB",
        topics: [
          "NoSQL Concepts",
          "MongoDB CRUD Operations",
          "Mongoose ODM",
          "Database Design",
          "Aggregation Pipeline",
          "Indexing",
        ],
        duration: "1 month",
      },
      {
        module: "Full Stack Integration & Deployment",
        topics: [
          "Frontend-Backend Integration",
          "File Upload",
          "Testing",
          "Deployment",
          "Performance Optimization",
          "Security Best Practices",
        ],
        duration: "1 month",
      },
    ],
    mentors: [
      {
        name: "Rahul Sharma",
        role: "Senior Full Stack Developer",
        experience: "5+ years at Google",
        image: "/mentor1.jpeg",
        linkedin: "https://linkedin.com/in/rahulsharma",
      },
      {
        name: "Priya Patel",
        role: "MERN Stack Architect",
        experience: "7+ years at Amazon",
        image: "/mentor2.jpg",
        linkedin: "https://linkedin.com/in/priyapatel",
      },
    ],
    testimonials: [
      {
        name: "Amit Kumar",
        role: "Full Stack Developer",
        company: "TCS",
        image: "/person1.jpg",
        rating: 5,
        review:
          "The MERN stack course at Edurup transformed my career. The hands-on projects and mentorship helped me land a job at TCS with a 40% salary hike.",
      },
      {
        name: "Sneha Reddy",
        role: "Frontend Developer",
        company: "Wipro",
        image: "/person2.jpg",
        rating: 5,
        review:
          "Excellent course content and supportive instructors. I learned everything from basics to advanced concepts and got placed within 3 months of completion.",
      },
    ],
    faq: [
      {
        question: "Do I need prior programming experience?",
        answer:
          "No, this course is designed for beginners. We start with the basics and gradually progress to advanced topics.",
      },
      {
        question: "Will I get placement assistance?",
        answer:
          "Yes, we provide comprehensive placement assistance including resume building, interview preparation, and job referrals.",
      },
      {
        question: "What is the duration of the course?",
        answer:
          "The course duration is 6 months with flexible timings. You can choose between weekday and weekend batches.",
      },
    ],
    fee: {
      original: 50000,
      discounted: 35000,
      currency: "INR",
      installments: [
        { months: 3, amount: 12000 },
        { months: 6, amount: 6000 },
      ],
    },
    jobRoles: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "JavaScript Developer",
      "React Developer",
    ],
    averageSalary: {
      min: 400000,
      max: 800000,
      currency: "INR",
    },
    placementSupport: [
      "Resume Building",
      "Interview Preparation",
      "Mock Interviews",
      "Job Referrals",
      "Portfolio Development",
      "LinkedIn Optimization",
    ],
    certification: "Industry-recognized MERN Stack Developer Certificate",
    prerequisites: [
      "Basic computer knowledge",
      "Internet connection",
      "Dedication to learn",
    ],
    courseHighlights: [
      "100% Hands-on Learning",
      "Real Industry Projects",
      "1:1 Mentorship",
      "Lifetime Support",
      "Job Guarantee Program",
    ],
  },
  {
    id: "data-analytics",
    label: "Data Analytics",
    slug: "data-analytics-course",
    title: "Complete Data Analytics Course",
    description:
      "Master data analytics with Python, SQL, Excel, and visualization tools. Learn to extract insights from data and make data-driven decisions.",
    shortDescription:
      "Comprehensive data analytics course covering Python, SQL, Excel, and data visualization.",
    duration: "5 months",
    level: "Beginner to Advanced",
    heroTitle: "Become a Data Analytics Expert",
    heroSubtitle: "Master Python, SQL, Excel & Data Visualization",
    heroDescription:
      "Transform your career with our comprehensive data analytics course. Learn to analyze data, create insights, and drive business decisions.",
    features: [
      "Live Interactive Classes",
      "Real Industry Datasets",
      "1-on-1 Mentorship",
      "Placement Assistance",
      "Industry Certification",
      "Lifetime Access",
    ],
    skills: [
      "Python for Data Analysis",
      "SQL & Database Management",
      "Excel Advanced Functions",
      "Data Visualization",
      "Statistical Analysis",
      "Power BI",
      "Tableau",
      "Data Cleaning",
      "Business Intelligence",
      "Reporting",
    ],
    tools: [
      "Python",
      "Jupyter Notebook",
      "MySQL",
      "Excel",
      "Power BI",
      "Tableau",
      "Google Analytics",
      "R Studio",
    ],
    projects: [
      {
        title: "Sales Performance Dashboard",
        description:
          "Interactive dashboard analyzing sales performance across different regions and time periods with actionable insights.",
        technologies: ["Python", "Pandas", "Power BI", "SQL"],
      },
      {
        title: "Customer Segmentation Analysis",
        description:
          "Advanced customer segmentation using clustering algorithms to identify high-value customer groups.",
        technologies: ["Python", "Scikit-learn", "Tableau", "SQL"],
      },
      {
        title: "Financial Risk Assessment",
        description:
          "Comprehensive risk analysis model for financial institutions using statistical methods and machine learning.",
        technologies: ["Python", "NumPy", "Pandas", "Excel"],
      },
    ],
    curriculum: [
      {
        module: "Foundation of Data Analytics",
        topics: [
          "Statistics Fundamentals",
          "Excel Advanced",
          "Data Types",
          "Data Collection Methods",
          "Business Intelligence Basics",
        ],
        duration: "1 month",
      },
      {
        module: "SQL & Database Management",
        topics: [
          "SQL Fundamentals",
          "Database Design",
          "Complex Queries",
          "Joins & Subqueries",
          "Data Warehousing",
          "ETL Processes",
        ],
        duration: "1.5 months",
      },
      {
        module: "Python for Data Analysis",
        topics: [
          "Python Basics",
          "Pandas & NumPy",
          "Data Cleaning",
          "Data Manipulation",
          "Statistical Analysis",
          "API Integration",
        ],
        duration: "1.5 months",
      },
      {
        module: "Data Visualization & BI Tools",
        topics: [
          "Power BI",
          "Tableau",
          "Advanced Excel",
          "Dashboard Creation",
          "Storytelling with Data",
          "Reporting Best Practices",
        ],
        duration: "1 month",
      },
    ],
    mentors: [
      {
        name: "Dr. Anita Verma",
        role: "Data Science Lead",
        experience: "8+ years at Microsoft",
        image: "/mentor3.jpg",
        linkedin: "https://linkedin.com/in/anitaverma",
      },
      {
        name: "Rajesh Kumar",
        role: "Business Intelligence Manager",
        experience: "6+ years at Accenture",
        image: "/mentor4.jpg",
        linkedin: "https://linkedin.com/in/rajeshkumar",
      },
    ],
    testimonials: [
      {
        name: "Neha Singh",
        role: "Data Analyst",
        company: "Infosys",
        image: "/person3.jpg",
        rating: 5,
        review:
          "The data analytics course was comprehensive and practical. I learned everything from Excel to Python and got placed as a Data Analyst at Infosys.",
      },
    ],
    faq: [
      {
        question: "Do I need mathematics background?",
        answer:
          "Basic mathematics knowledge is helpful, but we cover all necessary statistical concepts from the beginning.",
      },
      {
        question: "Which tools will I learn?",
        answer:
          "You'll master Python, SQL, Excel, Power BI, Tableau, and other industry-standard analytics tools.",
      },
    ],
    fee: {
      original: 45000,
      discounted: 32000,
      currency: "INR",
      installments: [
        { months: 3, amount: 11000 },
        { months: 5, amount: 6500 },
      ],
    },
    jobRoles: [
      "Data Analyst",
      "Business Analyst",
      "Data Scientist",
      "BI Developer",
      "Reporting Analyst",
      "Market Research Analyst",
    ],
    averageSalary: {
      min: 350000,
      max: 700000,
      currency: "INR",
    },
    placementSupport: [
      "Resume Building",
      "Interview Preparation",
      "Portfolio Development",
      "Job Referrals",
      "Mock Interviews",
      "LinkedIn Optimization",
    ],
    certification:
      "Industry-recognized Data Analytics Professional Certificate",
    prerequisites: [
      "Basic computer knowledge",
      "Elementary mathematics",
      "Analytical mindset",
    ],
    courseHighlights: [
      "Real Industry Datasets",
      "Hands-on Projects",
      "Industry Mentors",
      "Job Guarantee",
      "Flexible Learning",
    ],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    slug: "digital-marketing-course",
    title: "Complete Digital Marketing Course",
    description:
      "Master all aspects of digital marketing including SEO, SEM, Social Media Marketing, Content Marketing, and Analytics. Become a certified digital marketing professional.",
    shortDescription:
      "Comprehensive digital marketing course covering SEO, SEM, social media, and analytics.",
    duration: "4 months",
    level: "Beginner to Advanced",
    heroTitle: "Master Digital Marketing",
    heroSubtitle: "SEO, SEM, Social Media & Content Marketing",
    heroDescription:
      "Become a digital marketing expert with our comprehensive course covering all major digital marketing channels and strategies.",
    features: [
      "Live Interactive Sessions",
      "Real Campaign Management",
      "1-on-1 Mentorship",
      "Placement Assistance",
      "Google & Facebook Certification",
      "Lifetime Access",
    ],
    skills: [
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Techinical SEO",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Google Ads",
      "Facebook Ads",
      "LinkedIn Ads",
      "Analytics & Reporting",
      "Conversion Optimization",
      "Marketing Automation",
    ],
    tools: [
      "Google Ads",
      "Google Analytics",
      "Facebook Business Manager",
      "SEMrush",
      "Ahrefs",
      "Mailchimp",
      "Hootsuite",
      "Canva",
    ],
    projects: [
      {
        title: "E-commerce Marketing Campaign",
        description:
          "Complete digital marketing strategy for an e-commerce business including SEO, paid ads, and social media marketing.",
        technologies: [
          "Google Ads",
          "Facebook Ads",
          "Google Analytics",
          "SEMrush",
        ],
      },
      {
        title: "Brand Awareness Campaign",
        description:
          "Multi-channel brand awareness campaign with content marketing, influencer partnerships, and social media strategy.",
        technologies: [
          "Instagram",
          "LinkedIn",
          "Content Marketing",
          "Influencer Marketing",
        ],
      },
      {
        title: "Lead Generation System",
        description:
          "Automated lead generation system using landing pages, email marketing, and marketing automation tools.",
        technologies: [
          "Landing Pages",
          "Email Marketing",
          "Marketing Automation",
          "CRM Integration",
        ],
      },
    ],
    curriculum: [
      {
        module: "Digital Marketing Fundamentals",
        topics: [
          "Digital Marketing Overview",
          "Consumer Behavior",
          "Marketing Funnel",
          "Brand Building",
          "Content Strategy",
        ],
        duration: "2 weeks",
      },
      {
        module: "Search Engine Optimization (SEO)",
        topics: [
          "On-page SEO",
          "Off-page SEO",
          "Technical SEO",
          "Keyword Research",
          "Link Building",
          "Local SEO",
        ],
        duration: "1 month",
      },
      {
        module: "Paid Advertising (SEM)",
        topics: [
          "Google Ads",
          "Facebook Ads",
          "Instagram Ads",
          "LinkedIn Ads",
          "Campaign Optimization",
          "Retargeting",
        ],
        duration: "1 month",
      },
      {
        module: "Social Media & Content Marketing",
        topics: [
          "Social Media Strategy",
          "Content Creation",
          "Community Management",
          "Influencer Marketing",
          "Video Marketing",
        ],
        duration: "1 month",
      },
      {
        module: "Analytics & Automation",
        topics: [
          "Google Analytics",
          "Conversion Tracking",
          "Email Marketing",
          "Marketing Automation",
          "ROI Measurement",
        ],
        duration: "2 weeks",
      },
    ],
    mentors: [
      {
        name: "Vikash Gupta",
        role: "Digital Marketing Director",
        experience: "9+ years at Flipkart",
        image: "/mentor5.jpg",
        linkedin: "https://linkedin.com/in/vikashgupta",
      },
    ],
    testimonials: [
      {
        name: "Pooja Sharma",
        role: "Digital Marketing Executive",
        company: "Zomato",
        image: "/person1.jpg",
        rating: 5,
        review:
          "Excellent course with practical knowledge. I learned to run successful ad campaigns and got hired at Zomato as a Digital Marketing Executive.",
      },
    ],
    faq: [
      {
        question: "Do I need technical background?",
        answer:
          "No technical background required. We teach everything from scratch with practical examples.",
      },
      {
        question: "Will I get Google and Facebook certifications?",
        answer:
          "Yes, we'll help you prepare for and obtain Google Ads and Facebook Blueprint certifications.",
      },
    ],
    fee: {
      original: 120000,
      discounted: 40000,
      currency: "INR",
      installments: [
        { months: 2, amount: 20000 },
        { months: 3, amount: 14000 },
      ],
    },
    jobRoles: [
      "Digital Marketing Executive",
      "SEO Specialist",
      "SEM Specialist",
      "Social Media Manager",
      "Content Marketing Manager",
      "Growth Hacker",
    ],
    averageSalary: {
      min: 300000,
      max: 600000,
      currency: "INR",
    },
    placementSupport: [
      "Resume Building",
      "Interview Preparation",
      "Portfolio Development",
      "Job Referrals",
      "Certification Guidance",
      "LinkedIn Optimization",
    ],
    certification: "Google Ads & Facebook Blueprint Certified Digital Marketer",
    prerequisites: [
      "Basic computer knowledge",
      "Internet browsing skills",
      "Creative thinking",
    ],
    courseHighlights: [
      "Live Campaign Management",
      "Industry Certifications",
      "Real-world Projects",
      "Expert Mentorship",
      "Job Guarantee",
    ],
  },
  {
    id: "performance-marketing",
    label: "Performance Marketing",
    slug: "performance-marketing-course",
    title: "Advanced Performance Marketing Course",
    description:
      "Master performance marketing with advanced strategies for Google Ads, Facebook Ads, affiliate marketing, and conversion optimization. Focus on ROI-driven marketing.",
    shortDescription:
      "Advanced performance marketing course focusing on ROI optimization and data-driven strategies.",
    duration: "3 months",
    level: "Intermediate to Advanced",
    heroTitle: "Master Performance Marketing",
    heroSubtitle: "ROI-Focused Digital Advertising & Growth Hacking",
    heroDescription:
      "Learn advanced performance marketing strategies to drive measurable results and maximize return on ad spend (ROAS).",
    features: [
      "Advanced Strategy Sessions",
      "Real Budget Management",
      "1-on-1 Expert Mentorship",
      "Placement Assistance",
      "Advanced Certifications",
      "Lifetime Community Access",
    ],
    skills: [
      "Advanced Google Ads",
      "Facebook Ads Optimization",
      "Conversion Rate Optimization",
      "Attribution Modeling",
      "Marketing Analytics",
      "Growth Hacking",
      "Affiliate Marketing",
      "Programmatic Advertising",
      "A/B Testing",
      "Customer Lifetime Value",
    ],
    tools: [
      "Google Ads",
      "Facebook Business Manager",
      "Google Analytics 4",
      "Google Tag Manager",
      "Hotjar",
      "Optimizely",
      "SEMrush",
      "Unbounce",
    ],
    projects: [
      {
        title: "High-ROAS E-commerce Campaign",
        description:
          "Advanced e-commerce performance marketing campaign with focus on maximizing return on ad spend and scaling profitably.",
        technologies: [
          "Google Ads",
          "Facebook Ads",
          "Google Analytics",
          "Conversion Tracking",
        ],
      },
      {
        title: "SaaS Growth Marketing System",
        description:
          "Complete growth marketing funnel for SaaS business with advanced attribution modeling and lifecycle marketing.",
        technologies: [
          "LinkedIn Ads",
          "Retargeting",
          "Marketing Automation",
          "Analytics",
        ],
      },
      {
        title: "Mobile App User Acquisition",
        description:
          "Performance marketing strategy for mobile app user acquisition with advanced tracking and optimization.",
        technologies: [
          "App Store Optimization",
          "Mobile Ads",
          "Deep Linking",
          "Attribution Tools",
        ],
      },
    ],
    curriculum: [
      {
        module: "Performance Marketing Fundamentals",
        topics: [
          "Performance vs Brand Marketing",
          "KPIs & Metrics",
          "Attribution Models",
          "Customer Journey Mapping",
        ],
        duration: "2 weeks",
      },
      {
        module: "Advanced Paid Advertising",
        topics: [
          "Advanced Google Ads",
          "Facebook Ads Optimization",
          "LinkedIn Ads",
          "Programmatic Advertising",
          "Bid Strategies",
        ],
        duration: "1 month",
      },
      {
        module: "Conversion Optimization",
        topics: [
          "Landing Page Optimization",
          "A/B Testing",
          "Heat Mapping",
          "User Experience",
          "Conversion Tracking",
        ],
        duration: "1 month",
      },
      {
        module: "Analytics & Growth Hacking",
        topics: [
          "Advanced Analytics",
          "Growth Hacking Strategies",
          "Viral Marketing",
          "Retention Marketing",
          "LTV Optimization",
        ],
        duration: "2 weeks",
      },
    ],
    mentors: [
      {
        name: "Arjun Mehta",
        role: "Performance Marketing Lead",
        experience: "7+ years at Swiggy",
        image: "/mentor2.png",
        linkedin: "https://linkedin.com/in/arjunmehta",
      },
    ],
    testimonials: [
      {
        name: "Rohit Agarwal",
        role: "Performance Marketing Manager",
        company: "Myntra",
        image: "/person2.jpg",
        rating: 5,
        review:
          "This course took my marketing skills to the next level. I learned advanced optimization techniques and landed a senior role at Myntra.",
      },
    ],
    faq: [
      {
        question: "Do I need prior marketing experience?",
        answer:
          "Basic digital marketing knowledge is recommended. This is an advanced course focusing on performance optimization.",
      },
      {
        question: "What's the difference from regular digital marketing?",
        answer:
          "Performance marketing focuses specifically on measurable results, ROI optimization, and data-driven decision making.",
      },
    ],
    fee: {
      original: 35000,
      discounted: 25000,
      currency: "INR",
      installments: [
        { months: 2, amount: 13000 },
        { months: 3, amount: 8500 },
      ],
    },
    jobRoles: [
      "Performance Marketing Manager",
      "Growth Marketing Specialist",
      "Paid Ads Specialist",
      "Conversion Rate Optimizer",
      "Growth Hacker",
      "Digital Marketing Analyst",
    ],
    averageSalary: {
      min: 500000,
      max: 1000000,
      currency: "INR",
    },
    placementSupport: [
      "Advanced Resume Building",
      "Mock Interviews",
      "Portfolio Development",
      "Industry Connections",
      "Salary Negotiation",
      "Career Coaching",
    ],
    certification: "Advanced Performance Marketing Professional Certificate",
    prerequisites: [
      "Basic digital marketing knowledge",
      "Understanding of online advertising",
      "Analytical mindset",
    ],
    courseHighlights: [
      "Real Budget Management",
      "Advanced Optimization",
      "Industry Expert Mentors",
      "High-Paying Job Roles",
      "Performance-Focused Learning",
    ],
  },
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find((course) => course.slug === slug);
};

export const getAllCourseSlugs = (): string[] => {
  return courses.map((course) => course.slug);
};
