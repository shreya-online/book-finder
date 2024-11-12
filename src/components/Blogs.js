import React from "react";
import { Box, Container, Grid, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from 'react-router-dom';
import blog1 from '../assets/blog1.jpeg'
import blog2 from '../assets/blog2.jpeg'
import blog3 from '../assets/blog3.jpeg'
import blog4 from '../assets/blog4.jpeg'
import blog5 from '../assets/blog5.jpeg'
import blog6 from '../assets/blog6.jpeg'

const blogPosts = [
  {
    title: "Top 10 Books to Read in 2024",
    description: "Discover the top books that everyone is talking about in 2024. From fiction to non-fiction, there's something for every reader.",
    imageUrl: blog1,
    readMoreLink: "top-10-books-2024"
  },
  {
    title: "Exploring the World of Fiction",
    description: "Reading fiction isn't just fun — it has many benefits for your mental health, creativity, and more. Learn why you should read more fiction.",
    imageUrl: blog2,
    readMoreLink: "why-reading-fiction-is-good-for-you"
  },
  {
    title: "How to Choose the Right Book for Your Age",
    description: "Choosing the right book based on your age is crucial to maximizing your reading experience. Here are some tips and recommendations.",
    imageUrl: blog3,
    readMoreLink: "how-to-choose-books-by-age"
  },
  {
    title: "The Best Books for Career Growth",
    description: "Explore books that can help boost your career development, from leadership to productivity.",
    imageUrl: blog4,
    readMoreLink: "best-books-for-career-growth"
  },
  {
    title: "Top 10 Sci-Fi Books to Read in 2024",
    description: "The future awaits! Here are the best science fiction books of 2024, packed with futuristic technology, space exploration, and dystopian adventures. Check out these recommendations",
    imageUrl: blog5,
    readMoreLink: "top-sci-fi-books-for-2024"
  },
  {
    title: "How to Start a Book Club",
    description: "Tips for creating a fun and rewarding book club that will keep members coming back for more.",
    imageUrl: blog6,
    readMoreLink: "how-to-start-book-club"
  }
];

const Blogs = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", padding: "40px 0" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Book Finder Blogs
        </Typography>

        {/* Blog posts */}
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.imageUrl}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {post.description}
                  </Typography>
                  <Link to={post.readMoreLink} underline="hover"  style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
      </Container>
    </Box>
  );
};

export default Blogs;
