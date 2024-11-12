import React from 'react';
import { Container, Typography, Box, Rating, Divider } from '@mui/material';

const sciFiBooks = [
  {
    id: 1,
    title: "Project Hail Mary",
    author: "Andy Weir",
    description: "An astronaut wakes up alone in space with no memory of who he is or how to save humanity from an extinction-level threat. Packed with humor and science, this book will keep you on the edge of your seat.",
    review: "A thrilling, well-researched, and surprisingly emotional sci-fi adventure. Weir's storytelling is as captivating as ever.",
    rating: 4.8,
    comments: [
      { user: "Alex", text: "Incredible blend of science and fiction! Couldn't put it down." },
      { user: "Jordan", text: "Absolutely loved it. The plot twists and humor were perfect." }
    ]
  },
  {
    id: 2,
    title: "The Ministry for the Future",
    author: "Kim Stanley Robinson",
    description: "A bold exploration of climate change and humanity’s future, narrated through multiple perspectives. Robinson tackles our future head-on in this insightful and hopeful work of fiction.",
    review: "A must-read for anyone who cares about the future of our planet. Thought-provoking and timely.",
    rating: 4.6,
    comments: [
      { user: "Casey", text: "One of the most impactful sci-fi books I've read in years." },
      { user: "Taylor", text: "Highly recommend for anyone interested in climate sci-fi." }
    ]
  },
  {
    id: 3,
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    description: "An ambitious Chinese sci-fi novel about first contact with an alien civilization, exploring complex scientific theories and ethical dilemmas.",
    review: "Mind-bending and expansive. A challenging but rewarding read for hard sci-fi fans.",
    rating: 4.7,
    comments: [
      { user: "Jamie", text: "A masterpiece of hard science fiction." },
      { user: "Morgan", text: "Complex but absolutely worth it." }
    ]
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    description: "Set on the desert planet of Arrakis, this classic follows young Paul Atreides as he navigates a complex world of power, survival, and prophecy.",
    review: "An iconic sci-fi saga with intricate world-building and memorable characters. A true classic.",
    rating: 4.9,
    comments: [
      { user: "Sam", text: "One of the best sci-fi books ever written." },
      { user: "Jordan", text: "Incredible world and story. A must-read for any sci-fi fan." }
    ]
  },
  {
    id: 5,
    title: "Neuromancer",
    author: "William Gibson",
    description: "A groundbreaking cyberpunk novel that introduced the world to concepts like cyberspace, AI, and the matrix. It follows a washed-up computer hacker on a mission to pull off the ultimate hack.",
    review: "Gritty, inventive, and way ahead of its time. Gibson’s vision still feels relevant today.",
    rating: 4.5,
    comments: [
      { user: "Chris", text: "A timeless classic that shaped the cyberpunk genre." },
      { user: "Taylor", text: "Still holds up today. Truly visionary." }
    ]
  },
  {
    id: 6,
    title: "Hyperion",
    author: "Dan Simmons",
    description: "This epic follows seven pilgrims on a journey to confront a powerful entity known as the Shrike, each with their own stories and reasons for seeking it.",
    review: "A beautifully written, sprawling epic that blends elements of mythology, religion, and science fiction.",
    rating: 4.7,
    comments: [
      { user: "Pat", text: "Mind-blowing storytelling and world-building." },
      { user: "Jamie", text: "A sci-fi epic like no other. Highly recommended." }
    ]
  },
  {
    id: 7,
    title: "Snow Crash",
    author: "Neal Stephenson",
    description: "In a dystopian future, a pizza delivery driver/hacker named Hiro Protagonist navigates a virtual reality known as the Metaverse to unravel a deadly digital virus.",
    review: "Fast-paced, witty, and packed with clever ideas. A cornerstone of cyberpunk.",
    rating: 4.4,
    comments: [
      { user: "Taylor", text: "A fast, fun read with unforgettable concepts." },
      { user: "Morgan", text: "Amazing cyberpunk classic." }
    ]
  },
  {
    id: 8,
    title: "Foundation",
    author: "Isaac Asimov",
    description: "This series follows the journey to preserve knowledge and civilization in the face of an impending dark age. Asimov’s intricate plot and future history make this a seminal sci-fi work.",
    review: "Asimov’s grand vision of the future is captivating and timeless. A foundational work in science fiction.",
    rating: 4.6,
    comments: [
      { user: "Alex", text: "A monumental work in sci-fi literature." },
      { user: "Jordan", text: "An impressive and visionary series." }
    ]
  },
  {
    id: 9,
    title: "Altered Carbon",
    author: "Richard K. Morgan",
    description: "Set in a future where consciousness can be transferred between bodies, this gritty cyberpunk thriller follows a former soldier investigating a high-profile murder.",
    review: "Gripping, dark, and filled with thrilling twists. A thought-provoking exploration of identity and immortality.",
    rating: 4.3,
    comments: [
      { user: "Casey", text: "Dark and fascinating. Couldn’t put it down." },
      { user: "Chris", text: "A cyberpunk thriller that raises big questions." }
    ]
  },
  {
    id: 10,
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    description: "A tale of interplanetary diplomacy and gender exploration on a planet where inhabitants change gender throughout their lives.",
    review: "A profound and thought-provoking exploration of identity and humanity. Le Guin’s masterpiece is timeless.",
    rating: 4.8,
    comments: [
      { user: "Jamie", text: "Beautifully written and incredibly deep." },
      { user: "Sam", text: "One of the most unique sci-fi books I’ve ever read." }
    ]
  }
];

const BlogFive = () => {
  return (
    <Container sx={{ mt: 4, mb: 4, paddingBottom: 8 }}>
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
        Top 10 Sci-Fi Books to Read in 2024
      </Typography>

      <Typography variant="body1" color="textPrimary" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
        Science fiction offers us a glimpse into the future, challenges our imagination, and pushes us to question the limits of humanity. Here are ten sci-fi books for 2024 that will transport you to new worlds and provoke thought.
      </Typography>

      {sciFiBooks.map((book) => (
        <Box key={book.id} sx={{ mb: 5 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
            {book.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ marginTop: 1 }}>
            <strong>Author:</strong> {book.author}
          </Typography>

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

          <Box sx={{ mt: 2, fontStyle: 'italic', color: '#555' }}>
            <Typography variant="body1">"{book.review}"</Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Rating name="read-only" value={book.rating} precision={0.1} readOnly />
          </Box>

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

          <Divider sx={{ mt: 3 }} />
        </Box>
      ))}

      <Typography variant="body1" color="textPrimary" sx={{ mt: 5, fontSize: '1.1rem', lineHeight: 1.8 }}>
        Whether you’re new to sci-fi or a seasoned fan, these books are sure to expand your mind and take you on unforgettable journeys. Happy reading!
      </Typography>
    </Container>
  );
};

export default BlogFive;
