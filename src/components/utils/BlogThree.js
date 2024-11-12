import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const ageGroups = [
  {
    id: 1,
    title: "For Young Readers (Ages 5-12)",
    description: "Look for Fun and Adventure",
    content: "Young children love stories filled with colorful worlds, curious characters, and adventurous plots. Books that blend fantasy and reality can spark their imaginations. Choose books with age-appropriate language, with picture books for the youngest, and chapter books with more complex themes for older kids.",
    recommendations: [
      { title: "Where the Wild Things Are", author: "Maurice Sendak" },
      { title: "Charlotte’s Web", author: "E.B. White" },
      { title: "The Magic Tree House Series", author: "Mary Pope Osborne" }
    ]
  },
  {
    id: 2,
    title: "For Preteens and Teens (Ages 13-18)",
    description: "Relatable Characters and Themes",
    content: "Teen years are filled with change, and books with relatable characters can provide comfort and insight. Many teens enjoy fantasy, science fiction, and realistic fiction that reflect real-life challenges or imaginative worlds.",
    recommendations: [
      { title: "Harry Potter Series", author: "J.K. Rowling" },
      { title: "The Hunger Games", author: "Suzanne Collins" },
      { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ]
  },
  {
    id: 3,
    title: "For Young Adults (Ages 18-30)",
    description: "Seek Out Self-Discovery Themes",
    content: "Young adults often seek books with themes of self-discovery, independence, and personal growth. Books in this stage include a mix of fiction, memoirs, and self-help to navigate adulthood.",
    recommendations: [
      { title: "Becoming", author: "Michelle Obama" },
      { title: "Educated", author: "Tara Westover" },
      { title: "The Alchemist", author: "Paulo Coelho" }
    ]
  },
  {
    id: 4,
    title: "For Adults (Ages 30-50)",
    description: "Consider Your Life Stage",
    content: "This stage often involves career growth, relationships, and family. Books on self-improvement, historical fiction, and biographies provide insights and help balance escapism with reality.",
    recommendations: [
      { title: "Big Little Lies", author: "Liane Moriarty" },
      { title: "The Power of Now", author: "Eckhart Tolle" },
      { title: "A Gentleman in Moscow", author: "Amor Towles" }
    ]
  },
  {
    id: 5,
    title: "For Mature Readers (Ages 50+)",
    description: "Focus on Meaningful Reflections",
    content: "As life slows down, books that offer introspective journeys and wisdom are enriching. Many older readers enjoy both classics and newer works reflecting on life and legacy.",
    recommendations: [
      { title: "The Night Watchman", author: "Louise Erdrich" },
      { title: "The Book Thief", author: "Markus Zusak" },
      { title: "The Four Agreements", author: "Don Miguel Ruiz" }
    ]
  }
];

const BlogThree = () => {
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
        How to Choose the Right Book for Your Age
      </Typography>

      {/* Introduction Paragraph */}
      <Typography variant="body1" color="textPrimary" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
        Choosing the right book isn't just about your age, but also about your interests and where you are in life. Here’s a guide to help you pick books that engage, inspire, and entertain, no matter your age.
      </Typography>

      {/* Loop through age groups and display each in a full-width container */}
      {ageGroups.map((group) => (
        <Box key={group.id} sx={{ mb: 5 }}>
          {/* Age Group Title and Description */}
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
            {group.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ marginTop: 1, fontStyle: 'italic' }}>
            {group.description}
          </Typography>

          {/* Age Group Content */}
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
            {group.content}
          </Typography>

          {/* Recommended Books */}
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            <strong>Recommended Books:</strong>
          </Typography>
          {group.recommendations.map((book, index) => (
            <Typography variant="body1" color="textPrimary" key={index} sx={{ mt: 1 }}>
              <strong>{book.title}</strong> by {book.author}
            </Typography>
          ))}

          {/* Divider Between Age Groups */}
          <Divider sx={{ mt: 3 }} />
        </Box>
      ))}

      {/* Conclusion Paragraph */}
      <Typography variant="body1" color="textPrimary" sx={{ mt: 5, fontSize: '1.1rem', lineHeight: 1.8 }}>
        No matter your age, there’s always a book that can entertain, educate, or inspire you. Fiction, nonfiction, mystery, or memoir—each has something unique to offer. So pick up a book, dive in, and let the journey begin!
      </Typography>
    </Container>
  );
};

export default BlogThree;
