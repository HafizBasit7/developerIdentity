import React from 'react';
import { Box, Container, Typography, Grid, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const SkillsSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  backgroundColor: theme.palette.background.default,
}));

const SkillBar = styled(Box)(({ theme }) => ({
  marginBottom: '30px',
}));

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 70 },
    { name: 'React Native', level: 75 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 60 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Python', level: 55 },
    { name: 'MongoDB', level: 70 },
    { name: 'UI/UX Design', level: 65 },
    { name: 'Git', level: 85 },
  ];

  return (
    <SkillsSection id="skills">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Skills
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="textSecondary"
          sx={{ mb: 8, maxWidth: '700px', margin: '0 auto' }}
        >
          Here are the technologies and tools I work with
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            {skills.slice(0, 4).map((skill, index) => (
              <SkillBar key={index}>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {skill.name}
                  </Typography>
                  <Typography variant="body2">{skill.level}%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: '8px',
                    borderRadius: '5px',
                    backgroundColor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'secondary.main',
                      borderRadius: '5px',
                    },
                  }}
                />
              </SkillBar>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            {skills.slice(4).map((skill, index) => (
              <SkillBar key={index}>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {skill.name}
                  </Typography>
                  <Typography variant="body2">{skill.level}%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: '8px',
                    borderRadius: '5px',
                    backgroundColor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'secondary.main',
                      borderRadius: '5px',
                    },
                  }}
                />
              </SkillBar>
            ))}
          </Grid>
        </Grid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;