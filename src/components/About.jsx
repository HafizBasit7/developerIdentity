import React from 'react';
import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DevicesIcon from '@mui/icons-material/Devices';
import PsychologyIcon from '@mui/icons-material/Psychology';

const AboutSection = styled(Box)(({ theme }) => ({
  padding: '120px 0',
  background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '400px',
    height: '400px',
    background: `radial-gradient(circle at 30% 30%, ${theme.palette.primary.light}20, transparent 50%)`,
    top: '-100px',
    right: '-100px',
    filter: 'blur(60px)',
    opacity: 0.6,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: `radial-gradient(circle at 70% 70%, ${theme.palette.secondary.light}20, transparent 50%)`,
    bottom: '-50px',
    left: '-50px',
    filter: 'blur(60px)',
    opacity: 0.6,
  },
}));

const SkillChip = styled(motion.div)(({ theme }) => ({
  padding: '12px 22px',
  margin: '8px',
  backgroundColor: theme.palette.mode === 'dark' 
    ? theme.palette.primary.dark 
    : theme.palette.primary.light,
  color: theme.palette.mode === 'dark' 
    ? theme.palette.getContrastText(theme.palette.primary.dark)
    : theme.palette.getContrastText(theme.palette.primary.light),
  borderRadius: '12px',
  fontWeight: 600,
  fontSize: '0.95rem',
  boxShadow: theme.shadows[2],
  cursor: 'default',
  transition: 'all 0.3s ease',
  border: `1px solid ${theme.palette.primary.main}20`,
  backdropFilter: 'blur(10px)',
}));

const FeatureCard = styled(motion.div)(({ theme }) => ({
  padding: '24px',
  borderRadius: '16px',
  background: theme.palette.mode === 'dark'
    ? `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`
    : `linear-gradient(145deg, #ffffff 0%, ${theme.palette.background.default} 100%)`,
  boxShadow: theme.shadows[4],
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  border: `1px solid ${theme.palette.divider}20`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const skills = [
    'JavaScript',
    'React Native',
    'Expo',
    'React Js',
    'Node.js',
    'HTML/CSS',
    'Python',
    'Git',
    'MUI',
    'Express',
    'MongoDB',
    'React Query',
    'API Integrations',
  ];

  const features = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with best practices'
    },
    {
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'UI/UX Focused',
      description: 'Creating intuitive and engaging user experiences with modern design principles'
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Responsive Design',
      description: 'Building applications that work seamlessly across all devices and screen sizes'
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Problem Solving',
      description: 'Analyzing complex problems and developing innovative solutions'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      } 
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <AboutSection id="about">
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
            About Me
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="text.secondary"
            sx={{ 
              mb: 8, 
              maxWidth: '720px', 
              margin: '0 auto', 
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}
          >
            Discover who I am, what I do, and the skills I bring to create exceptional digital experiences.
          </Typography>
        </motion.div>

        {/* Feature Cards */}
        {/* <Grid container spacing={3} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 700 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid> */}

        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Get to know me!
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                color: 'text.secondary', 
                lineHeight: 1.8,
                fontSize: '1.1rem',
                mb: 3
              }}>
                I'm a passionate <strong>Full Stack Developer</strong> who thrives on crafting impactful solutions.
                With hands-on experience in modern technologies, I enjoy turning complex problems
                into seamless user experiences.
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                color: 'text.secondary', 
                lineHeight: 1.8,
                fontSize: '1.1rem',
                mb: 3
              }}>
                My journey started several years ago, and I've been constantly learning, evolving,
                and delivering clean, efficient code since. I believe great software blends
                functionality with usability while maintaining elegant code architecture.
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                color: 'text.secondary', 
                lineHeight: 1.8,
                fontSize: '1.1rem'
              }}>
                Beyond coding, I love exploring new tools, contributing to open-source, and
                sometimes stepping away from the screen to recharge outdoors. I'm always excited
                to take on new challenges and grow as a developer.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                My Skills & Technologies
              </Typography>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                style={{ display: 'flex', flexWrap: 'wrap' }}
              >
                {skills.map((skill) => (
                  <SkillChip
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -4,
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.getContrastText(theme.palette.primary.main),
                      boxShadow: `0 6px 20px ${theme.palette.primary.main}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </SkillChip>
                ))}
              </motion.div>
              
              {/* Stats Section */}
              <motion.div
              align="center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ marginTop: '40px' }}

              >
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box textAlign="center">
                      <Typography variant="h3" color="primary" fontWeight={800}>
                        25+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Projects Completed
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box textAlign="center">
                      <Typography variant="h3" color="primary" fontWeight={800}>
                        1+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Years Experience
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;