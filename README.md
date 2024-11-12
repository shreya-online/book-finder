# Book Finder Website

Welcome to the **Book Finder Website** – a platform designed to help you discover your next great read based on your interests! Powered by generative AI, this website suggests personalized book recommendations based on the genre or theme you provide.

## Table of Contents
- [Features](#features)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Integration](#api-integration)
- [Contributing](#contributing)

## Features

- **User-Friendly Interface**: A simple and intuitive UI where users can input their favorite book genre or theme to receive personalized book recommendations.
- **Generative AI Integration**: The website uses a Generative AI API to provide intelligent and dynamic book suggestions based on your input.
- **Customizable Book Suggestions**: Users can receive book recommendations tailored to specific themes or genres, such as Fiction, Romance, Thriller, Fantasy, etc.
- **Clean and Modern Design**: The website follows a modern aesthetic with soft tones, smooth transitions, and an engaging user experience.

## How It Works

1. **Enter a Genre**: Users are prompted to enter a book genre or theme of their choice (e.g., "Romance", "Science Fiction", "Mystery").
2. **Get Book Suggestions**: Upon submission, the platform communicates with a generative AI model to generate relevant book suggestions based on the input.
3. **Display Recommendations**: After processing, the website displays a list of personalized book recommendations, formatted beautifully to enhance readability.

### Example User Flow:
- **Step 1**: Type in a genre such as "Fantasy".
- **Step 2**: Click on the "Get Book Suggestions" button.
- **Step 3**: Wait while the AI generates a list of books related to the input.
- **Step 4**: View the suggestions and pick a new book to read!

## Technologies Used

This project utilizes the following technologies:

- **React.js**: Frontend framework for building the interactive UI.
- **Material-UI**: Used for creating modern UI components and styling the application.
- **Generative AI API**: Powered by Google's Gemini 1.5 or similar generative models to fetch book suggestions based on user input.
- **Markdown Rendering**: The book recommendations are rendered using the `ReactMarkdown` package to present text-based responses in a clean and readable format.

## Getting Started

To get the project running on your local machine, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/book-finder-website.git
    ```

2. Navigate into the project directory:

    ```bash
    cd book-finder-website
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## API Integration

The core functionality of this website relies on the **Generative AI API** to suggest books based on user input.

