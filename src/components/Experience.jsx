import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme, useMediaQuery, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const ExperienceSection = styled(Box)(({ theme }) => ({
  padding: '120px 0',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  position: 'relative',
  overflow: 'hidden',
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

const ExperienceItem = styled(motion(Paper))(({ theme }) => ({
  padding: '32px',
  marginBottom: '24px',
  borderRadius: '20px',
  backgroundColor: theme.palette.mode === 'dark' 
    ? alpha(theme.palette.background.paper, 0.8)
    : alpha(theme.palette.background.paper, 0.9),
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  boxShadow: theme.shadows[4],
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    borderColor: alpha(theme.palette.primary.main, 0.3),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '100%',
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0.8,
  },
}));

const IconWrapper = styled(Box)(({ theme, type }) => ({
  width: 60,
  height: 60,
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(3),
  background: type === 'work' 
    ? `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`
    : `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
  color: '#fff',
  boxShadow: theme.shadows[3],
  flexShrink: 0,
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  border: `3px solid ${theme.palette.background.paper}`,
  boxShadow: theme.shadows[2],
  position: 'absolute',
  left: '-8px',
  top: '30px',
  zIndex: 2,
}));

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const experiences = [
    {
      title: 'Jr. Full Stack Developer',
      company: 'Ayzenn Technologies',
      period: '2025 - Present',
      description:
        'Leading development teams in creating innovative solutions for clients. Implemented agile methodologies that improved productivity by 30%.',
      icon: <WorkIcon fontSize="medium" />,
      type: 'work',
      highlights: [
        'Led a team of 5 developers on a major project',
        'Implemented CI/CD pipeline reducing deployment time by 40%',
        'Introduced code review process improving code quality'
      ]
    },
    // {
    //   title: 'Frontend Developer',
    //   company: 'Web Solutions LLC',
    //   period: '2024 - 2025',
    //   description:
    //     'Developed responsive web applications using React and modern JavaScript. Collaborated with UX designers to create intuitive user interfaces.',
    //   // icon: <WorkIcon fontSize="medium" />,
    //    icon: <SchoolIcon fontSize="medium" />,
    //   type: 'work',
    //   highlights: [
    //     'Built 10+ responsive web applications',
    //     'Improved page load speed by 60%',
    //     'Collaborated with cross-functional teams'
    //   ]
    // },
    
    {
      title: 'Bachelor of Computer Science',
      company: 'Comsats Institute of Technology, Islamabad',
      period: '2021 - 2025',
      description:
        'Graduated with honors. Specialized in software engineering, mobile and web development. Participated in various coding competitions and projects.',
      icon: <SchoolIcon fontSize="medium" />,
      type: 'education',
      highlights: [
        'Graduated with 2.6 GPA',
        'Won 2 coding competitions',
        'Led university tech club as president'
      ]
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50, x: isMobile ? 0 : -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      } 
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <ExperienceSection id="experience">
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Experience & Education
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="text.secondary"
            sx={{ 
              mb: 10, 
              maxWidth: '700px', 
              margin: '0 auto', 
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}
          >
            A journey of learning, building, and growing through real-world experiences and academic excellence.
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          {!isMobile && (
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '2px',
                background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.2)}, ${alpha(theme.palette.secondary.main, 0.2)})`,
                transform: 'translateX(-50%)',
                zIndex: 0,
              }}
            />
          )}
          
          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid 
                item 
                xs={12} 
                key={index}
                sx={{ 
                  position: 'relative',
                  pl: isMobile ? 0 : index % 2 === 0 ? 0 : 'auto',
                  pr: isMobile ? 0 : index % 2 === 0 ? 'auto' : 0,
                }}
              >
                {!isMobile && (
                  <TimelineDot 
                    sx={{ 
                      left: index % 2 === 0 ? 'auto' : '-8px', 
                      right: index % 2 === 0 ? '-8px' : 'auto' 
                    }} 
                  />
                )}
                
                <ExperienceItem
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  sx={{ 
                    ml: isMobile ? 0 : index % 2 === 0 ? 0 : 'auto',
                    mr: isMobile ? 0 : index % 2 === 0 ? 'auto' : 0,
                    maxWidth: isMobile ? '100%' : '90%',
                  }}
                >
                  <Box display="flex" alignItems="flex-start" mb={3}>
                    <IconWrapper type={exp.type}>{exp.icon}</IconWrapper>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {exp.company}
                      </Typography>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          color: 'text.secondary',
                          background: alpha(theme.palette.primary.main, 0.1),
                          display: 'inline-block',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '12px',
                          fontWeight: 600
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7, mb: 2 }}>
                    {exp.description}
                  </Typography>
                  
                  <Box>
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={highlightVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}
                      >
                        <ArrowForwardIcon 
                          sx={{ 
                            fontSize: '16px', 
                            color: theme.palette.primary.main, 
                            mr: 1.5, 
                            mt: '4px',
                            flexShrink: 0 
                          }} 
                        />
                        <Typography variant="body2" color="text.secondary">
                          {highlight}
                        </Typography>
                      </motion.div>
                    ))}
                  </Box>
                </ExperienceItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;