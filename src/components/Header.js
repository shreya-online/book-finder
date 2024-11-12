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
import Logo from '../assets/logo.png';
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
      background: 'linear-gradient(135deg, #008080, #003B2D)',
      boxShadow: 4,
      zIndex: 1100,
      transition: 'background 0.5s ease',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Logo} alt="logo"
            style={{
              width: "80px",
              height: "80px",
              marginRight: '15px',
              borderRadius: '5px', 
              transition: 'transform 0.3s ease',
            }}
          />

          <Link to="/"
            style={{
              display: 'flex', 
              alignItems: 'center',
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              letterSpacing: ".5rem",
              color: "white",
              textDecoration: "none",
              fontSize: '2rem',
              transition: 'color 0.3s ease',
              padding: '10px',
              borderRadius: '8px',
              '&:hover': {
                color: '#4FD1C5',
                textDecoration: 'none',
                transform: 'scale(1.1)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              }
            }}
          >
            BookFinder
          </Link>

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

          <Box sx={{
            flexGrow: 1, display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: 500,
                  textTransform: "none",
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#4FD1C5',
                    transform: 'translateY(-2px)', 
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
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
