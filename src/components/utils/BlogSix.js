import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const BlogSix = () => {
  return (
    <Container sx={{ mt: 4, mb: 4, paddingBottom: 8, maxWidth: 'md' }}>
      {/* Main Heading */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "'Georgia', serif",
          fontWeight: 'bold',
          color: '#1A535C',
          marginBottom: 5,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}
      >
        How to Start a Book Club
      </Typography>

      {/* Introduction Paragraph */}
      <Typography variant="body1" color="textPrimary" sx={{ mb: 3, fontSize: '1.2rem', lineHeight: 1.8, color: '#555' }}>
        Starting a book club is a wonderful way to share the joy of reading with friends, family, or even strangers who share your passion. Whether you want to dive into specific genres, explore new perspectives, or simply have fun discussing your favorite reads, starting a book club can create a meaningful, lasting community. Here are some steps and ideas to get your book club off the ground.
      </Typography>

      {/* Step-by-Step Guide */}
      <Box sx={{ mb: 5 }}>
        {/* Individual Step */}
        {[
          {
            title: "Decide on a Theme or Focus",
            content: "Think about what type of books you want your club to focus on. Do you want to explore classic literature, contemporary fiction, sci-fi, mystery, or even self-help books? Having a theme or focus can help attract members with similar interests and create a cohesive experience."
          },
          {
            title: "Decide on Meeting Format and Frequency",
            content: "Will your meetings be in person, online, or a mix of both? Consider the needs of your members when deciding on the format. Decide how often to meet — monthly meetings work well for most book clubs, as they give everyone enough time to finish the book."
          },
          {
            title: "Choose Your First Book Carefully",
            content: "For the first book, choose something accessible and interesting, but not overly challenging. A good starter book will help build momentum and encourage discussion. You could even have members vote on a list of books to get everyone involved from the beginning."
          },
          {
            title: "Set Ground Rules",
            content: "Setting a few basic rules helps keep the book club enjoyable for everyone. Consider discussing things like attendance expectations, participation, how books will be chosen in the future, and how long each meeting will last. These guidelines will help maintain a respectful and engaging environment."
          },
          {
            title: "Prepare Discussion Questions",
            content: "Discussion questions can help steer the conversation and make it easier for quieter members to participate. You can prepare questions in advance or encourage members to bring their own questions to each meeting. Many books also come with discussion guides that can be a great resource."
          },
          {
            title: "Add Fun Extras",
            content: "Make each meeting special by adding some fun elements. You could have themed snacks or drinks based on the book, play a trivia game about the story, or give small prizes for participation. These extras can make the experience memorable and keep members excited about coming back."
          },
          {
            title: "Foster a Welcoming Atmosphere",
            content: "Finally, ensure that everyone feels welcome and included. Encourage open discussion and make sure everyone's voice is heard. A supportive and friendly environment is key to building a successful book club that members will want to be part of for years to come."
          }
        ].map((step, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4ECDC4', mt: 3 }}>
              {index + 1}. {step.title}
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              sx={{
                mt: 1.5,
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#333',
                padding: '0 10px',
                borderLeft: '5px solid #4ECDC4',
                pl: 2
              }}
            >
              {step.content}
            </Typography>
          </Box>
        ))}

        <Divider sx={{ mt: 4, mb: 4, borderBottomWidth: 2, borderColor: '#1A535C' }} />

        {/* Conclusion */}
        <Typography variant="body1" color="textPrimary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
          Starting a book club can be a rewarding way to deepen your love of reading and build connections with others who share your interests. With these tips in mind, you're well on your way to creating a thriving, engaging book club. Happy reading and happy meeting!
        </Typography>
      </Box>
    </Container>
  );
};

export default BlogSix;
