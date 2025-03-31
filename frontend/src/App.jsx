import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import { AppContext } from './context/AppContext';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { showLogin } = useContext(AppContext);


  return (
    <div className='min-h-screen bg-gradient-to-b from-black to-gray-1500 text-white'>
      <Navbar />
      {showLogin && (
          <Login />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
