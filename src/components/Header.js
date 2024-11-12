import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logo.png'; // Your logo image
import { Link } from 'react-router-dom';

const pages = [
  <Link to="/findyourknowledgebuddy" style={{ textDecoration: 'none', color: 'inherit' }}>Find Your Knowledge Buddy</Link>,
  <Link to="/blogs" style={{ textDecoration: 'none', color: 'inherit' }}>Blogs</Link>,
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{
      background: 'linear-gradient(135deg, #008080, #003B2D)',  // Teal to Dark Green Gradient
      boxShadow: 4,  // Subtle shadow for depth
      zIndex: 1100,  // Ensure it's always on top
      transition: 'background 0.5s ease',  // Smooth transition for background color change on scroll
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "80px",
              height: "80px",
              marginRight: '15px',
              borderRadius: '5px', // Slightly rounded corners for a polished look
              transition: 'transform 0.3s ease',  // Smooth transition effect on hover
            }}
          />

          {/* Title */}
          <Link
            to="/"
            style={{
              display: 'flex', 
              alignItems: 'center',
              fontFamily: "Poppins, sans-serif",  // Modern font for better design
              fontWeight: 800,  // Bold font weight for a strong title
              letterSpacing: ".5rem",  // Increased letter spacing for better readability
              color: "white",  // White text for contrast
              textDecoration: "none",  // Remove underline by default
              fontSize: '2rem',  // Larger font size for better visibility
              transition: 'color 0.3s ease',  // Smooth color transition on hover
              padding: '10px',  // Padding for better click area
              borderRadius: '8px',  // Rounded corners for a more modern feel
              '&:hover': {
                color: '#4FD1C5',  // Light Teal color when hovered
                textDecoration: 'none',  // Prevent underline on hover
                transform: 'scale(1.1)',  // Slight scale effect to give the hover a more dynamic feel
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',  // Shadow on hover for depth
              }
            }}
          >
            BookFinder
          </Link>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{
            flexGrow: 1, display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",  // Align buttons to the right
          }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",  // White text for button
                  display: "block",
                  fontWeight: 500,
                  textTransform: "none",  // Keep the text normal case for buttons
                  padding: '8px 16px', // Better padding for buttons
                  '&:hover': {
                    backgroundColor: '#4FD1C5',  // Light Teal on hover
                    transform: 'translateY(-2px)',  // Slight lift effect on hover
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',  // Shadow on hover for depth
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
