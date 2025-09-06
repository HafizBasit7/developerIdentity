import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Box,
  Divider,
  alpha,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

// Styled components with modern design
const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled',
})(({ theme, scrolled }) => ({
  boxShadow: scrolled ? `0 5px 20px ${alpha(theme.palette.secondary.main, 0.1)}` : 'none',
  backgroundColor: scrolled ? alpha(theme.palette.background.paper, 0.95) : 'transparent',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  color: theme.palette.text.primary,
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  borderBottom: scrolled ? `1px solid ${alpha(theme.palette.divider, 0.1)}` : 'none',
}));

const Logo = styled(motion.a)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '1.5rem',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  backgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'block',
}));

const NavItem = styled('a')(({ theme }) => ({
  position: 'relative',
  margin: '0 12px',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '16px',
  padding: '8px 0',
  overflow: 'hidden',
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '0%',
    height: '2px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
   
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
  },
}));

const MobileNavItem = styled(ListItem)(({ theme }) => ({
  textAlign: 'center',
  padding: '16px 24px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));

// Custom scroll trigger with more control
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return React.cloneElement(children, {
    scrolled: trigger,
  });
}

// Animation variants
const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#experience' },
    { text: 'Projects', href: '#projects' },
    { text: 'Skills', href: '#skills' },
    { text: 'Contact', href: '#contact' },
  ];

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (href) => {
    if (isMobile) {
      setDrawerOpen(false);
    }
    setActiveSection(href.substring(1));
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.97))',
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`
      }}>
        <Logo
          href="#home"
          onClick={() => handleNavClick('#home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hafiz Basit
        </Logo>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {menuItems.map((item) => (
          <MobileNavItem
            key={item.text}
            component="a"
            href={item.href}
            onClick={() => handleNavClick(item.href)}
            sx={{
              color: activeSection === item.href.substring(1) ? theme.palette.primary.main : 'text.primary',
              fontWeight: activeSection === item.href.substring(1) ? 700 : 500,
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: '1.2rem',
                fontWeight: 'inherit',
              }}
            />
          </MobileNavItem>
        ))}
      </List>
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Hafiz Basit
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {/* AppBar with scroll effect */}
      <ElevationScroll>
        <StyledAppBar position="fixed">
          <Toolbar sx={{
            justifyContent: 'space-between',
            py: 1,
            px: { xs: 2, md: 4 }
          }}>
            {/* Logo / Name */}
            <Logo
              href="#home"
              onClick={() => handleNavClick('#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hafiz Basit
            </Logo>

            {/* Desktop Navigation */}
            <Box sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center'
            }}>
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <NavItem
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    style={{
                      color: activeSection === item.href.substring(1) ? theme.palette.primary.main : theme.palette.text.primary,
                    }}
                  >
                    {item.text}
                  </NavItem>
                </motion.div>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <MenuButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </MenuButton>
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>

      {/* Mobile Drawer with animation */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleDrawerToggle}
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: alpha(theme.palette.common.black, 0.5),
                zIndex: theme.zIndex.drawer - 1,
              }}
            />
            <Drawer
              variant="temporary"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: 280,
                  border: 'none',
                  boxShadow: '0 0 40px rgba(0,0,0,0.1)',
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        )}
      </AnimatePresence>

      {/* Spacer under fixed header */}
      <Toolbar />
    </>
  );
};

export default Header;