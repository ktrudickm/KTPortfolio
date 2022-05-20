import React from 'react'
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Nav from "./components/NavBar/nav"
import Home from "./pages/home";
import './index.css';

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
