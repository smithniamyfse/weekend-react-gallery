// ** GalleryItem.jsx represents a single image in the gallery 
// ** with the ability to click the image 
// ** to toggle between image and description 
// ** as well as the ability to like an image ** //

import axios from 'axios';
import './GalleryItem.css'

function GalleryItem(props) {
    // TODO: Add the ability to click the image and toggle between image / description
    // TODO: Add a button to like an image

    const likeImage = () => {
        axios.put(`/gallery/like/${props.}`)
    }

}



/*
import axios from 'axios';
import './Creature.css';

//** props: {
    creature: 
    fetchCreatures:
}

function Creature(props) {
    //**props.creature = {
                   id: 
                   name:
                   origin:
                   favorite:    
               }


   const favoriteCreature = () => {
       axios.put(`/creature/${props.creature.id}`)
       .then(response =>{
           props.fetchCreatures();
       }).catch(error => {
           console.log('error with favorite creature: ', error);
       })
   };
   
   return (
       <div className='creature-container'> 
           <p className='creature-name'>{props.creature.name}</p> 
           <p>{props.creature.origin}</p>
           //**If creature has been favorited, display text instead of the button
           { props.creature.favorite ?
               <p>One of my faves!</p> :
               <button onClick={favoriteCreature}>❤️</button>
               }
           {props.creature.favorite && <div>🦄</div>}
       </div>
   )
}

export default Creature;

*/