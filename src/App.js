import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import MentorList from './Components/MentorList';
import Home from './Components/Home';

function App() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
   
     
  }, []);

  return (
    <Router>
      <div className="bg-gray-100 ">
        <Navbar />
        <Home/>
        <h1>Rakesh</h1>
        

        
      </div>
    </Router>
  );
}

export default App;

