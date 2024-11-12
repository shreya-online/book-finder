import React from 'react';
import { Container, Typography, Box, Rating, Divider } from '@mui/material';

// Fiction Book Data for "Exploring the World of Fiction"
const fictionBooks = [
  {
    id: 1,
    title: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    genre: "Mystery / Literary Fiction",
    description: "A young boy in post-World War II Barcelona discovers a forgotten book by an obscure author, only to find that someone has been systematically destroying every copy of it. This captivating mystery unfolds against the backdrop of a city filled with secrets.",
    review: "An atmospheric and intricately woven tale of love, loss, and the power of literature. Zafón’s writing is rich, and his storytelling is mesmerizing.",
    rating: 4.7,
    comments: [
      { user: "Sophia", text: "A beautifully written book with a rich and mysterious plot. I couldn’t put it down!" },
      { user: "David", text: "A classic in the making. The setting of Barcelona adds so much to the story." },
    ],
    recommendedFor: "Readers who love literary fiction, historical mysteries, and stories about the love of books."
  },
  {
    id: 2,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    genre: "Fantasy / Fiction",
    description: "A magical circus that opens at night and is a venue for a rivalry between two young magicians. The story takes the reader on a journey through a world of illusion and enchantment, filled with beautiful and intriguing characters.",
    review: "A mesmerizing, whimsical tale filled with stunning imagery and fantastical elements. The magic of the circus is intoxicating, and the romance is deeply captivating.",
    rating: 4.5,
    comments: [
      { user: "Lily", text: "A truly magical story that kept me enchanted from start to finish." },
      { user: "Mark", text: "Morgenstern’s world-building is incredible. A wonderful escape from reality." },
    ],
    recommendedFor: "Fantasy lovers, readers who enjoy magical realism, and those looking for a beautifully atmospheric read."
  },
  {
    id: 3,
    title: "Circe",
    author: "Madeline Miller",
    genre: "Fantasy / Mythology",
    description: "A feminist retelling of the Greek myth of Circe, the powerful sorceress who transforms Odysseus’s men into pigs. This novel gives Circe a voice, exploring her isolation, power, and search for identity in a world of gods and mortals.",
    review: "Miller's reimagining of the Circe myth is powerful and poignant. It gives depth to a character who has long been vilified in mythology, turning her into a complex and sympathetic figure.",
    rating: 4.6,
    comments: [
      { user: "Ella", text: "A beautiful, haunting retelling that gives Circe a depth I’ve never seen before." },
      { user: "Jake", text: "An extraordinary reimagining of Greek mythology with a strong, relatable protagonist." },
    ],
    recommendedFor: "Fans of Greek mythology, strong female protagonists, and fantasy fiction."
  },
  {
    id: 4,
    title: "The Goldfinch",
    author: "Donna Tartt",
    genre: "Literary Fiction",
    description: "Theo Decker survives a bombing at an art museum, but he loses his mother in the process. The novel follows Theo’s life as he navigates grief, art, love, and betrayal, all while hiding a priceless painting that reminds him of his mother.",
    review: "A profound and sweeping tale of loss, survival, and beauty. Tartt’s writing is brilliant, and the character of Theo is deeply compelling.",
    rating: 4.8,
    comments: [
      { user: "Oliver", text: "A deeply emotional and thought-provoking novel. The story stayed with me long after I finished it." },
      { user: "Nina", text: "The Goldfinch is a masterpiece. Tartt creates such complex characters and an unforgettable narrative." },
    ],
    recommendedFor: "Readers who love character-driven literary fiction and stories that dive deep into the human condition."
  },
  {
    id: 5,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Mystery / Coming-of-Age",
    description: "Set in the marshes of North Carolina, this novel follows Kya Clark, a young girl who is abandoned by her family and grows up in isolation. As she matures, she becomes a suspect in the murder of a local man, and her life is examined through a mix of suspense, romance, and nature.",
    review: "A beautiful, atmospheric novel that blends mystery with a coming-of-age story. Owens’ lyrical writing and the vivid portrayal of the marshland make this an unforgettable read.",
    rating: 4.7,
    comments: [
      { user: "Clara", text: "A gripping, beautifully written mystery with a stunning setting." },
      { user: "Ethan", text: "Kya’s story is tragic yet inspiring. A must-read for anyone who loves deep characters and compelling mysteries." },
    ],
    recommendedFor: "Mystery lovers, fans of southern fiction, and readers who enjoy strong, complex female characters."
  }
];

const BlogOneFiction = () => {
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
        Exploring the World of Fiction: 5 Must-Reads for 2024
      </Typography>

      {/* Introduction Paragraph */}
      <Typography variant="body1" color="textPrimary" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
        Fiction is a gateway to countless worlds, each one unique, captivating, and full of endless possibilities. Whether you're lost in a mysterious crime novel, diving deep into an emotional coming-of-age story, or exploring the enchanting realms of fantasy, fiction allows us to experience emotions, places, and perspectives far beyond our own. In 2024, several remarkable books promise to take us on unforgettable journeys. Here are five carefully selected fiction novels that are sure to ignite your imagination, provoke deep thought, and leave you with lasting impressions.
      </Typography>

      {/* Loop through fiction books and display each in a full-width container */}
      {fictionBooks.map((book) => (
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

      {/* Conclusion Paragraph */}
      <Typography variant="body1" color="textPrimary" sx={{ mt: 5, fontSize: '1.1rem', lineHeight: 1.8 }}>
        Fiction is not just a way to escape reality; it’s a way to understand the human experience, to step into someone else’s shoes, and to explore the world from new and different angles. Whether you’re discovering the hidden stories of ancient gods, unraveling a chilling mystery, or experiencing a character’s emotional growth, fiction enriches our lives in ways that no other medium can. So pick up a book from the list above, dive in, and let the world of fiction take you to places you've never imagined!
      </Typography>
    </Container>
  );
};

export default BlogOneFiction;
