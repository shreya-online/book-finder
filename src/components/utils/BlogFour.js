import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const careerBooks = [
  {
    id: 1,
    title: "Developing Leadership Skills",
    description: "Enhance Your Leadership Abilities",
    content: "Strong leadership skills are crucial for career advancement. These books cover essential strategies, from building a team to inspiring others, helping readers grow as leaders in their professional environments.",
    recommendations: [
      { title: "Leaders Eat Last", author: "Simon Sinek" },
      { title: "Dare to Lead", author: "Brené Brown" },
      { title: "The Five Dysfunctions of a Team", author: "Patrick Lencioni" }
    ]
  },
  {
    id: 2,
    title: "Improving Time Management",
    description: "Maximize Productivity with Effective Time Management",
    content: "Time management is essential for achieving career goals. These books offer strategies for prioritizing tasks, reducing procrastination, and staying focused, helping readers accomplish more in less time.",
    recommendations: [
      { title: "Getting Things Done", author: "David Allen" },
      { title: "Deep Work", author: "Cal Newport" },
      { title: "Eat That Frog!", author: "Brian Tracy" }
    ]
  },
  {
    id: 3,
    title: "Building Effective Communication Skills",
    description: "Master the Art of Professional Communication",
    content: "Good communication is key in any career. These books cover topics like public speaking, active listening, and effective feedback, enabling readers to express themselves clearly and build stronger professional relationships.",
    recommendations: [
      { title: "Crucial Conversations", author: "Kerry Patterson" },
      { title: "How to Win Friends and Influence People", author: "Dale Carnegie" },
      { title: "Talk Like TED", author: "Carmine Gallo" }
    ]
  },
  {
    id: 4,
    title: "Developing Financial Literacy",
    description: "Understand Personal and Professional Finances",
    content: "Financial literacy is an often-overlooked career skill. These books provide insights into managing personal and business finances, understanding investments, and building financial stability for long-term success.",
    recommendations: [
      { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki" },
      { title: "The Total Money Makeover", author: "Dave Ramsey" },
      { title: "The Intelligent Investor", author: "Benjamin Graham" }
    ]
  },
  {
    id: 5,
    title: "Cultivating a Growth Mindset",
    description: "Adopt a Mindset That Drives Career Success",
    content: "A growth mindset can transform your career. These books emphasize resilience, adaptability, and continuous learning, helping readers embrace challenges and learn from setbacks.",
    recommendations: [
      { title: "Mindset: The New Psychology of Success", author: "Carol S. Dweck" },
      { title: "Grit: The Power of Passion and Perseverance", author: "Angela Duckworth" },
      { title: "Atomic Habits", author: "James Clear" }
    ]
  }
];

const BlogFour = () => {
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
        The Best Books for Career Growth
      </Typography>

      {/* Introduction Paragraph */}
      <Typography variant="body1" color="textPrimary" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
        Advancing in your career is about more than just hard work—it’s also about growing the right skills and mindset. Here are some top books in various areas that can help you boost your career, from developing leadership qualities to mastering time management.
      </Typography>

      {/* Loop through career books and display each in a full-width container */}
      {careerBooks.map((book) => (
        <Box key={book.id} sx={{ mb: 5 }}>
          {/* Book Category Title and Description */}
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
            {book.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ marginTop: 1, fontStyle: 'italic' }}>
            {book.description}
          </Typography>

          {/* Content of the Book Category */}
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
            {book.content}
          </Typography>

          {/* Recommended Books */}
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            <strong>Recommended Books:</strong>
          </Typography>
          {book.recommendations.map((rec, index) => (
            <Typography variant="body1" color="textPrimary" key={index} sx={{ mt: 1 }}>
              <strong>{rec.title}</strong> by {rec.author}
            </Typography>
          ))}

          {/* Divider Between Categories */}
          <Divider sx={{ mt: 3 }} />
        </Box>
      ))}

      {/* Conclusion Paragraph */}
      <Typography variant="body1" color="textPrimary" sx={{ mt: 5, fontSize: '1.1rem', lineHeight: 1.8 }}>
        Investing time in reading can be one of the most valuable tools in your career journey. Each of these books offers insights and strategies to help you grow professionally and personally, so choose a few and start making strides in your career today!
      </Typography>
    </Container>
  );
};

export default BlogFour;
