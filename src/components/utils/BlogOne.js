import React from 'react';
import { Container, Typography, Box, Rating, Divider } from '@mui/material';

// Sample book data
const books = [
  {
    id: 1,
    title: "The Covenant of Water",
    author: "Abraham Verghese",
    genre: "Literary Fiction",
    description: "A sweeping family saga set in Kerala, India, exploring faith, resilience, and the legacy of love across generations. Set against the lush backdrop of the Kerala backwaters, this novel delves into the complex web of familial ties, generational secrets, and the universal themes of survival and self-discovery.",
    review: "A breathtaking exploration of family and faith that spans generations. Verghese's storytelling is masterful, and his portrayal of Kerala's unique culture adds an immersive layer to this already poignant tale.",
    rating: 4.8,
    comments: [
      { user: "Anna", text: "An unforgettable story that stays with you long after you finish it!" },
      { user: "John", text: "A must-read for anyone who loves deep, character-driven narratives." },
    ],
    recommendedFor: "Readers who enjoy sweeping family dramas and literary fiction."
  },
  {
    id: 2,
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    genre: "Fiction / Romance",
    description: "A nostalgic look at creativity, friendship, and the journey of two friends who create a life-changing video game together. This novel blends the complexities of love, ambition, and technology in a fast-paced narrative that pulls you in from the very first page.",
    review: "A poignant story about the intersections of friendship and love in the digital age. Zevin's exploration of creative partnerships and the impact of technology on human connection is both timely and insightful.",
    rating: 4.7,
    comments: [
      { user: "Emily", text: "A heartwarming and clever story that resonates with anyone who's ever been in a creative partnership." },
      { user: "Mike", text: "This book blends romance with the fascinating world of gaming, and it does it perfectly!" },
    ],
    recommendedFor: "Fans of tech, gaming, and emotional literary fiction."
  },
  {
    id: 3,
    title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
    author: "David Grann",
    genre: "Nonfiction / History",
    description: "A thrilling historical account of a shipwreck, mutiny, and murder in the 18th century. Grann delves deep into the survival stories of the men who fought for their lives in a harrowing battle against nature, leadership, and each other.",
    review: "A gripping account of survival and betrayal. Grann's investigative style and narrative pacing make this a page-turner that feels like a thriller, despite being based on historical events.",
    rating: 4.5,
    comments: [
      { user: "Sophia", text: "History has never been this thrilling. Grann’s meticulous research creates a captivating narrative." },
      { user: "Mark", text: "A true survival story that had me on the edge of my seat. Highly recommended!" },
    ],
    recommendedFor: "History buffs and fans of true crime."
  },
  {
    id: 4,
    title: "Pineapple Street",
    author: "Jenny Jackson",
    genre: "Contemporary Fiction",
    description: "A witty exploration of wealth, privilege, and family dynamics among New York’s elite. The story follows the lives of three women navigating love, identity, and societal expectations within the confines of their ultra-wealthy environment.",
    review: "A sharp, funny, and at times heartbreaking exploration of what happens when money becomes both a shield and a weapon. Jackson’s prose is sharp and observational, providing both humor and depth.",
    rating: 4.3,
    comments: [
      { user: "Lucy", text: "I loved the way this book captured the complexities of privilege and relationships." },
      { user: "Tom", text: "A compelling read that dives into the pressures of wealth and family." },
    ],
    recommendedFor: "Fans of satire and contemporary fiction with a focus on social dynamics."
  },
  {
    id: 5,
    title: "Spare",
    author: "Prince Harry",
    genre: "Memoir",
    description: "An unflinching memoir offering insight into royal life, family rifts, and Prince Harry's journey to self-discovery. This memoir provides a raw and candid look at the man behind the headlines, detailing his life within the royal family and the struggles he faced along the way.",
    review: "A deeply personal and revealing memoir. Prince Harry’s vulnerability shines through in his honest reflection of his life within the royal family and his search for meaning outside of it.",
    rating: 4.0,
    comments: [
      { user: "Rachel", text: "An emotionally charged memoir that gave me a new perspective on Prince Harry." },
      { user: "David", text: "A heartfelt read for anyone interested in royal life and personal growth." },
    ],
    recommendedFor: "Those interested in memoirs, royalty, and personal growth stories."
  }
];

const BlogOne = () => {
  return (
    <Container sx={{ mt: 4, mb: 4, paddingBottom: 8 }}>
      {/* Main Heading */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "'Georgia', serif",
          fontWeight: 'bold',
          color: '#333',
          marginBottom: 5
        }}
      >
        Top 5 Books to Read in 2024
      </Typography>

      {/* Loop through books and display each in a full-width container */}
      {books.map((book) => (
        <Box key={book.id} sx={{ mb: 5 }}>
          {/* Book Title and Author */}
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
            {book.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ marginTop: 1 }}>
            <strong>Author:</strong> {book.author}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ marginTop: 1 }}>
            <strong>Genre:</strong> {book.genre}
          </Typography>

          {/* Book Description */}
          <Typography
            variant="body1"
            color="textPrimary"
            sx={{
              marginTop: 2,
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: '#444',
            }}
          >
            {book.description}
          </Typography>

          {/* Review Snippet */}
          <Box sx={{ mt: 2, fontStyle: 'italic', color: '#555' }}>
            <Typography variant="body1">"{book.review}"</Typography>
          </Box>

          {/* Rating */}
          <Box sx={{ mt: 2 }}>
            <Rating name="read-only" value={book.rating} precision={0.1} readOnly />
          </Box>

          {/* Recommended For */}
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            <strong>Recommended For:</strong> {book.recommendedFor}
          </Typography>

          {/* Comments Section */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" color="textSecondary">
              <strong>What Readers Are Saying:</strong>
            </Typography>
            {book.comments.map((comment, index) => (
              <Typography variant="body1" color="textPrimary" key={index} sx={{ mt: 1 }}>
                <strong>{comment.user}:</strong> {comment.text}
              </Typography>
            ))}
          </Box>

          {/* Divider Between Books */}
          <Divider sx={{ mt: 3 }} />
        </Box>
      ))}
    </Container>
  );
};

export default BlogOne;
