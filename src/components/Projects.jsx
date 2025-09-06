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
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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



const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  backgroundColor: theme.palette.background.paper,
  minHeight: '100vh', // Ensure enough space for multiple rows
}));

const ProjectItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  height: '300px',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    '& .project-overlay': {
      opacity: 1,
    },
    '& .project-image': {
      transform: 'scale(1.1)',
    }
  },
}));

const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
});

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '20px',
  color: 'white',
  opacity: 0,
  transition: 'opacity 0.3s ease',
}));

const ProjectTitle = styled(Typography)({
  fontWeight: 600,
  marginBottom: '8px',
  fontSize: '1.2rem',
});

const ProjectDescription = styled(Typography)({
  fontSize: '0.9rem',
  marginBottom: '12px',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

const TechChips = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
  marginBottom: '12px',
});

const ProjectActions = styled(Box)({
  display: 'flex',
  gap: '10px',
});

const Thumbnail = styled('img')({
  width: '60px',
  height: '60px',
  objectFit: 'cover',
  borderRadius: '4px',
  cursor: 'pointer',
  border: '2px solid transparent',
  '&.active': {
    borderColor: '#147efb',
  },
});

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
      githubUrl: '#',
      liveUrl: '#',
      images: [
        Cosmetic_Admin,
        Products
      ],
      role: 'Full-Stack',
      period: 'Mar 2025'
    },
    {
        title: 'Camper Admin',
        description: 'Camper Dooly, a camper buying/selling and booking platform.',
        technologies: ['React', 'Redux', 'Firebase'],
        githubUrl: '#',
        liveUrl: '#',
        images: [
          camper1,
          camper2,
          camper3
        ],
        role: 'Full-Stack',
        period: 'Mar 2025'
      },
      {
        title: 'Qafzh Solar',
        description: 'Smart solar marketplace connecting buyers, engineers, and shops with dynamic filtering.',
        technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
        githubUrl: '#',
        liveUrl: '#',
        images: [Solar1, Solar2, Solar3],
        role: 'Full-Stack Developer',
        period: 'Jul 2025 – Ongoing'
      },
      // {
      //   title: 'Face Recognition System',
      //   description: 'Real-time attendance system using face-api.js with webcam support.',
      //   technologies: ['React', 'Material UI', 'face-api.js'],
      //   githubUrl: '#',
      //   liveUrl: '#',
      //   images: [
      //     'https://via.placeholder.com/400x300/147efb/ffffff?text=Face+Recognition',
      //     'https://via.placeholder.com/400x300/2d2e32/ffffff?text=Face+UI'
      //   ],
      //   role: 'Lead Frontend',
      //   period: 'Jun 2025'
      // },
      {
        title: 'Employee Attendence System',
        description: 'Employee Management System with features like attendance, assignments, and employee profile.',
        technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
        githubUrl: 'https://github.com/HafizBasit7/Employee_Attendence_App',
        liveUrl: '#',
        images: [
          CheckIn,
          History,
          Assignments,
          Ass_Details,
          EmpProfile,
        ],
        role: 'Full-Stack',
        period: 'Jun 2025'
      },
      {
        title: 'DriveBids',
        description: 'Vehicle auction platform with real-time bidding and tracking.',
        technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
        githubUrl: 'https://github.com/HafizBasit7/DriveBids_Mobile',
      //   liveUrl: 'https://drive-bids.netlify.app/',
        images: [
          D1,
          D2,
          D3,
          D5,
          D4,
          D6
        ],
        role: 'Frontend Dev',
        period: 'May 2025'
      },
      // {
      //   title: 'Bike Hub',
      //   description: 'Vehicle marketplace with AI image enhancement and messaging.',
      //   technologies: ['React Native', 'Firebase', 'Stripe', 'PyTorch'],
      //   githubUrl: '#',
      //   liveUrl: '#',
      //   images: [
      //     'https://via.placeholder.com/400x300/147efb/ffffff?text=Bike+Hub',
      //     'https://via.placeholder.com/400x300/2d2e32/ffffff?text=AI+Enhancer'
      //   ],
      //   role: 'Team Lead',
      //   period: 'Apr 2024 – Jan 2025'
      // },
  ];

  return (
    <ProjectsSection id="projects">
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 2 }}
        >
          Projects
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="textSecondary"
          sx={{ mb: 6, maxWidth: '700px', margin: '0 auto' }}
        >
          Here you will find some of the personal and client projects I created
        </Typography>
        
        {/* FIXED: Added flex container with wrap */}
        <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {projects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={3} 
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <ProjectItem onClick={() => handleOpen(project, 0)}>
                <ProjectImage 
                  className="project-image"
                  src={project.images[0]} 
                  alt={project.title}
                />
                <ProjectOverlay className="project-overlay">
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
                          backgroundColor: 'rgba(255,255,255,0.2)', 
                          color: 'white',
                          fontSize: '0.7rem',
                          height: '20px'
                        }}
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip
                        label={`+${project.technologies.length - 3}`}
                        size="small"
                        sx={{ 
                          backgroundColor: 'rgba(255,255,255,0.2)', 
                          color: 'white',
                          fontSize: '0.7rem',
                          height: '20px'
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
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' }
                      }}
                    >
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                      disabled={!project.liveUrl || project.liveUrl === '#'}
                      sx={{ 
                        color: 'white',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' },
                        '&.Mui-disabled': { opacity: 0.5 }
                      }}
                    >
                      <LaunchIcon fontSize="small" />
                    </IconButton>
                  </ProjectActions>
                </ProjectOverlay>
              </ProjectItem>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          {selectedProject?.title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ position: 'relative', p: 3 }}>
          {selectedProject && ( 
            <>
              <Box sx={{ position: 'relative', textAlign: 'center', mb: 3 }}>
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }}
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <IconButton
                      onClick={handlePrevious}
                      sx={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        '&:hover': { backgroundColor: 'white' }
                      }}
                    >
                      <ChevronLeftIcon />
                    </IconButton>
                    
                    <IconButton
                      onClick={handleNext}
                      sx={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        '&:hover': { backgroundColor: 'white' }
                      }}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </>
                )}
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="primary" gutterBottom>
                  {selectedProject.role} • {selectedProject.period}
                </Typography>
                <Typography variant="body1" paragraph>
                  {selectedProject.description}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {selectedProject.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      sx={{ 
                        backgroundColor: 'primary.main', 
                        color: 'white'
                      }}
                    />
                  ))}
                </Box>
              </Box>
              
              {selectedProject.images.length > 1 && (
                <Box sx={{ display: 'flex', overflowX: 'auto', gap: 1, pb: 1 }}>
                  {selectedProject.images.map((image, index) => (
                    <Thumbnail
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} ${index + 1}`}
                      className={index === currentImageIndex ? 'active' : ''}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </Box>
              )}
              
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: 'primary.main',
                    '&:hover': { backgroundColor: 'primary.dark' }
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
                >
                  Live Demo
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </ProjectsSection>
  );
};

export default Projects;