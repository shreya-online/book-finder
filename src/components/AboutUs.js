import React from 'react';
import { Box, Typography, Button, Paper, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const AboutUs = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: '"Roboto", sans-serif',
        padding: '40px',
      }}
    >
      <Container sx={{ maxWidth: '900px' }}>
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#333',
            marginBottom: 4,
            textAlign: 'center',
            letterSpacing: '1px',
          }}
        >
          About BookFinder
        </Typography>

        {/* Description Section */}
        <Paper
          sx={{
            padding: '24px',
            backgroundColor: '#fdfdfd',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            borderRadius: '16px',
            marginBottom: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#555',
              marginBottom: 2,
              textAlign: 'left',
              fontSize: '1.1rem',
            }}
          >
            At **BookFinder**, we are passionate about helping you discover your next great read. Whether you're an avid reader or someone simply looking for a book that aligns with your interests, we've got you covered!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#333',
              marginBottom: 2,
              fontSize: '1.1rem',
              lineHeight: '1.6',
            }}
          >
            Our platform leverages the power of **Generative AI** to provide personalized book suggestions based on the genre or themes you're interested in. Simply type in a genre, and our system will suggest a list of titles tailored to your tastes. From fiction to non-fiction, mystery to fantasy, BookFinder has something for everyone.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#333',
              marginBottom: 4,
              fontSize: '1.1rem',
              lineHeight: '1.6',
            }}
          >
            We believe in the power of books to inspire, educate, and entertain. Our mission is to make book discovery easier, more enjoyable, and more relevant to your interests. With the help of cutting-edge AI technology, we aim to bring you the most accurate and personalized book recommendations in just a few clicks.
          </Typography>
        </Paper>

        {/* AI Integration Section */}
        <Paper
          sx={{
            padding: '24px',
            backgroundColor: '#fdfdfd',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            borderRadius: '16px',
            marginBottom: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: '600',
              color: '#333',
              marginBottom: 2,
              textAlign: 'center',
            }}
          >
            Powered by Generative AI
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              marginBottom: 2,
              fontSize: '1.1rem',
              lineHeight: '1.6',
            }}
          >
            Our platform uses the latest advancements in **Generative AI** to understand your reading preferences and suggest books that align with them. This technology processes vast amounts of data to generate relevant and personalized recommendations. Whether you're interested in the latest bestsellers, hidden gems, or niche genres, the AI will curate a selection tailored specifically to you.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              fontSize: '1.1rem',
              lineHeight: '1.6',
            }}
          >
            By integrating this advanced AI technology into our platform, we provide you with a seamless and efficient way to discover new books, without the hassle of sifting through endless lists and recommendations. Your next favorite book is just a few clicks away!
          </Typography>
        </Paper>

        {/* Call to Action Section */}
        <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#333',
              fontWeight: '600',
              marginBottom: 2,
            }}
          >
            Ready to discover your next great read?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link} // Use Link for routing
            to="/findyourknowledgebuddy" // Update this to the correct path for the KnowYourKnowledgeBuddy page
            sx={{
              borderRadius: '16px',
              padding: '12px 24px',
              backgroundColor: '#4caf50',
              '&:hover': {
                backgroundColor: '#388e3c',
              },
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'background-color 0.3s ease',
            }}
          >
            Start Finding Books
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
