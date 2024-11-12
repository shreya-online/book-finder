import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import ReactMarkdown from "react-markdown";
import LoadingScreen from "./utils/LoadingScreen"; 

const FindYourKnowledgeBuddy = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bookGenre, setBookGenre] = useState(''); 


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
      setLoading(true); 
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
      setResponse(data); 
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching data: ",error);
      setLoading(false);
    }
  };

  
  const handleSubmit = () => {
    if (bookGenre.trim()) {
      generativeData(bookGenre); 
    }
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(); 
    }
  };

  return (
    <Box
      sx={{
        padding: '40px',
        background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Roboto", sans-serif',
      }}
    >

      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: '#333',
          marginBottom: 2,
          textAlign: 'center',
          letterSpacing: '1px',
        }}
      >
        Find Your Next Read!
      </Typography> 
      <Typography
        variant="h6"
        sx={{
          color: '#555',
          marginBottom: 4,
          textAlign: 'center',
          maxWidth: '600px',
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
        onKeyDown={handleKeyPress} 
        sx={{
          marginBottom: 3,
          maxWidth: '450px', 
          width: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '16px', 
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

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{
          borderRadius: '16px',
          padding: '14px 28px',
          backgroundColor: '#4caf50',
          '&:hover': {
            backgroundColor: '#388e3c',
          },
          boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s ease, transform 0.3s ease', 
          '&:active': {
            transform: 'scale(0.98)',
          },
        }}
      >
        Get Book Suggestions
      </Button>

      {loading && <LoadingScreen />}

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
          
          <Paper
            sx={{
              padding: '30px', 
              backgroundColor: '#fdfdfd', 
              borderRadius: '20px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)', 
              overflowY: 'auto',
              marginBottom: 3,
              '&:hover': {
                boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
              },
              transition: 'box-shadow 0.3s ease',
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
                      fontSize: '1.1rem',
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
                        backgroundColor: '#4caf50',
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
