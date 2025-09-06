import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const ExperienceSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  backgroundColor: theme.palette.background.default,
}));

const ExperienceItem = styled(Paper)(({ theme }) => ({
  padding: '30px',
  marginBottom: '20px',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
}));

const Experience = () => {
  const experiences = [
    {
      title: 'Jr.Full Stack Developer',
      company: 'Ayzenn Technologies.',
      period: '2025 - Present',
      description:
        'Lead development teams in creating innovative solutions for clients. Implemented agile methodologies that improved productivity by 30%.',
      icon: <WorkIcon sx={{ color: 'secondary.main', fontSize: '30px' }} />,
    },
    {
      title: 'Frontend Developer',
      company: 'Web Solutions LLC',
      period: '2024 - 2025',
      description:
        'Developed responsive web applications using React and modern JavaScript. Collaborated with UX designers to create intuitive user interfaces.',
      icon: <WorkIcon sx={{ color: 'secondary.main', fontSize: '30px' }} />,
    },
    {
      title: 'Bachelor of Computer Science',
      company: 'Comsats Institute of Technology, Islamabad',
      period: '2021 - 2025',
      description:
        'Graduated with honors. Specialized in software engineering, Mobile and web development. Participated in various coding competitions and projects.',
      icon: <SchoolIcon sx={{ color: 'secondary.main', fontSize: '30px' }} />,
    },
  ];

  return (
    <ExperienceSection id="experience">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Experience & Education
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="textSecondary"
          sx={{ mb: 8, maxWidth: '700px', margin: '0 auto' }}
        >
          Here is a summary of my work experience and education
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <ExperienceItem>
                <Box display="flex" alignItems="center" mb={2}>
                  {exp.icon}
                  <Box ml={2}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      {exp.company} | {exp.period}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1">{exp.description}</Typography>
              </ExperienceItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;