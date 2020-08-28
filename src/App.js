import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Course from './Components/Courses/Course';
import Banner from './Banner/Banner';
// import Banner from './Banner/Banner';



function App() {

  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <Course></Course>
    
      
    </div>
  );
}

export default App;
