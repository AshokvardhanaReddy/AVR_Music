

import "./SongTitleCard.css";

import React from 'react'

import song_image from "../../assests/music_image.png";

const SongTitleCard = () => {
  return (
    <div className = "song-title-card-container" >
     <img src = {song_image} alt = "Song Image" />
     <div>
        <p className = "song-title-name" >Song Partial Name</p>
        <p className = "song-movie-name" >Movie Name</p>
     </div>
    </div>
  )
}

export default SongTitleCard
