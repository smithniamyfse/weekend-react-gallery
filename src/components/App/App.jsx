import React from 'react';
// import axios to enable 
  // axios is an additional library that enables the 
  // client-side to communicate (make HTTP requests) with the server-side (SQL database) 
import axios from 'axios';
import './App.css';

// ** App.js represents the overall application or site **
// App.js is the *top level component* responsible for fetching data

const galleryItems = [
  {
    id: 1,
    path: "images/glassWingSharpshooter.jpeg",
    description: "Photo of a glass wing sharpshooter insect.",
    likes: 0,
  },
  {
    id: 2,
    path: "images/sharpshooterButtStylus.jpeg",
    description: "Photo of the 'butt' stylus of a sharpshooter insect.",
    likes: 0,
  },
  {
    id: 3,
    path: "images/sharpshooterInsect.jpeg",
    description: "Photo of a sharpshooter ready to flick its urine.",
    likes: 0,
  },
];


function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/glassWingSharpshooter.jpeg"/>
        <img src="images/sharpshooterButtStylus.jpeg"/>
        <img src="images/sharpshooterInsect.jpeg"/>
      </div>
    );
}

export default App;
