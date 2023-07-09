// ** GalleryList.jsx represents the gallery of images ** //
// TODO: GalleryList COMPONENT //
/* TODO: 
- [x] 2. Create a new **component** for the `GalleryList`
    - [] a. Pass it the gallery data stored in `App` via `props`
    - [] b. Iterate (loop over) the list of gallery data
    - [] c. Make GalleryItems
*/

import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({ galleryList, fetchGalleryItems }) {
  return (
    // This is where we'll display a galleryItem component for every image in the list
    <>
      {galleryList.map((galleryItem) => {
        /* 
          galleryItem = {
            id:
            path:
            description:
            likes:
          } 
        */
        return (<GalleryItem galleryItem={galleryItem} fetchGalleryItems={fetchGalleryItems} />) // GalleryItem({ galleryItem: galleryItem })
      })}
    </>
  );
}

export default GalleryList;

/*
      return (
      <ul>
        // we're passing each array element as props to GalleryList
        {galleryItems.map((GalleryList) => (
            <GalleryList id={GalleryList} />
          ))}
        </ul>
        );
*/
