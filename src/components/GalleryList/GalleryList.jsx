// ** GalleryList.jsx represents the gallery of images ** //
// TODO: GalleryList COMPONENT //
/* TODO: 
- [x] 2. Create a new **component** for the `GalleryList`
    - [x] a. Pass it the gallery data stored in `App` via `props`
    - [x] b. Iterate (loop over) the list of gallery data
    - [] c. Make GalleryItems
*/

import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import "./GalleryList.css";
import { Icon } from '@iconify/react';

function GalleryList({ galleryList, fetchGalleryItems }) {
  return (
    <>
      <div className="gallery-list-header">
        <h3>
        <span className="below-text"><Icon icon="clarity:clipboard-line" /> Below</span> is a short exhibit about sharpshooter insects, best known for catapulting pee droplets.
        </h3>
        <span className="instructions-text"><Icon icon="tabler:hand-click" /> Instructions: </span><span className="gallery-instructions">Click on the images to reveal tidbits about these talented insects. </span>
      </div>
      <div className="gallery-list-container">
        {galleryList.map((galleryItem) => (
          <GalleryItem
            key={galleryItem.id}
            galleryItem={galleryItem}
            fetchGalleryItems={fetchGalleryItems}
          />
        ))}
      </div>
    </>
  );
}

export default GalleryList;
