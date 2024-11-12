import React from "react";
import { Box, Container, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, GitHub } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "white",
        paddingTop: 4,
        paddingBottom: 4,
        marginTop: "auto",
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About BookFinder
            </Typography>
            <Typography variant="body2">
              BookFinder helps you find your next great read. Discover the best books from various genres and read reviews.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>
                <Link to="/" color="inherit" underline="hover" style={{textDecoration: "none",color: "white",}}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" color="inherit" underline="hover" style={{textDecoration: "none",color: "white",}}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="/blogs" color="inherit" underline="hover" style={{textDecoration: "none",color: "white",}}>
                  Blog
                </Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" href="https://github.com" target="_blank" aria-label="GitHub">
                <GitHub />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography variant="body2" color="grey">
            &copy; {new Date().getFullYear()} BookFinder. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
