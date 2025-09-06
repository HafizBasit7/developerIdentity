import React, { useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.secondary.main,
}));

const NavItem = styled(Typography)(({ theme }) => ({
  margin: '0 15px',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '17px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#experience' },
    { text: 'Projects', href: '#projects' },
    { text: 'Skills', href: '#skills' },
    { text: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component="a" href={item.href}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <ElevationScroll>
        <StyledAppBar position="fixed">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
              Hafiz Basit
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {menuItems.map((item) => (
                <NavItem
                  key={item.text}
                  component="a"
                  href={item.href}
                  sx={{ display: 'inline-block' }}
                >
                  {item.text}
                </NavItem>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar /> {/* This toolbar acts as spacing under the fixed appbar */}
    </>
  );
};

export default Header;