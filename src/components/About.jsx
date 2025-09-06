import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const AboutSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, #f9fbff 100%)`,
  position: 'relative',
  overflow: 'hidden',
}));

const SkillChip = styled(motion.div)(({ theme }) => ({
  padding: '10px 20px',
  margin: '6px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '0.9rem',
  boxShadow: '0 4px 12px rgba(20,126,251,0.18)',
  cursor: 'default',
}));

const About = () => {
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

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <AboutSection id="about">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 800 }}
          >
            About Me
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: '720px', margin: '0 auto', fontWeight: 400 }}
          >
            Discover who I am, what I do, and the skills I bring to the table.
          </Typography>
        </motion.div>

        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Get to know me!
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                I'm a passionate Full Stack Developer who thrives on crafting impactful solutions.
                With hands-on experience in modern technologies, I enjoy turning complex problems
                into seamless user experiences.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                My journey started several years ago, and I’ve been constantly learning, evolving,
                and delivering clean, efficient code since. I believe great software blends
                functionality with usability.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Beyond coding, I love exploring new tools, contributing to open-source, and
                sometimes stepping away from the screen to recharge outdoors.
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
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                My Skills
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
                    whileHover={{ scale: 1.07, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {skill}
                  </SkillChip>
                ))}
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;
