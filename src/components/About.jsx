import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  backgroundColor: theme.palette.background.paper,
}));

const About = () => {
  return (
    <AboutSection id="about">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          About Me
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="textSecondary"
          sx={{ mb: 8, maxWidth: '700px', margin: '0 auto' }}
        >
          Here you will find more information about me, what I do, and my current skills
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Get to know me!
            </Typography>
            <Typography variant="body1" paragraph>
              I'm a passionate developer who loves creating solutions that make a
              difference. With experience in various technologies, I enjoy tackling
              complex problems and turning ideas into reality.
            </Typography>
            <Typography variant="body1" paragraph>
              My journey in development started several years ago, and I've been
              constantly learning and evolving ever since. I believe in writing clean,
              efficient code and creating user-friendly experiences.
            </Typography>
            <Typography variant="body1" paragraph>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or enjoying outdoor activities.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              My Skills
            </Typography>
            <Box display="flex" flexWrap="wrap">
              {[
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
                'API Integrations'
              ].map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    padding: '10px 20px',
                    margin: '5px',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: '5px',
                    fontWeight: 600,
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;