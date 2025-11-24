import React from 'react';
import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { 
  FullScreenDialog, 
  FullScreenImage, 
  NavigationButton, 
  CloseButton, 
  ImageCounter 
} from '../UI/StyledComponents';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';

const FullScreenImageViewer = ({ 
  project, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrevious 
}) => {
  useKeyboardNavigation(!!project, {
    onPrevious,
    onNext,
    onClose
  });

  if (!project) return null;

  return (
    <AnimatePresence>
      <FullScreenDialog
        open={!!project}
        onClose={onClose}
        TransitionProps={{ timeout: 300 }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            overflow: 'hidden',
          }}
          onClick={onClose}
        >
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>

          <ImageCounter>
            {currentIndex + 1} / {project.images.length}
          </ImageCounter>

          {project.images.length > 1 && (
            <NavigationButton
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              sx={{ left: 20 }}
            >
              <ChevronLeftIcon fontSize="large" />
            </NavigationButton>
          )}

          <FullScreenImage
            src={project.images[currentIndex]}
            alt={`${project.title} - ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />

          {project.images.length > 1 && (
            <NavigationButton
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              sx={{ right: 20 }}
            >
              <ChevronRightIcon fontSize="large" />
            </NavigationButton>
          )}
        </Box>
      </FullScreenDialog>
    </AnimatePresence>
  );
};

export default FullScreenImageViewer;