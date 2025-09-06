import React from 'react';
import { Box, Container, Typography, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const SkillsSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  backgroundColor: theme.palette.background.default,
}));

const SkillRow = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '25px',
  padding: '12px 18px',
  borderRadius: '12px',
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.04)'
      : 'rgba(0,0,0,0.03)',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
  },
}));

const AnimatedLinearProgress = styled(LinearProgress)(({ theme }) => ({
  flex: 1,
  margin: '0 15px',
  height: '10px',
  borderRadius: '5px',
  backgroundColor: '#e0e0e0',
  '& .MuiLinearProgress-bar': {
    borderRadius: '5px',
    backgroundImage: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
  },
}));

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 70 },
    { name: 'React Native', level: 75 },
    { name: 'React.js', level: 80 },
    { name: 'Node.js', level: 65 },
    { name: 'HTML / CSS', level: 95 },
    { name: 'Python', level: 55 },
    { name: 'MongoDB', level: 70 },
    { name: 'UI/UX Design', level: 65 },
    { name: 'Git / GitHub', level: 85 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <SkillsSection id="skills">
      <Container maxWidth="md">
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
          A snapshot of the technologies and tools I work with daily
        </Typography>

        {/* Skills List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillRow key={index} variants={itemVariants}>
              {/* Skill Name */}
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, minWidth: '130px' }}
              >
                {skill.name}
              </Typography>

              {/* Progress Bar */}
              <AnimatedLinearProgress
                variant="determinate"
                value={skill.level}
              />

              {/* Percentage */}
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, minWidth: '40px', textAlign: 'right' }}
              >
                {skill.level}%
              </Typography>
            </SkillRow>
          ))}
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
