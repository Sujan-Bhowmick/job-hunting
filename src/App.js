import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddJob from './components/AddJob';
import Navbar from './components/Navbar';
import EditJob from './components/EditJob';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/job' element={<AddJob />} />
        <Route path='/edit' element={<EditJob />} />
      </Routes>
    </Router>
  );
}

export default App;
