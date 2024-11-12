import { Typography, Box, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import Banner from '../assets/banner.jpg'; // Importing the image from your assets folder

const HomePage = () => {
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    bestsellerBooks();
  }, []);

  const bestsellerBooks = async () => {
    const fetchData = await fetch('https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=10');
    const data = await fetchData.json();
    setBestseller(data?.items);
    console.log("data", data.items);
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <Box sx={{
        position: "relative",
        width: "100%",
        height: "50vh", // Adjust this height for your hero section
        backgroundImage: `url(${Banner})`, // Background image
        backgroundSize: "cover", // Ensure the image covers the container
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Center the text
        zIndex: 1,
      }}>
        {/* Welcome Text on Top of Background Image */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#fff", // White text for visibility
            textTransform: "uppercase",
            letterSpacing: 2,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Adding text shadow for contrast
            textAlign: "center", // Center the text horizontally
          }}
        >
          Welcome to Book Finder
        </Typography>
      </Box>

      {/* Books Section */}
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        {/* Aesthetic "Trending Books" Title */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginBottom: 4 
        }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
                fontWeight: 'bold',
                fontSize: '2.5rem', // Bigger size for impact
                textTransform: 'uppercase',
                letterSpacing: 5, // Increased letter spacing for a modern look
                marginBottom: 1, // Space between text and underline
                textAlign: 'center',
                background: 'linear-gradient(45deg, #1976D2, #42a5f5)', // Gradient background
                WebkitBackgroundClip: 'text', // Clipping the gradient to text
                color: 'transparent', // Make the text color transparent so the gradient shows
                position: 'relative', // For any additional effects
            }}
            >
            Trending Books
            </Typography>

          {/* Decorative Underline */}
          <Box
            sx={{
              width: '50px',
              height: '5px',
              backgroundColor: '#1976D2', // Underline color matching the text
              borderRadius: '5px',
              marginTop: 2, // Adds a bit of space between the text and underline
            }}
          />
        </Box>

        {/* Display Bestsellers */}
        <Grid container spacing={4}>
          {bestseller.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: 3, // Subtle shadow effect
                  borderRadius: 2, // Rounded corners
                  transition: "transform 0.3s ease", // Hover effect
                  backgroundColor: "#ffffff", // Card background color
                  "&:hover": {
                    transform: "translateY(-10px)", // Slight lift on hover
                    boxShadow: 6, // Increased shadow on hover
                  },
                }}
              >
                {/* Book Image */}
                <CardMedia
                  component="img"
                  height="250"
                  image={item.volumeInfo.imageLinks?.thumbnail}
                  alt={item.volumeInfo.title}
                  sx={{
                    objectFit: "contain",
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                  }}
                />
                <CardContent sx={{ flexGrow: 1, padding: 2 }}>
                  {/* Book Title */}
                  <Typography variant="h6" component="h4" gutterBottom>
                    {item.volumeInfo.title}
                  </Typography>

                  {/* Book Subtitle */}
                  {item.volumeInfo.subtitle && (
                    <Typography variant="body1" color="textSecondary" gutterBottom>
                      {item.volumeInfo.subtitle}
                    </Typography>
                  )}

                  {/* Book Authors */}
                  <Typography variant="body2" color="textSecondary">
                    {item.volumeInfo.authors?.join(", ")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
