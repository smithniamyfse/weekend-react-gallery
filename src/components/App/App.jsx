import { useEffect, useState } from "react";
// import axios to enable
// axios is an additional library that enables the
// client-side to communicate (make HTTP requests) with the server-side (SQL database)
import axios from "axios";
import GalleryList from '../GalleryList/GalleryList.jsx';
import "./App.css";


// ** App.js represents the overall application or site **
// App.js is the *top level component* responsible for fetching data
function App() {
  const [galleryList, setGalleryList] = useState([]);

  // Function to get the Gallery Items from the server/database
  const fetchGalleryItems = () => {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        console.log("Entire response:", response);
        // The actual array comes from the data attribute on the response
        console.log("Just the data:", response.data);

        // Set data into component state
        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log("Error on get:", error);
      });
  };

  // Call function so it runs once on component load
  // Similar to jQuery's document ready
  useEffect( () => {
    fetchGalleryItems();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <GalleryList galleryList={galleryList} fetchGalleryItems={fetchGalleryItems}/>
    </div>
  );
}

export default App;
