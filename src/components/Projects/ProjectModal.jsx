import React from 'react';
import {
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Button,
  Chip,
  IconButton,
  useTheme,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion } from 'framer-motion';
import { StyledDialog } from '../UI/StyledComponents';

// Styled components for the modal
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
  cursor: 'zoom-in',
});

const ModalImage = styled(motion.img)(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '80vh',
  width: 'auto',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: '12px',
  boxShadow: theme.shadows[4],
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

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

const ProjectModal = ({
  project,
  currentImageIndex,
  onClose,
  onNext,
  onPrevious,
  onImageClick,
  onImageSelect
}) => {
  const theme = useTheme();

  if (!project) return null;

  return (
    <StyledDialog
      open={!!project}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      TransitionProps={{ timeout: 300 }}
    >
      <DialogTitle sx={{ m: 0, p: 3, pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {project.title}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
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
          {project.role} • {project.period}
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ p: 3, pt: 1 }}>
        {/* Main Image with Navigation */}
        <ModalImageContainer onClick={() => onImageClick(project, currentImageIndex)}>
          <ModalImage
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {project.images.length > 1 && (
            <>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  onPrevious();
                }}
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
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
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

        {/* Project Description */}
        <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7, mb: 3 }}>
          {project.description}
        </Typography>

        {/* Technologies Used */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Technologies Used
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.technologies.map((tech, index) => (
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

        {/* Image Thumbnails */}
        {project.images.length > 1 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Project Screenshots ({project.images.length})
            </Typography>
            <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, pb: 2 }}>
              {project.images.map((image, index) => (
                <Thumbnail
                  key={index}
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  active={index === currentImageIndex}
                  onClick={() => onImageSelect(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href={project.githubUrl}
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
          
          {project.liveUrl && project.liveUrl !== '#' && (
            <Button
              variant="outlined"
              startIcon={<LaunchIcon />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener"
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
          )}
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default ProjectModal;