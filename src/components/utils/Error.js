import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { ErrorOutline } from '@mui/icons-material';

const ErrorPage = () => {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center', backgroundColor: '#f0f4f8' }}>
      
      {/* Main Error Message Box */}
      <Box sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        p: 5, 
        borderRadius: 3, 
        boxShadow: 10, 
        backgroundColor: '#ffffff', 
        textAlign: 'center', 
        mb: 4,
        maxWidth: '600px',
        transition: 'all 0.3s ease-in-out',
        '&:hover': { boxShadow: 15, transform: 'scale(1.05)' }
      }}>
        <ErrorOutline sx={{ fontSize: 120, color: '#f44336', mb: 3 }} />
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333', fontFamily: "'Playfair Display', serif", mb: 2 }}>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mb: 3, fontFamily: "'Roboto', sans-serif", lineHeight: 1.8 }}>
          We couldn’t find the page you were looking for. It might have been moved, deleted, or the URL could be incorrect. Don’t worry, though — you can always go back to our homepage and start fresh.
        </Typography>
        
        {/* Back to Home Button */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" sx={{
            fontSize: '1.1rem', 
            padding: '12px 24px', 
            borderRadius: 20, 
            backgroundColor: '#007BFF', 
            transition: '0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#0056b3',
              transform: 'scale(1.05)',
            }
          }}>
            Go Back to Home
          </Button>
        </Link>
      </Box>

      {/* Optional Additional Content */}
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6}>
          <Box sx={{
            p: 3, 
            borderRadius: 2, 
            boxShadow: 5, 
            backgroundColor: '#f9f9f9', 
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            }
          }}>
            <Typography variant="body2" sx={{ color: '#333', fontFamily: "'Roboto', sans-serif" }}>
              <strong>What went wrong?</strong> 
              The page you were trying to access does not exist. Please make sure the URL is correct or try navigating back to the homepage. Our team is working to ensure that the site is error-free, but if you need help, don't hesitate to contact us.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ErrorPage;
