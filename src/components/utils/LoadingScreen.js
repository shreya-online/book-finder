import React from 'react';
import { Container, Typography, Box, CircularProgress, Avatar } from '@mui/material';
import Puppy from '../../assets/puppy.jpg'

const LoadingScreen = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f7f7f7 0%, #e1e1e1 100%)',
        color: '#333',
        animation: 'fadeIn 1.5s ease-in-out',
        padding: '0 20px',
      }}
    >
      {/* Puppy Image */}
      <Box sx={{ mb: 3 }}>
        <Avatar
          alt="Waiting Puppy"
          src={Puppy}
          sx={{
            width: 120,
            height: 120,
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Circular Spinner with modern look */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
        }}
      >
        <CircularProgress
          size={60}
          thickness={4}
          sx={{
            color: '#3f51b5',
            position: 'absolute',
            zIndex: 1,
          }}
        />
        <CircularProgress
          size={50}
          thickness={4}
          sx={{
            color: '#ff4081',
            opacity: 0.4,
            position: 'absolute',
            animation: 'spin 2s linear infinite',
          }}
        />
      </Box>

      {/* Loading Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          letterSpacing: '0.5px',
          mb: 2,
          color: '#333',
          animation: 'fadeInText 2s ease-in-out',
        }}
      >
        Please Wait...
      </Typography>

      {/* Subtext */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: '80%',
          lineHeight: 1.6,
          fontSize: '1rem',
          opacity: 0.75,
          color: '#555',
        }}
      >
        Your content is being prepared. Thank you for your patience.
      </Typography>

      {/* Keyframes for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fadeInText {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Container>
  );
};

export default LoadingScreen;
