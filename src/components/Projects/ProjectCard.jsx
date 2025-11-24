import React from 'react';
import { Box, Typography, Chip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { 
  ProjectItem, 
  ProjectImageContainer, 
  ProjectImage, 
  ProjectOverlay 
} from '../UI/StyledComponents';

const ProjectCard = ({ project, onProjectClick, index }) => {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 }
    }
  };

  return (
    <ProjectItem
      variants={projectVariants}
      initial="hidden"
      animate="visible"
      onClick={() => onProjectClick(project, 0)}
      whileHover={{ scale: 1.02 }}
    >
      <ProjectImageContainer>
        <ProjectImage
          src={project.images[0]}
          alt={project.title}
        />
      </ProjectImageContainer>
      
      <ProjectOverlay>
        <Box sx={{ transform: 'translateY(20px)', transition: 'transform 0.4s ease' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Typography
              sx={{
                fontSize: '0.75rem',
                backgroundColor: 'secondary.main',
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
          
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              marginBottom: '8px',
              fontSize: '1.3rem',
              background: 'linear-gradient(135deg, #fff, #e0e0e0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {project.title}
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.95rem',
              marginBottom: '16px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              opacity: 0.9,
            }}
          >
            {project.description}
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <Chip
                key={techIndex}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: 'primary.main',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontSize: '0.7rem',
                  height: '24px'
                }}
              />
            )}
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            gap: '12px', 
            opacity: 0, 
            transform: 'translateY(10px)',
            transition: 'all 0.3s ease',
            '&:hover': {
              opacity: 1,
              transform: 'translateY(0)',
            }
          }}>
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, '_blank');
              }}
              sx={{
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  transform: 'scale(1.1)'
                },
                '&.Mui-disabled': { opacity: 0.5 }
              }}
            >
              <LaunchIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </ProjectOverlay>
    </ProjectItem>
  );
};

export default ProjectCard;