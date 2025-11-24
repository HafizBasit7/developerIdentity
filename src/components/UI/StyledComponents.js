import { styled, keyframes } from '@mui/material/styles';
import { Box, Typography, IconButton, Dialog, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles'; // Add this import

// Animations
export const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Layout Components
export const ProjectsSection = styled(Box)(({ theme }) => ({
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

// Project Card Components
export const ProjectItem = styled(motion.div)(({ theme }) => ({
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
  },
}));

export const ProjectImageContainer = styled(Box)({
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f5f5',
});

export const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  transition: 'transform 0.6s ease',
  display: 'block',
});

export const ProjectOverlay = styled(Box)(({ theme }) => ({
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
  '&:hover': {
    opacity: 1,
    backdropFilter: 'blur(4px)',
  },
}));

// Modal Components
export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '20px',
    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.95)})`,
    backdropFilter: 'blur(20px)',
    boxShadow: theme.shadows[10],
  },
}));

export const FullScreenDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    margin: 0,
    width: '100vw',
    height: '100vh',
    maxWidth: 'none',
    maxHeight: 'none',
    borderRadius: 0,
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(10px)',
  },
}));

export const FullScreenImage = styled(motion.img)({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  cursor: 'pointer',
});

// Navigation Components
export const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  zIndex: 10,
  width: '60px',
  height: '60px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-50%) scale(1.1)',
  },
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  right: 20,
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  zIndex: 10,
  width: '50px',
  height: '50px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'scale(1.1)',
  },
}));

export const ImageCounter = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  left: 20,
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '8px 16px',
  borderRadius: '20px',
  backdropFilter: 'blur(10px)',
  zIndex: 10,
  fontSize: '0.9rem',
  fontWeight: 600,
}));

// Filter Components - FIXED: Use $ prefix for transient props
export const FilterButton = styled(motion.div)(({ theme, $active }) => ({
  padding: '16px 32px',
  borderRadius: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '12px',
  minHeight: '120px',
  background: $active
    ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
    : `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.8)} 0%, ${alpha(theme.palette.background.default, 0.9)} 100%)`,
  border: `2px solid ${$active ? theme.palette.primary.main : alpha(theme.palette.divider, 0.1)}`,
  color: $active ? 'white' : theme.palette.text.primary,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
    border: `2px solid ${theme.palette.primary.main}`,
  }
}));

export const FilterIcon = styled(Box)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: '8px',
  position: 'relative',
  zIndex: 1,
}));

export const FilterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.1rem',
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
}));

// FIXED: Use $ prefix for transient prop
export const FilterCount = styled(Typography)(({ theme, $active }) => ({
  fontSize: '0.85rem',
  opacity: $active ? 0.9 : 0.7,
  fontWeight: 500,
  position: 'relative',
  zIndex: 1,
}));