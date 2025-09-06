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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  backgroundColor: theme.palette.background.paper,
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '25px',
}));

const Contact = () => {
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
    // Here you would typically send the form data to a backend
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
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Contact
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="textSecondary"
          sx={{ mb: 8, maxWidth: '700px', margin: '0 auto' }}
        >
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
              Let's talk about everything!
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions or would like to discuss a project, feel free to reach out. I'm always open to new opportunities and interesting conversations.
            </Typography>
            <ContactInfo>
              <EmailIcon sx={{ color: 'secondary.main', fontSize: '30px', mr: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Email
                </Typography>
                <Typography variant="body1">hafiz.zes7@gmail.com</Typography>
              </Box>
            </ContactInfo>
            <ContactInfo>
              <PhoneIcon sx={{ color: 'secondary.main', fontSize: '30px', mr: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Phone
                </Typography>
                <Typography variant="body1">+92 318 5343522</Typography>
              </Box>
            </ContactInfo>
            <ContactInfo>
              <LocationOnIcon sx={{ color: 'secondary.main', fontSize: '30px', mr: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Location
                </Typography>
                <Typography variant="body1">Islamabad, Pakistan</Typography>
              </Box>
            </ContactInfo>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email"
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
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
                multiline
                rows={4}
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  fontWeight: 600,
                  padding: '12px 40px',
                  borderRadius: '10px',
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </ContactSection>
  );
};

export default Contact;