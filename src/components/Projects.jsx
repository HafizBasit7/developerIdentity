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
  height: '320px',
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

const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.6s ease',
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

const Thumbnail = styled(motion.img)(({ theme, active }) => ({
  width: '70px',
  height: '70px',
  objectFit: 'cover',
  borderRadius: '8px',
  cursor: 'pointer',
  border: active ? `3px solid ${theme.palette.primary.main}` : `2px solid ${alpha(theme.palette.divider, 0.2)}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    borderColor: theme.palette.primary.main,
  },
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      title: 'Cosmetic Store',
      description: 'Productive e-commerce store with order placement and collaborative features.',
      technologies: ['React', 'Redux', 'Firebase'],
      githubUrl: 'https://github.com/HafizBasit7/Cosmetic_Store_Admin',
      liveUrl: '#',
      images: [Cosmetic_Admin, Products],
      role: 'Full-Stack Developer',
      period: 'Mar 2025'
    },
    {
      title: 'Camper Admin',
      description: 'Camper Dooly, a camper buying/selling and booking platform.',
      technologies: ['React', 'Redux', 'Firebase'],
      githubUrl: 'https://github.com/HafizBasit7/QafzhSolar_Admin_Frontend',
      liveUrl: '#',
      images: [camper1, camper2, camper3],
      role: 'Full-Stack Developer',
      period: 'Mar 2025'
    },
    
    {
      title: 'Qafzh Solar',
      description: 'Smart solar marketplace connecting buyers, engineers, and shops with dynamic filtering.',
      technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/HafizBasit7/Qafzh_Mobile_Final',
      // liveUrl: '#',
      images: [Solar1, Solar2, Solar3],
      role: 'Full-Stack Developer',
      period: 'Jul 2025 – August'
    },
    
    {
      title: 'Employee Attendance System',
      description: 'Employee Management System with features like attendance, assignments, and employee profile.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
      githubUrl: 'https://github.com/HafizBasit7/Employee_Attendence_App',
      liveUrl: '#',
      images: [CheckIn, History, Assignments, Ass_Details, EmpProfile],
      role: 'Full-Stack Developer',
      period: 'Jun 2025'
    },
    {
      title: 'DriveBids',
      description: 'Vehicle auction platform with real-time bidding and tracking.',
      technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/HafizBasit7/DriveBids_Mobile',
      images: [D1, D2, D3, D5, D4, D6],
      role: 'Frontend Developer',
      period: 'May 2025'
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
        
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4}
              key={index}
            >
              <ProjectItem
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleOpen(project, 0)}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage 
                  className="project-image"
                  src={project.images[0]} 
                  alt={project.title}
                />
                <ProjectOverlay className="project-overlay">
                  <ProjectContent className="project-content">
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
              <Box sx={{ position: 'relative', textAlign: 'center', mb: 4 }}>
                <motion.img
                  key={currentImageIndex}
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: theme.shadows[4]
                  }}
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
              </Box>
              
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