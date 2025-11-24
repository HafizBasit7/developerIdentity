import React, { useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectsSection } from '../UI/StyledComponents';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import FullScreenImageViewer from './FullScreenImageViewer';
import ProjectFilters from './ProjectFilters';
import { PROJECTS_DATA, FILTER_OPTIONS } from '../../data/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullScreenProject, setFullScreenProject] = useState(null);
  const [fullScreenImageIndex, setFullScreenImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('Mobile');

  // Filter projects
  const filteredProjects = PROJECTS_DATA.filter(
    project => project.category === activeFilter
  );

  // Calculate project counts
  const projectCounts = {
    Web: PROJECTS_DATA.filter(p => p.category === 'Web').length,
    Mobile: PROJECTS_DATA.filter(p => p.category === 'Mobile').length,
  };

  // Handlers
  const handleProjectOpen = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const handleProjectClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleImageNavigate = (direction) => {
    if (!selectedProject) return;
    
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % selectedProject.images.length
      : (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
    
    setCurrentImageIndex(newIndex);
  };

  const handleFullScreenOpen = (project, imageIndex = 0) => {
    setFullScreenProject(project);
    setFullScreenImageIndex(imageIndex);
  };

  const handleFullScreenClose = () => {
    setFullScreenProject(null);
    setFullScreenImageIndex(0);
  };

  const handleFullScreenNavigate = (direction) => {
    if (!fullScreenProject) return;
    
    const newIndex = direction === 'next' 
      ? (fullScreenImageIndex + 1) % fullScreenProject.images.length
      : (fullScreenImageIndex - 1 + fullScreenProject.images.length) % fullScreenProject.images.length;
    
    setFullScreenImageIndex(newIndex);
  };

  return (
    <ProjectsSection id="projects">
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
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
              background: 'linear-gradient(135deg, primary.main 0%, secondary.main 100%)',
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

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box sx={{ mb: 6 }}>
            <ProjectFilters
              filters={FILTER_OPTIONS}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              projectCounts={projectCounts}
            />
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={3}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <ProjectCard
                  project={project}
                  onProjectClick={handleProjectOpen}
                  index={index}
                />
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        currentImageIndex={currentImageIndex}
        onClose={handleProjectClose}
        onNext={() => handleImageNavigate('next')}
        onPrevious={() => handleImageNavigate('previous')}
        onImageClick={handleFullScreenOpen}
        onImageSelect={setCurrentImageIndex}
      />

      {/* Full Screen Image Viewer */}
      <FullScreenImageViewer
        project={fullScreenProject}
        currentIndex={fullScreenImageIndex}
        onClose={handleFullScreenClose}
        onNext={() => handleFullScreenNavigate('next')}
        onPrevious={() => handleFullScreenNavigate('previous')}
      />
    </ProjectsSection>
  );
};

export default Projects;