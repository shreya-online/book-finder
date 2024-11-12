import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />  {/* Child route components will be rendered here */}
      <Footer />
    </div>
  );
}

export default App;
