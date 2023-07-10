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



function GalleryList({ galleryList, fetchGalleryItems }) {
  return (
    <>
      <div className="gallery-list-container">
        {galleryList.map((galleryItem) => (
          <GalleryItem key={galleryItem.id} galleryItem={galleryItem} fetchGalleryItems={fetchGalleryItems}/>
          
        ))}
      </div>
    </>
  );
}

export default GalleryList;


