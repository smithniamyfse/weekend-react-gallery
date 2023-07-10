// ** GalleryItem.jsx represents a single image in the gallery
// ** with the ability to click the image
// ** to toggle between image and description
// ** as well as the ability to like an image ** //


import { useState } from "react";
import axios from "axios";
import "./GalleryItem.css";

function GalleryItem({ galleryItem, fetchGalleryItems }) {
  const [showImage, setShowImage] = useState(true);

  const likeImage = () => {
    console.log("in likeImage: ");
    axios
      .put(`/gallery/like/${galleryItem.id}`)
      .then((response) => {
        console.log("likeImage response", response.data);
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
        {/* Display the number likes for each item and include a like button. */}
        {/* When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`. */}
        {/* Update the gallery each time a like button is clicked. */}
        <div className="like-button-container">
          <button className="like-btn" onClick={likeImage}>💚 Like</button>
        </div>
        <div className="container-liked-text">
          <span className="count-text">{galleryItem.likes}</span> insect fans liked this.
        </div>
      </div>
    </>
  );
}

export default GalleryItem;

