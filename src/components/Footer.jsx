import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterSection = styled(Box)(({ theme }) => ({
  padding: '60px 0 30px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  textAlign: 'center',
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: 'white',
  margin: '0 10px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.secondary.main,
    transform: 'scale(1.2)',
  },
}));

const Footer = () => {
  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" alignItems="center">
          {/* Name / Branding */}
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
            Hafiz Basit
          </Typography>

          {/* Tagline */}
          <Typography variant="body2" sx={{ maxWidth: '500px', mb: 3 }}>
            A passionate developer dedicated to creating innovative solutions and beautiful user experiences.
          </Typography>

          {/* Social Links */}
          <Box>
            <SocialIcon
              aria-label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/hafiz-basit-64304121b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </SocialIcon>
            <SocialIcon
              aria-label="GitHub"
              component="a"
              href="https://github.com/HafizBasit7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </SocialIcon>
            <SocialIcon
              aria-label="Twitter"
              component="a"
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </SocialIcon>
          </Box>

          {/* Divider */}
          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 3, width: '80%' }} />

          {/* Copyright */}
          <Typography variant="body2">
            © {new Date().getFullYear()} Made with ❤️ by Hafiz Basit
          </Typography>
        </Box>
      </Container>
    </FooterSection>
  );
};

export default Footer;
