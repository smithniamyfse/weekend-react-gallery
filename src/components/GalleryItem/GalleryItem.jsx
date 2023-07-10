// ** GalleryItem.jsx represents a single image in the gallery
// ** with the ability to click the image
// ** to toggle between image and description
// ** as well as the ability to like an image ** //

// TODO: `GalleryItem.jsx` COMPONENT //
// - [x] 3. Create a new **component** called `GalleryItem.jsx`
//     - [x] a. Pass it the individual gallery item via `props`.
//     - [x] b. Update the `GalleryList` to use this component to display an image
//     - [] c. Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
//     - [] d. Display the number likes for each item and include a like button.
//     - [] e. When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
//     - [] f. Update the gallery each time a like button is clicked.

import { useState } from 'react';
import axios from "axios";
import "./GalleryItem.css";

function GalleryItem({ galleryItem }) {
    const [showImage, setShowImage] = useState(true);

  const likeImage = () => {
    axios
      .put(`/gallery/like/${galleryItem.id}`)
      .then((response) => {
        // Update the gallery items after a like is successful
        fetchGalleryItems();
      })
      .catch((error) => {
        console.log("Error with PUTting like of image", error);
      });
  };

  const toggleImageDescription = () => {
    setShowImage(!showImage);
  };


  return (
    <>
      <div className="gallery-item-container">

      <div className="image-container">
         {/* Used conditional rendering to swap the image with the description on click. */}
        {showImage ? (
          <img
            src={process.env.PUBLIC_URL + "/" + galleryItem.path}
            alt={galleryItem.description}
            onClick={toggleImageDescription}
          />
        ) : (
          <p className="image-description" onClick={toggleImageDescription}>
            {galleryItem.description}
          </p>
        )}
      </div>
        <button onClick={likeImage}>Love it!</button>
        {/* {galleryItem.likes && } */}
      </div>
    </>
  );
}

export default GalleryItem;


