import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
  useMediaQuery,
  alpha
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion, AnimatePresence } from 'framer-motion';

// Import your images
import Solar1 from '../assets/image/Solar1.jpg';
import Solar2 from '../assets/image/solar2.jpg';
import Solar3 from '../assets/image/solar3.jpg';

import CheckIn from '../assets/image/CheckIn.jpg';
import History from '../assets/image/History.jpg';
import Assignments from '../assets/image/Assignments.jpg';
import EmpProfile from '../assets/image/EmpProfile.jpg';
import Ass_Details from '../assets/image/Ass_Details.jpg';

import D1 from '../assets/image/D1.jpg';
import D2 from '../assets/image/D2.jpg';
import D3 from '../assets/image/D3.jpg';
import D4 from '../assets/image/D4.jpg';
import D5 from '../assets/image/D5.jpg';
import D6 from '../assets/image/D6.jpg';

import Cosmetic_Admin from '../assets/image/Cosmetic_Admin.png';
import Products from '../assets/image/Products.png';
import camper1 from '../assets/image/camper1.png';
import camper2 from '../assets/image/camper2.png';
import camper3 from '../assets/image/camper3.png';

import Expen1 from '../assets/image/Expen1.jpg';
import Expen2 from '../assets/image/Expen2.jpg';
import Expen3 from '../assets/image/Expen3.jpg';
import Expen4 from '../assets/image/Expen4.jpg';
import Expen5 from '../assets/image/Expen5.jpg';
import Expen6 from '../assets/image/Expen6.jpg';

import shamsi1 from '../assets/image/shamsi1.png';
import shamsi2 from '../assets/image/shamsi2.png';
import Sham_TotalShops from '../assets/image/Sham_TotalShops.png';
import ShamEngin from '../assets/image/ShamEngin.png';
import ShamTotalEngin from '../assets/image/shamTotalEngin.png';
import ShamShop from '../assets/image/shamShop.png';

import Driv1 from '../assets/image/Driv1.png';
import Driv2 from '../assets/image/Driv2.png';
import Driv3 from '../assets/image/Driv3.png';
import Driv4 from '../assets/image/Driv4.png';
import Driv5 from '../assets/image/Driv5.png';
import Driv6 from '../assets/image/Driv6.png';

import Em1 from '../assets/image/Em1.jpg';
import Em2 from '../assets/image/Em2.jpg';
import Em3 from '../assets/image/Em3.jpg';
import Em4 from '../assets/image/Em4.jpg';
import Em5 from '../assets/image/Em5.jpg';
import Em6 from '../assets/image/Em6.jpg';
import Em7 from '../assets/image/Em7.jpg';
import Em8 from '../assets/image/Em8.jpg';
import Em9 from '../assets/image/Em9.jpg';

import MedHome from '../assets/image/MedHome.jpg';
import Med1 from '../assets/image/Med1.jpg';
import Med2 from '../assets/image/Med2.jpg';
import Med3 from '../assets/image/Med3.jpg';
import Med4 from '../assets/image/Med4.jpg';
import Med5 from '../assets/image/Med5.jpg';
import Med6 from '../assets/image/Med6.jpg';
import Med7 from '../assets/image/Med7.jpg';
import Med8 from '../assets/image/Med8.jpg';
import MedProf from '../assets/image/MedProf.jpg';

import Img1 from '../assets/image/Img1.jpg';
import ImgA1 from '../assets/image/ImgA1.jpg';
import ImgA2 from '../assets/image/ImgA2.jpg';
import ImgA3 from '../assets/image/ImgA3.jpg';
import ImgA4 from '../assets/image/ImgA5.jpg';
import ImgA5 from '../assets/image/ImgA5.jpg';
import ImgA6 from '../assets/image/ImgA6.jpg';
import ImgA7 from '../assets/image/ImgA7.jpg';
import ImgG1 from '../assets/image/ImgG1.jpg';
import ImgG2 from '../assets/image/ImgG2.jpg';
import ImgG3 from '../assets/image/ImgG3.jpg';
import ImgS1 from '../assets/image/ImgS1.jpg';
import ImgS2 from '../assets/image/ImgS2.jpg';
import ImgS3 from '../assets/image/ImgS3.jpg';
// Animation keyframes
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: '120px 0',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  position: 'relative',
  overflow: 'hidden',
  minHeight: '100vh',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: `radial-gradient(circle at 20% 20%, ${alpha(theme.palette.primary.light, 0.15)} 0%, transparent 50%)`,
    top: '-150px',
    right: '-150px',
    filter: 'blur(60px)',
    opacity: 0.7,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '400px',
    height: '400px',
    background: `radial-gradient(circle at 80% 80%, ${alpha(theme.palette.secondary.light, 0.1)} 0%, transparent 50%)`,
    bottom: '-100px',
    left: '-100px',
    filter: 'blur(60px)',
    opacity: 0.7,
  },
}));

