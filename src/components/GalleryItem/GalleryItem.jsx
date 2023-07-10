// ** GalleryItem.jsx represents a single image in the gallery
// ** with the ability to click the image
// ** to toggle between image and description
// ** as well as the ability to like an image ** //

// TODO: `GalleryItem.jsx` COMPONENT //
// - [x] 3. Create a new **component** called `GalleryItem.jsx`
//     - [x] a. Pass it the individual gallery item via `props`.
//     - [x] b. Update the `GalleryList` to use this component to display an image
//     - [x] c. Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
//     - [] d. Display the number likes for each item and include a like button.
//     - [] e. When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
//     - [] f. Update the gallery each time a like button is clicked.

import { useState } from "react";
import axios from "axios";
import "./GalleryItem.css";

function GalleryItem({ galleryItem, fetchGalleryItems }) {
  const [showImage, setShowImage] = useState(true);
  const [likedImage, setLikedImage] = useState(true);

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
          <button onClick={likeImage}>Like</button>
        </div>
        <div className="container-liked-text">
          {galleryItem.likes} people liked this!
        </div>
      </div>
    </>
  );
}

export default GalleryItem;

/*
Explanation of the code:

Import the React and useState from the "react" library. We use useState to manage the state of showImage, which determines whether to show the image or description.

Declare a new state variable showImage using the useState hook. Initialize it to true, indicating that the image should be shown initially.

In the toggleImageDescription function, use the setShowImage function to toggle the value of showImage between true and false when the image or description is clicked.

In the return statement, conditionally render the image or description based on the value of showImage. If showImage is true, render the img element with the image path and description. Add an onClick event handler to the image, which will call the toggleImageDescription function when clicked.

If showImage is false, render a <p> element with the description text. Add an onClick event handler to the paragraph to toggle back to showing the image when clicked.

Add a "Love it!" button with an onClick event handler that calls the likeImage function to update the like count.

Display the number of likes for each item using galleryItem.likes.

By implementing these changes, the image should be rendered correctly, and clicking on the image should toggle between displaying the image and the description. Additionally, the "Love it!" button is included to handle the like functionality.

*/
