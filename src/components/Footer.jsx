import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterSection = styled(Box)(({ theme }) => ({
  padding: '50px 0',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
}));

const Footer = () => {
  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 600 }}>
            Hafiz Basit
          </Typography>
          <Typography variant="body2" align="center" sx={{ maxWidth: '500px', mb: 3 }}>
            A passionate developer dedicated to creating innovative solutions and beautiful user experiences.
          </Typography>
          <Box>
            <IconButton sx={{ color: 'white' }} aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }} aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }} aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            © {new Date().getFullYear()} Made with ❤️ by Hafiz Basit
          </Typography>
        </Box>
      </Container>
    </FooterSection>
  );
};

export default Footer;