const ProjectItem = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  cursor: 'pointer',
  height: '320px', // Fixed height for all cards
  boxShadow: theme.shadows[4],
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    '& .project-overlay': {
      opacity: 1,
      backdropFilter: 'blur(4px)',
    },
    '& .project-image': {
      transform: 'scale(1.1)',
    },
    '& .project-content': {
      transform: 'translateY(0)',
    }
  },
}));

// Fixed image container with consistent sizing
const ProjectImageContainer = styled(Box)({
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f5f5', // Subtle background for any gaps
});

const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // This ensures the image covers the entire container
  objectPosition: 'center', // Centers the image
  transition: 'transform 0.6s ease',
  display: 'block',
});

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(transparent 30%, ${alpha(theme.palette.common.black, 0.9)})`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '24px',
  color: 'white',
  opacity: 0,
  transition: 'all 0.4s ease',
}));

const ProjectContent = styled(Box)({
  transform: 'translateY(20px)',
  transition: 'transform 0.4s ease',
});

const ProjectTitle = styled(Typography)({
  fontWeight: 700,
  marginBottom: '8px',
  fontSize: '1.3rem',
  background: 'linear-gradient(135deg, #fff, #e0e0e0)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const ProjectDescription = styled(Typography)({
  fontSize: '0.95rem',
  marginBottom: '16px',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  opacity: 0.9,
});

const TechChips = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
  marginBottom: '16px',
});

const ProjectActions = styled(Box)({
  display: 'flex',
  gap: '12px',
  opacity: 0,
  transform: 'translateY(10px)',
  transition: 'all 0.3s ease',
  [`${ProjectItem}:hover &`]: {
    opacity: 1,
    transform: 'translateY(0)',
  }
});

// Filter button styles
const FilterButton = styled(motion.div)(({ theme, active }) => ({
  padding: '16px 32px',
  borderRadius: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '12px',
  minHeight: '120px',
  background: active
    ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
    : `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.8)} 0%, ${alpha(theme.palette.background.default, 0.9)} 100%)`,
  border: `2px solid ${active ? theme.palette.primary.main : alpha(theme.palette.divider, 0.1)}`,
  color: active ? 'white' : theme.palette.text.primary,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
    border: `2px solid ${theme.palette.primary.main}`,
    '&::before': {
      opacity: active ? 0.3 : 0.1,
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    opacity: active ? 0.2 : 0,
    transition: 'opacity 0.3s ease',
  }
}));

const FilterIcon = styled(Box)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: '8px',
  position: 'relative',
  zIndex: 1,
}));

const FilterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.1rem',
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
}));

const FilterCount = styled(Typography)(({ theme, active }) => ({
  fontSize: '0.85rem',
  opacity: active ? 0.9 : 0.7,
  fontWeight: 500,
  position: 'relative',
  zIndex: 1,
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '20px',
    background: theme.palette.mode === 'dark'
      ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.95)} 100%)`
      : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.95)} 100%)`,
    backdropFilter: 'blur(20px)',
    boxShadow: theme.shadows[10],
  },
}));

// Modal image container for better display in dialog
const ModalImageContainer = styled(Box)({
  position: 'relative',
  textAlign: 'center',
  marginBottom: '32px',
  borderRadius: '12px',
  overflow: 'hidden',
  backgroundColor: '#f5f5f5',
  minHeight: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ModalImage = styled(motion.img)(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '500px',
  width: 'auto',
  height: 'auto',
  objectFit: 'contain', // Contain for modal to show full image
  borderRadius: '12px',
  boxShadow: theme.shadows[4],
}));

// Thumbnail component for modal
const Thumbnail = styled(motion.img)(({ theme, active }) => ({
  width: '80px',
  height: '80px',
  objectFit: 'cover',
  borderRadius: '8px',
  cursor: 'pointer',
  border: active ? `3px solid ${theme.palette.primary.main}` : `2px solid ${theme.palette.divider}`,
  opacity: active ? 1 : 0.7,
  transition: 'all 0.2s ease',
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.05)',
  },
}));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState(null); // New filter state
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpen = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedProject.images.length
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  const projects = [
    {
      title: 'Solar Marketplace',
      description: 'Digitalize the way solar energy products and services are presented, bought, and managed.',
      technologies: ['React', 'MUI', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/HafizBasit7/Qafzh_Solar_Web',
      images: [shamsi1, shamsi2,Sham_TotalShops, ShamEngin, ShamShop, ShamTotalEngin ],
      role: 'Frontend Developer',
      period: 'August 2025',
      category: 'Web' // Added category
    },

    {
      title: 'Drive Bids',
      description: 'Vehicle auction platform with real-time bidding and tracking.',
      technologies: ['React', 'MUI', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/HafizBasit7/DriveBids_User_Frontend',
      liveUrl: 'https://drive-bids.netlify.app/',
      images: [Driv1, Driv2, Driv3, Driv4, Driv5, Driv6 ],
      role: 'Frontend Developer',
      period: 'May 2025',
      category: 'Web' // Added category
    },
    {
      title: 'Attendence Management',
      description: 'Detect a Student face by uploading a video against his roll no, A Smart way of attendence.',
      technologies: ['React', 'MUI', 'Django'],
      githubUrl: 'https://github.com/HafizBasit7/image_Detection_Frontend',
      // liveUrl: '#',
      images: [Img1, ImgA1, ImgA2, ImgA3, ImgA4,  ImgA6, ImgA7, ImgS1, ImgS2, ImgS3, ImgG1, ImgG2, ImgG3],
      role: 'Frontend Developer',
      period: 'Jul 2025',
      category: 'Web' // Added category
    },

    {
      title: 'Cosmetic Store',
      description: 'Productive e-commerce store with order placement and collaborative features.',
      technologies: ['React', 'Redux', 'Firebase'],
      githubUrl: 'https://github.com/HafizBasit7/Cosmetic_Store_Admin',
      // liveUrl: '#',
      images: [Cosmetic_Admin, Products],
      role: 'Full-Stack Developer',
      period: 'Mar 2025',
      category: 'Web' // Added category
    },
    {
      title: 'Camper Admin',
      description: 'Camper Dooly, a camper buying/selling and booking platform.',
      technologies: ['React', 'Redux', 'Firebase'],
      githubUrl: 'https://github.com/HafizBasit7/QafzhSolar_Admin_Frontend',
      // liveUrl: '#',
      images: [camper1, camper2, camper3],
      role: 'Full-Stack Developer',
      period: 'Mar 2025',
      category: 'Web' // Added category
    },

    {
      title: 'Expense Tracker',
      description: 'It implify the way you manage your money, A smart solution where you can manage your expenses in real-time with ease and clarity.',
      technologies: ['React Native', 'Expo', 'Firebase', 'Cloudinary'],
      githubUrl: 'https://github.com/HafizBasit7/Expense-Tracker-app',
      images: [Expen2, Expen5, Expen4, Expen6, Expen1, Expen3,],
      role: 'Lead: Full Stack Developer',
      period: 'Sep 2025',
      category: 'Mobile' // Added category
    },

    {
      title: 'Qafzh Solar',
      description: 'Smart solar marketplace connecting buyers, engineers, and shops with dynamic filtering.',
      technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/HafizBasit7/Qafzh_Mobile_Final',
      // liveUrl: '#',
      images: [Solar1, Solar2, Solar3],
      role: 'Full-Stack Developer',
      period: 'Jul 2025 – August',
      category: 'Mobile' // Added category
    },

    {
      title: 'Employee Attendance System',
      description: 'Employee Management System with features like attendance, assignments, and employee profile.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
      githubUrl: 'https://github.com/HafizBasit7/Employee_Attendence_App',
      liveUrl: '#',
      images: [CheckIn, History, Assignments, Ass_Details, EmpProfile],
      role: 'Full-Stack Developer',
      period: 'Jun 2025',
      category: 'Mobile' // Added category
    },
    {
      title: 'DriveBids',
      description: 'Vehicle auction platform with real-time bidding and tracking.',
      technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/HafizBasit7/DriveBids_Mobile',
      images: [D1, D2, D3, D5, D4, D6],
      role: 'Frontend Developer',
      period: 'May 2025',
      category: 'Mobile' // Added category
    },
    {
      title: 'EMS',
      description: 'Event management with booking functionality, customer profiles, and service provider management..',
      technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/HafizBasit7/EMS-ui-app',
      images: [Em2, Em1, Em3, Em4,  Em7, Em5, Em6, Em8, Em9],
      role: 'Frontend Developer',
      period: 'Apr 2025',
      category: 'Mobile' // Added category
    },

    {
      title: 'MedVox Ai',
      description: 'A Medical Assistan, with Voice Chat, Report Analyzer and Medicine Recommedations with the help of recent Medical History',
      technologies: ['React Native', 'Expo',],
      githubUrl: 'https://github.com/HafizBasit7/Medvoxfrontend',
      images: [MedHome, Med1, Med2, Med3,  Med4, Med5, Med6, Med7, Med8, MedProf],
      role: 'Frontend Developer',
      period: 'Mar 2025',
      category: 'Mobile' // Added category
    },

 

    

 
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Get project counts for each category
  const projectCounts = {
    All: projects.length,
    Web: projects.filter(p => p.category === 'Web').length,
    Mobile: projects.filter(p => p.category === 'Mobile').length,
  };

  const filterOptions = [
    // {
    //   key: 'All',
    //   label: 'All Projects',
    //   icon: '🚀',
    //   count: projectCounts.All
    // },
    {
      key: 'Web',
      label: 'Web Projects',
      icon: '💻',
      count: projectCounts.Web
    },
    {
      key: 'Mobile',
      label: 'Mobile Apps',
      icon: '📱',
      count: projectCounts.Mobile
    },
  ];

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <ProjectsSection id="projects">
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 800,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="text.secondary"
            sx={{
              mb: 8,
              maxWidth: '700px',
              margin: '0 auto',
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}
          >
            Here you will find some of the personal and client projects I created with passion and expertise
          </Typography>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box sx={{ mb: 6 }}>
            <Grid container spacing={3} justifyContent="center">
              {filterOptions.map((option) => (
                <Grid item xs={12} sm={6} md={4} key={option.key}>
                  <FilterButton
                    active={activeFilter === option.key}
                    onClick={() => setActiveFilter(option.key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FilterIcon>{option.icon}</FilterIcon>
                    <FilterTitle>{option.label}</FilterTitle>
                    <FilterCount active={activeFilter === option.key}>
                      {option.count} Project{option.count !== 1 ? 's' : ''}
                    </FilterCount>
                  </FilterButton>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={`${activeFilter}-${index}`}
              >
                <ProjectItem
                  variants={projectVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleOpen(project, 0)}
                  whileHover={{ scale: 1.02 }}
                >
                  <ProjectImageContainer>
                    <ProjectImage
                      className="project-image"
                      src={project.images[0]}
                      alt={project.title}
                    />
                  </ProjectImageContainer>
                  <ProjectOverlay className="project-overlay">
                    <ProjectContent className="project-content">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Typography
                          sx={{
                            fontSize: '0.75rem',
                            backgroundColor: alpha(theme.palette.secondary.main, 0.9),
                            color: 'white',
                            px: 1,
                            py: 0.5,
                            borderRadius: '12px',
                            fontWeight: 600
                          }}
                        >
                          {project.category === 'Web' ? '💻' : '📱'} {project.category}
                        </Typography>
                      </Box>
                      <ProjectTitle variant="h6">
                        {project.title}
                      </ProjectTitle>
                      <ProjectDescription variant="body2">
                        {project.description}
                      </ProjectDescription>
                      <TechChips>
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: alpha(theme.palette.primary.main, 0.8),
                              color: 'white',
                              fontSize: '0.7rem',
                              height: '24px',
                              fontWeight: 600
                            }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Chip
                            label={`+${project.technologies.length - 3}`}
                            size="small"
                            sx={{
                              backgroundColor: alpha(theme.palette.common.white, 0.2),
                              color: 'white',
                              fontSize: '0.7rem',
                              height: '24px'
                            }}
                          />
                        )}
                      </TechChips>
                      <ProjectActions>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                          sx={{
                            color: 'white',
                            backgroundColor: alpha(theme.palette.common.white, 0.2),
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.common.white, 0.3),
                              transform: 'scale(1.1)'
                            }
                          }}
                        >
                          <GitHubIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.liveUrl && project.liveUrl !== '#') {
                              window.open(project.liveUrl, '_blank');
                            }
                          }}
                          disabled={!project.liveUrl || project.liveUrl === '#'}
                          sx={{
                            color: 'white',
                            backgroundColor: alpha(theme.palette.common.white, 0.2),
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.common.white, 0.3),
                              transform: 'scale(1.1)'
                            },
                            '&.Mui-disabled': { opacity: 0.5 }
                          }}
                        >
                          <LaunchIcon fontSize="small" />
                        </IconButton>
                      </ProjectActions>
                    </ProjectContent>
                  </ProjectOverlay>
                </ProjectItem>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <StyledDialog
            open={!!selectedProject}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            TransitionProps={{ timeout: 300 }}
          >
            <DialogTitle sx={{ m: 0, p: 3, pb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {selectedProject.title}
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1)
                    }
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Typography variant="body2" color="primary" sx={{ mt: 1, fontWeight: 600 }}>
                {selectedProject.role} • {selectedProject.period}
              </Typography>
            </DialogTitle>

            <DialogContent sx={{ p: 3, pt: 1 }}>
              <ModalImageContainer>
                <ModalImage
                  key={currentImageIndex}
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <IconButton
                      onClick={handlePrevious}
                      sx={{
                        position: 'absolute',
                        left: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: alpha(theme.palette.background.paper, 0.9),
                        '&:hover': {
                          backgroundColor: theme.palette.background.paper,
                          transform: 'translateY(-50%) scale(1.1)'
                        }
                      }}
                    >
                      <ChevronLeftIcon />
                    </IconButton>

                    <IconButton
                      onClick={handleNext}
                      sx={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: alpha(theme.palette.background.paper, 0.9),
                        '&:hover': {
                          backgroundColor: theme.palette.background.paper,
                          transform: 'translateY(-50%) scale(1.1)'
                        }
                      }}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </>
                )}
              </ModalImageContainer>

              <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7, mb: 3 }}>
                {selectedProject.description}
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="medium"
                      sx={{
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          color: 'white'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {selectedProject.images.length > 1 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Project Screenshots
                  </Typography>
                  <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, pb: 2 }}>
                    {selectedProject.images.map((image, index) => (
                      <Thumbnail
                        key={index}
                        src={image}
                        alt={`${selectedProject.title} ${index + 1}`}
                        active={index === currentImageIndex}
                        onClick={() => setCurrentImageIndex(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      />
                    ))}
                  </Box>
                </Box>
              )}

              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener"
                  size="large"
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    borderRadius: '12px',
                    px: 3,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  View Code
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<LaunchIcon />}
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener"
                  disabled={!selectedProject.liveUrl || selectedProject.liveUrl === '#'}
                  size="large"
                  sx={{
                    borderRadius: '12px',
                    px: 3,
                    borderWidth: '2px',
                    '&:hover': {
                      borderWidth: '2px',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Live Demo
                </Button>
              </Box>
            </DialogContent>
          </StyledDialog>
        )}
      </AnimatePresence>
    </ProjectsSection>
  );
};

export default Projects;