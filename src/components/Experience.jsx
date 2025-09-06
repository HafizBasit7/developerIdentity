import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

const ExperienceSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  background: 'linear-gradient(135deg, #f8f9ff 0%, #eef2f6 100%)',
}));

const ExperienceItem = styled(motion(Paper))(({ theme }) => ({
  padding: '30px',
  marginBottom: '30px',
  borderRadius: '16px',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: '#fff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
}));

const Experience = () => {
  const experiences = [
    {
      title: 'Jr. Full Stack Developer',
      company: 'Ayzenn Technologies.',
      period: '2025 - Present',
      description:
        'Leading development teams in creating innovative solutions for clients. Implemented agile methodologies that improved productivity by 30%.',
      icon: <WorkIcon fontSize="medium" />,
    },
    {
      title: 'Frontend Developer',
      company: 'Web Solutions LLC',
      period: '2024 - 2025',
      description:
        'Developed responsive web applications using React and modern JavaScript. Collaborated with UX designers to create intuitive user interfaces.',
      icon: <WorkIcon fontSize="medium" />,
    },
    {
      title: 'Bachelor of Computer Science',
      company: 'Comsats Institute of Technology, Islamabad',
      period: '2021 - 2025',
      description:
        'Graduated with honors. Specialized in software engineering, mobile and web development. Participated in various coding competitions and projects.',
      icon: <SchoolIcon fontSize="medium" />,
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
          sx={{ fontWeight: 800 }}
        >
          Experience & Education
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="textSecondary"
          sx={{ mb: 10, maxWidth: '700px', margin: '0 auto' }}
        >
          A journey of learning, building, and growing through real-world experiences.
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ExperienceItem
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <IconWrapper>{exp.icon}</IconWrapper>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      {exp.company} | {exp.period}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="textSecondary">
                  {exp.description}
                </Typography>
              </ExperienceItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
