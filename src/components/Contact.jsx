import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  Snackbar,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  backgroundColor: theme.palette.mode === 'light' ? '#f9fafc' : theme.palette.background.default,
}));

const ContactInfo = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '25px',
}));

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) return;

    // Here you would typically send the form data to a backend (API call)
    console.log('Form submitted:', formData);

    setOpenSnackbar(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ContactSection id="contact">
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="textSecondary"
          sx={{ mb: 8, maxWidth: '700px', margin: '0 auto' }}
        >
          Have a project in mind or just want to connect? Drop me a message, and I’ll get back to you as soon as possible.
        </Typography>

        <Grid container spacing={8}>
          {/* Left Side - Contact Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
              Let’s Talk!
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </Typography>

            <ContactInfo>
              <EmailIcon sx={{ color: theme.palette.secondary.main, fontSize: '30px', mr: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Email
                </Typography>
                <Typography variant="body1">hafiz.zes7@gmail.com</Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <PhoneIcon sx={{ color: theme.palette.secondary.main, fontSize: '30px', mr: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Phone
                </Typography>
                <Typography variant="body1">+92 318 5343522</Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <LocationOnIcon sx={{ color: theme.palette.secondary.main, fontSize: '30px', mr: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Location
                </Typography>
                <Typography variant="body1">Islamabad, Pakistan</Typography>
              </Box>
            </ContactInfo>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
                multiline
                rows={5}
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  mt: 3,
                  backgroundColor: theme.palette.secondary.main,
                  color: 'white',
                  fontWeight: 600,
                  padding: '14px 0',
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: '#0e6ad1',
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          ✅ Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </ContactSection>
  );
};

export default Contact;
