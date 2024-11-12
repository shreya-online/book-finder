import { Typography, Box, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import Banner from '../assets/banner.jpg'; 

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
      <Box sx={{
        position: "relative",
        width: "100%",
        height: "50vh",
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: 2,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            textAlign: "center",
          }}
        >
          Welcome to Book Finder
        </Typography>
      </Box>


      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
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
                fontSize: '2.5rem', 
                textTransform: 'uppercase',
                letterSpacing: 5,
                marginBottom: 1, 
                textAlign: 'center',
                background: 'linear-gradient(45deg, #1976D2, #42a5f5)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                position: 'relative',
            }}
            >
            Trending Books
            </Typography>

          <Box
            sx={{
              width: '50px',
              height: '5px',
              backgroundColor: '#1976D2',
              borderRadius: '5px',
              marginTop: 2,
            }}
          />
        </Box>
        <Grid container spacing={4}>
          {bestseller.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s ease",
                  backgroundColor: "#ffffff",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 6,
                  },
                }}
              >

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
                  <Typography variant="h6" component="h4" gutterBottom>
                    {item.volumeInfo.title}
                  </Typography>

                  {item.volumeInfo.subtitle && (
                    <Typography variant="body1" color="textSecondary" gutterBottom>
                      {item.volumeInfo.subtitle}
                    </Typography>
                  )}

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
