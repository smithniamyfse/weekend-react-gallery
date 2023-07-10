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


// import GalleryItem from "../GalleryItem/GalleryItem.jsx";

// function GalleryList({ galleryList }) {

//   return (
//     // This is where we'll display a galleryItem component for every image in the list
//     <>
//       <ul>
//         {galleryList.map((galleryItem) => (
//           /* 
//           const galleryItem: {
//               id: number;
//               path: string;
//               description: string;
//               likes: number;
//           }
//         */
//           <GalleryItem galleryItem={galleryItem} />
//           // <GalleryItem key={galleryItem.id} galleryItem={galleryItem} />
//         ))}
//       </ul>
//     </>
//   );
// }

// export default GalleryList;

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

/*

    function CreatureList({ creatureList }) {
        return (
            <ul>
                {
                  creatureList.map(creatureItem => 
                    <CreatureItem key={creatureItem.id} creature={creatureItem}/>
                  )  
                }
            </ul>
        );
    }
*/

/*
First try:

  return (
    // This is where we'll display a galleryItem component for every image in the list
    <>
      {galleryList.map((galleryItem) => {
        //**
          const galleryItem: {
              id: number;
              path: string;
              description: string;
              likes: number;
          }
    
          return (<GalleryItem galleryItem={galleryItem} fetchGalleryItems={fetchGalleryItems} />) // GalleryItem({ galleryItem: galleryItem })
        })}
      </>
    );

*/
