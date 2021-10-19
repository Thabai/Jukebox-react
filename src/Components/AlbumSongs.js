import AlbumCard from './AlbumCard';
import React from 'react';

const AlbumSongs = ({albumSongs}) => {

 return (
   <div>
     {albumSongs.map((data, index) => {
       return (
         <div>
           <AlbumCard key={index} {...data} />
         </div>
       );
     })}
   </div>
 );
};

export default AlbumSongs;