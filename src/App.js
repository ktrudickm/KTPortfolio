import React from 'react'
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Nav from "./components/NavBar/nav"
import Home from "./pages/home";
import Contact from './components/Contact/form'
import './index.css';

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
