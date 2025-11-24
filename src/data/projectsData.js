import { IMAGES } from './imageImports';

export const PROJECTS_DATA = [
  {
    id: 'solar-marketplace',
    title: 'Solar Marketplace',
    description: 'Digitalize the way solar energy products and services are presented, bought, and managed.',
    technologies: ['React', 'MUI', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/HafizBasit7/Qafzh_Solar_Web',
    images: Object.values(IMAGES.shamsi),
    role: 'Frontend Developer',
    period: 'August 2025',
    category: 'Web'
  },
  {
    id: 'drive-bids-web',
    title: 'Drive Bids',
    description: 'Vehicle auction platform with real-time bidding and tracking.',
    technologies: ['React', 'MUI', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/HafizBasit7/DriveBids_User_Frontend',
    liveUrl: 'https://drive-bids.netlify.app/',
    images: Object.values(IMAGES.driveBids),
    role: 'Frontend Developer',
    period: 'May 2025',
    category: 'Web'
  },
  {
    id: 'attendance-management',
    title: 'Attendance Management',
    description: 'Detect a Student face by uploading a video against his roll no, A Smart way of attendance.',
    technologies: ['React', 'MUI', 'Django'],
    githubUrl: 'https://github.com/HafizBasit7/image_Detection_Frontend',
    images: Object.values(IMAGES.attendance),
    role: 'Frontend Developer',
    period: 'Jul 2025',
    category: 'Web'
  },
  {
    id: 'cosmetic-store',
    title: 'Cosmetic Store',
    description: 'Productive e-commerce store with order placement and collaborative features.',
    technologies: ['React', 'Redux', 'Firebase'],
    githubUrl: 'https://github.com/HafizBasit7/Cosmetic_Store_Admin',
    images: Object.values(IMAGES.cosmetic),
    role: 'Full-Stack Developer',
    period: 'Mar 2025',
    category: 'Web'
  },
  {
    id: 'camper-admin',
    title: 'Camper Admin',
    description: 'Camper Dooly, a camper buying/selling and booking platform.',
    technologies: ['React', 'Redux', 'Firebase'],
    githubUrl: 'https://github.com/HafizBasit7/QafzhSolar_Admin_Frontend',
    images: Object.values(IMAGES.camper),
    role: 'Full-Stack Developer',
    period: 'Mar 2025',
    category: 'Web'
  },
  // Mobile Projects
  {
    id: 'tryswitch',
    title: 'TrySwitch',
    description: 'A seller marketplace app where sellers can manage product listings, buyers can chat with sellers, and users can follow stores.',
    technologies: ['React Native CLI', 'AWS', '.NET', 'Redux Toolkit'],
    githubUrl: 'https://github.com/HafizBasit7/TrySwitch_SellerApp',
    images: Object.values(IMAGES.trySwitch),
    role: 'Lead: Full Stack Developer',
    period: 'Oct-Nov 2025',
    category: 'Mobile'
  },
  {
    id: 'easy-quran',
    title: 'Easy Quran',
    description: 'A comprehensive Islamic mobile application offering Quran reading with translations, Qibla direction, tasbih counter, nearby mosque locator, prayer timings, multiple reciters, and a complete Hajj/Umrah guide.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Google Maps API', 'Cloudinary'],
    githubUrl: 'https://github.com/HafizBasit7/Al-Quran',
    images: Object.values(IMAGES.quran),
    role: 'Lead Full Stack Developer',
    period: 'September 2025',
    category: 'Mobile'
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description: 'Simplify the way you manage your money, A smart solution where you can manage your expenses in real-time with ease and clarity.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Cloudinary'],
    githubUrl: 'https://github.com/HafizBasit7/Expense-Tracker-app',
    images: Object.values(IMAGES.expense),
    role: 'Lead: Full Stack Developer',
    period: 'Sep 2025',
    category: 'Mobile'
  },
  {
    id: 'qafzh-solar-mobile',
    title: 'Qafzh Solar',
    description: 'Smart solar marketplace connecting buyers, engineers, and shops with dynamic filtering.',
    technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/HafizBasit7/Qafzh_Mobile_Final',
    images: Object.values(IMAGES.solar),
    role: 'Full-Stack Developer',
    period: 'Jul 2025 – August',
    category: 'Mobile'
  },
  {
    id: 'employee-attendance',
    title: 'Employee Attendance System',
    description: 'Employee Management System with features like attendance, assignments, and employee profile.',
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/HafizBasit7/Employee_Attendence_App',
    images: Object.values(IMAGES.employee),
    role: 'Full-Stack Developer',
    period: 'Jun 2025',
    category: 'Mobile'
  },
  {
    id: 'drivebids-mobile',
    title: 'DriveBids',
    description: 'Vehicle auction platform with real-time bidding and tracking.',
    technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/HafizBasit7/DriveBids_Mobile',
    images: Object.values(IMAGES.driveBidsMobile),
    role: 'Frontend Developer',
    period: 'May 2025',
    category: 'Mobile'
  },
  {
    id: 'ems',
    title: 'EMS',
    description: 'Event management with booking functionality, customer profiles, and service provider management.',
    technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/HafizBasit7/EMS-ui-app',
    images: Object.values(IMAGES.ems),
    role: 'Frontend Developer',
    period: 'Apr 2025',
    category: 'Mobile'
  },
  {
    id: 'medvox-ai',
    title: 'MedVox Ai',
    description: 'A Medical Assistant, with Voice Chat, Report Analyzer and Medicine Recommendations with the help of recent Medical History',
    technologies: ['React Native', 'Expo'],
    githubUrl: 'https://github.com/HafizBasit7/Medvoxfrontend',
    images: Object.values(IMAGES.medvox),
    role: 'Frontend Developer',
    period: 'Mar 2025',
    category: 'Mobile'
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'Weather App – Real-time Forecasting Application',
    technologies: ['React Native', 'OpenWeather API'],
    images: Object.values(IMAGES.weather),
    role: 'Full Stack Developer',
    period: 'Jul 2025',
    category: 'Mobile'
  },
];

export const FILTER_OPTIONS = [
  {
    key: 'Web',
    label: 'Web Projects',
    icon: '💻',
  },
  {
    key: 'Mobile',
    label: 'Mobile Apps',
    icon: '📱',
  },
];