import React from 'react';
import { Box, Container, Typography, Button, Grid, IconButton, useTheme, useMediaQuery  } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import profile from '../assets/image/profile.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import { scrollToSection } from '../utils/scrollUtils';

const HeroSection = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    padding: '100px 0 50px',
    overflow: 'hidden',
  }));
  
  const SocialIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    margin: '0 10px',
    '&:hover': {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
  }));
  
  const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

       // Add your social media links here
       const socialLinks = {
        linkedin: 'https://www.linkedin.com/in/hafiz-basit-64304121b/', // Replace with your LinkedIn
        github: 'https://github.com/HafizBasit7', // Replace with your GitHub
        email: 'hafiz.zes7@gmail.com' // Replace with your email
      };
  
      const handleEmailClick = () => {
        window.location.href = socialLinks.email;
      };
  
    return (
      <HeroSection id="home">
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Grid 
            container 
            spacing={4} 
            alignItems="center"
            justifyContent="space-between"
            sx={{ 
              flexDirection: isMobile ? 'column-reverse' : 'row',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            <Grid item xs={12} md={6} lg={6}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                }}
              >
                Hi, I'm <span style={{ color: '#147efb' }}>Hafiz Basit</span>
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ 
                  fontWeight: 600, 
                  color: '#767676',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Full Stack Developer
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ 
                  fontSize: '18px', 
                  lineHeight: 1.6,
                  maxWidth: '600px',
                  mx: isMobile ? 'auto' : '0'
                }}
              >
                Motivated Full Stack Engineer with expertise in React.js, React Native, and the MERN stack.
                I build scalable, user-centered web and mobile applications and love turning product ideas
                into production-ready software.
              </Typography>
  
              <Box mt={4} sx={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'center' : 'flex-start',
                gap: 2
              }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: 'white',
                    fontWeight: 600,
                    padding: '12px 28px',
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: '#0e6ad1',
                    },
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="/Basit's_Resume_.pdf"
  download="Hafiz_Basit_Resume.pdf"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    fontWeight: 600,
                    padding: '12px 28px',
                    borderRadius: '10px',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      color: 'secondary.main',
                    },
                  }}
                >
                  Download Resume
                </Button>
              </Box>
              <Box mt={4} sx={{ 
                display: 'flex', 
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
                <SocialIcon 
                  aria-label="LinkedIn"
                  component="a"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </SocialIcon>
                <SocialIcon 
                  aria-label="GitHub"
                  component="a"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </SocialIcon>
                <SocialIcon 
                  aria-label="Email"
                  onClick={handleEmailClick}
                >
                  <EmailIcon />
                </SocialIcon>
              </Box>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={5}
              sx={{ 
                display: 'flex', 
                justifyContent: isMobile ? 'center' : 'flex-end',
                mb: isMobile ? 4 : 0
              }}
            >
              <Box
                component="img"
                src={profile}
                alt="Profile"
                sx={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '50%',
                  border: '3px solid #147efb',
                  boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)',
                  objectFit: 'cover',
                  aspectRatio: '1/1',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>
    );
  };
  
  export default Hero;