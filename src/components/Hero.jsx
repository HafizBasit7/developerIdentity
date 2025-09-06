import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
  alpha,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import profile from '../assets/image/profile.jpg';
import { scrollToSection } from '../utils/scrollUtils';
import Tilt from 'react-parallax-tilt';
import { motion, useAnimation } from 'framer-motion';

// ---------- Styled components with enhanced design ----------
const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: '100px 0 50px',
  overflow: 'hidden',
  background: `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.95)} 0%, ${alpha('#f7fbff', 0.95)} 100%)`,
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 600,
    height: 600,
    background: `radial-gradient(circle at 30% 30%, ${alpha(theme.palette.primary.light, 0.25)}, transparent 50%)`,
    filter: 'blur(80px)',
    top: -100,
    left: -150,
    zIndex: 0,
    animation: 'blob1 15s infinite ease-in-out',
    opacity: 0.8,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: 500,
    height: 500,
    background: `radial-gradient(circle at 70% 70%, ${alpha(theme.palette.secondary.light, 0.2)}, transparent 50%)`,
    filter: 'blur(100px)',
    bottom: -100,
    right: -80,
    zIndex: 0,
    animation: 'blob2 18s infinite alternate',
    opacity: 0.8,
  },
  '@keyframes blob1': {
    '0%': { transform: 'translate(0px, 0px) scale(1)' },
    '33%': { transform: 'translate(30px, -20px) scale(1.1)' },
    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
    '100%': { transform: 'translate(0px, 0px) scale(1)' },
  },
  '@keyframes blob2': {
    '0%': { transform: 'translate(0px, 0px) scale(1)' },
    '50%': { transform: 'translate(-30px, 10px) scale(1.15)' },
    '100%': { transform: 'translate(0px, 0px) scale(1)' },
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  margin: '0 8px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-6px) scale(1.05)',
    boxShadow: `0 10px 25px ${alpha(theme.palette.primary.main, 0.3)}`,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  fontWeight: 700,
  padding: '14px 32px',
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.common.white, 0.2)}, transparent)`,
    transition: 'left 0.7s ease',
  },
  '&:hover::before': {
    left: '100%',
  },
}));

// ---------- Framer variants ----------
const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// ---------- Fixed Typewriter hook ----------
const useTypewriter = (words = [], typingSpeed = 80, pause = 2000) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < currentWord.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prev => prev + currentWord[currentIndex]);
            setCurrentIndex(prev => prev + 1);
          }, typingSpeed);
          return () => clearTimeout(timeout);
        } else {
          // Finished typing, pause before deleting
          const timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pause);
          return () => clearTimeout(timeout);
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          const timeout = setTimeout(() => {
            setCurrentText(prev => prev.slice(0, -1));
            setCurrentIndex(prev => prev - 1);
          }, typingSpeed / 2);
          return () => clearTimeout(timeout);
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, wordIndex, words, typingSpeed, pause]);

  return currentText;
};

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const controls = useAnimation();

  // Social / contact
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/hafiz-basit-64304121b/',
    github: 'https://github.com/HafizBasit7',
    email: 'hafiz.zes7@gmail.com',
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${socialLinks.email}`;
  };

  // Typewriter words with 2-second pause
  const typed = useTypewriter([
    'Full Stack Developer',
    'React & React Native Expert',
    'MERN Stack Engineer',
    'Problem Solver',
  ], 80, 2000);

  // Floating animation for image
  useEffect(() => {
    controls.start({
      y: [-8, 8, -8],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <HeroSection id="home">
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexDirection: isMobile ? 'column-reverse' : 'row',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          {/* LEFT: Text */}
          <Grid item xs={12} md={6} lg={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.9rem', sm: '2.4rem', md: '3.0rem' },
                    lineHeight: 1.05,
                  }}
                >
                  Hi, I'm <span style={{ color: '#147efb' }}>Hafiz Basit</span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: 'text.secondary',
                    fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' },
                    minHeight: '2.5rem',
                    mt: 2,
                  }}
                >
                  {/* typed effect */}
                  <span style={{ color: theme.palette.text.primary }}>{typed}</span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ color: theme.palette.primary.main, marginLeft: 6 }}
                  >
                    |
                  </motion.span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: 1.8,
                    maxWidth: '640px',
                    mx: isMobile ? 'auto' : 0,
                    color: 'text.secondary',
                    mt: 3,
                  }}
                >
                  Motivated Full Stack Engineer with expertise in React.js, React Native, and the MERN
                  stack. I build scalable, user-centered web and mobile applications and love turning
                  product ideas into production-ready software.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box
                  mt={4}
                  sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    gap: 2,
                  }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <StyledButton
                      variant="contained"
                      size="large"
                      onClick={() => scrollToSection('projects')}
                      endIcon={<VisibilityIcon />}
                      sx={{
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        color: 'white',
                        boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
                        '&:hover': { 
                          boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.4)}`,
                          transform: 'translateY(-2px)'
                        },
                      }}
                    >
                      View Projects
                    </StyledButton>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <StyledButton
                      variant="outlined"
                      size="large"
                      component="a"
                      href="/Basit's_Resume_.pdf"
                      download="Hafiz_Basit_Resume.pdf"
                      endIcon={<DownloadIcon />}
                      sx={{
                        borderColor: alpha(theme.palette.primary.main, 0.5),
                        color: theme.palette.primary.main,
                        backgroundColor: alpha(theme.palette.primary.main, 0.05),
                        '&:hover': { 
                          borderColor: theme.palette.primary.main,
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                          transform: 'translateY(-2px)'
                        },
                      }}
                    >
                      Download Resume
                    </StyledButton>
                  </motion.div>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box mt={4} sx={{ 
                  display: 'flex', 
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  flexWrap: 'wrap',
                  gap: 1,
                }}>
                  <motion.div 
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <SocialIcon
                      aria-label="LinkedIn"
                      component="a"
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </SocialIcon>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <SocialIcon
                      aria-label="GitHub"
                      component="a"
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </SocialIcon>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <SocialIcon aria-label="Email" onClick={handleEmailClick}>
                      <EmailIcon />
                    </SocialIcon>
                  </motion.div>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* RIGHT: Image */}
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{ 
              display: 'flex', 
              justifyContent: isMobile ? 'center' : 'flex-end', 
              mb: isMobile ? 4 : 0,
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: '110%',
                  height: '110%',
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 70%)`,
                  borderRadius: '50%',
                  zIndex: -1,
                  animation: 'pulse 3s infinite ease-in-out',
                  '@keyframes pulse': {
                    '0%': { opacity: 0.6, transform: 'scale(0.95)' },
                    '50%': { opacity: 0.8, transform: 'scale(1)' },
                    '100%': { opacity: 0.6, transform: 'scale(0.95)' },
                  }
                }
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={imageVariants}
                style={{ zIndex: 2 }}
              >
                <Tilt 
                  tiltMaxAngleX={8} 
                  tiltMaxAngleY={8} 
                  glareEnable={true} 
                  glareMaxOpacity={0.1}
                  glareColor={theme.palette.primary.main}
                  glarePosition="all"
                  glareBorderRadius="50%"
                  style={{ 
                    borderRadius: '50%',
                  }}
                >
                  <motion.div
                    animate={controls}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src={profile}
                      alt="Profile"
                      sx={{
                        width: isMobile ? 260 : 380,
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '50%',
                        border: `8px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                        boxShadow: `0 25px 50px ${alpha(theme.palette.common.black, 0.15)}`,
                        objectFit: 'cover',
                        display: 'block',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    />
                  </motion.div>
                </Tilt>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero;