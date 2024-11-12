import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import ReactMarkdown from "react-markdown";
import LoadingScreen from "./utils/LoadingScreen"; // Assuming you have a loading spinner component

const FindYourKnowledgeBuddy = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bookGenre, setBookGenre] = useState(''); // Store the user's book genre input

  // Function to handle API request based on book genre
  const generativeData = async (genre) => {
    const requestPayload = {
      contents: [
        {
          parts: [
            {
              text: `Suggest me some books related to ${genre}`
            }
          ]
        }
      ]
    };

    try {
      setLoading(true); // Set loading to true while fetching data
      const fetchData = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD6n1nlmEfL6FR0flmkUXEljiWqDwVEk0k', // API endpoint
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestPayload),
        }
      );

      const data = await fetchData.json();
      setResponse(data); // Save the response from the API
      setLoading(false); // Set loading to false once data is received
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  // Handle form submit (send user input to generative API)
  const handleSubmit = () => {
    if (bookGenre.trim()) {
      generativeData(bookGenre); // Fetch data based on the genre
    }
  };

  // Handle "Enter" key press to trigger the API request
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(); // Trigger the submit function when "Enter" is pressed
    }
  };

  return (
    <Box
      sx={{
        padding: '40px',
        background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)', // Soft gradient background
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: '#333',
          marginBottom: 2,
          textAlign: 'center',
          letterSpacing: '1px', // Slightly more letter-spacing for elegance
        }}
      >
        Find Your Next Read!
      </Typography>
      
      {/* Introduction Text */}
      <Typography
        variant="h6"
        sx={{
          color: '#555',
          marginBottom: 4,
          textAlign: 'center',
          maxWidth: '600px', // Slightly larger max width
          fontSize: '1.2rem',
        }}
      >
        Tell us what kind of book you're interested in, and we'll suggest some titles for you.
      </Typography>

      {/* Text Input */}
      <TextField
        label="Enter a genre or theme"
        variant="outlined"
        value={bookGenre}
        onChange={(e) => setBookGenre(e.target.value)}
        onKeyDown={handleKeyPress} // Add event listener for the "Enter" key
        sx={{
          marginBottom: 3,
          maxWidth: '450px', // Increase max width for more balance
          width: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '16px', // More rounded corners
            backgroundColor: '#ffffff',
            borderColor: '#ccc',
            '&:hover fieldset': {
              borderColor: '#4caf50',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4caf50',
            },
          },
        }}
      />

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{
          borderRadius: '16px', // More rounded corners
          padding: '14px 28px',
          backgroundColor: '#4caf50',
          '&:hover': {
            backgroundColor: '#388e3c',
          },
          boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition on hover
          '&:active': {
            transform: 'scale(0.98)', // Slight button scale effect on click
          },
        }}
      >
        Get Book Suggestions
      </Button>

      {/* Loading Screen */}
      {loading && <LoadingScreen />}

      {/* Display API Response */}
      {response && !loading && (
        <Box sx={{ mt: 5, maxWidth: '800px', width: '100%' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: '600',
              color: '#333',
              marginBottom: 2,
              textAlign: 'center',
            }}
          >
            Based on your interest, here are some suggestions:
          </Typography>
          
          {/* Render the markdown response */}
          <Paper
            sx={{
              padding: '30px', // More padding for better spacing
              backgroundColor: '#fdfdfd', // Light background
              borderRadius: '20px', // More rounded corners for a smoother look
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)', // Softer shadow for a modern feel
              overflowY: 'auto',
              marginBottom: 3,  // Ensure spacing between response and other elements
              '&:hover': {
                boxShadow: '0 10px 20px rgba(0,0,0,0.12)', // Slightly deeper shadow on hover
              },
              transition: 'box-shadow 0.3s ease', // Smooth shadow transition
            }}
          >
            <ReactMarkdown
              children={response.candidates[0].content.parts[0].text}
              components={{
                li: ({ children }) => (
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#333',
                      marginBottom: 1,
                      fontSize: '1.1rem', // Slightly larger font size for list items
                      lineHeight: '1.6',
                      paddingLeft: '25px',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '5px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#4caf50', // Green bullet for soft touch
                      }}
                    ></span>
                    {children}
                  </Typography>
                ),
                p: ({ children }) => (
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#333',
                      marginBottom: 2,
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                    }}
                  >
                    {children}
                  </Typography>
                ),
                h2: ({ children }) => (
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#4caf50',
                      marginBottom: 1,
                    }}
                  >
                    {children}
                  </Typography>
                ),
                h3: ({ children }) => (
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: '600',
                      color: '#4caf50',
                      marginBottom: 1,
                    }}
                  >
                    {children}
                  </Typography>
                ),
              }}
            />
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default FindYourKnowledgeBuddy;
