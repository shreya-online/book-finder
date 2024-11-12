import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Blogs from './components/Blogs';
import FindYourKnowledgeBuddy from './components/FindYourKnowledgeBuddy';
import BlogOne from './components/utils/BlogOne';
import BlogTwo from './components/utils/BlogTwo';
import BlogThree from './components/utils/BlogThree';
import BlogFour from './components/utils/BlogFour';
import BlogFive from './components/utils/BlogFive';
import BlogSix from './components/utils/BlogSix';
import Error from './components/utils/Error';
import AboutUs from './components/AboutUs';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: <HomePage /> 
      },
      {
        path: "/about", 
        element: <AboutUs />,
      },
      { 
        path: "/blogs", 
        element: <Blogs />,
        // children: [
        //   {
        //     path: "top-10-books-2024",
        //     element: <BlogOne />, 
        //   },
        // ],
      },
      {
        path: "/blogs/top-10-books-2024", 
        element: <BlogOne />,
      },
      {
        path: "/blogs/why-reading-fiction-is-good-for-you", 
        element: <BlogTwo />,
      },
      {
        path: "/blogs/how-to-choose-books-by-age", 
        element: <BlogThree />,
      },
      {
        path: "/blogs/best-books-for-career-growth", 
        element: <BlogFour />,
      },
      {
        path: "/blogs/top-sci-fi-books-for-2024", 
        element: <BlogFive />,
      },
      {
        path: "/blogs/how-to-start-book-club", 
        element: <BlogSix />,
      },
      { 
        path: "/findyourknowledgebuddy", 
        element: <FindYourKnowledgeBuddy /> 
      },
    ],
    errorElement: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
