
import "./MusicPlayer.css";
import music_image from "../../assests/music_image.png";
import dummy_music from "../../assests/dummy_music.mp3";

import React, { useState } from 'react'
import { FaRegHeart, FaStepBackward, FaStepForward, FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { LuRepeat, LuRepeat1  } from "react-icons/lu";
import SongCard from "../SongMiniCard/SongMiniCard";

const MusicPlayer = () => {

    const [isPlaying, setIsPlaying] = useState(true);


    const handlePlayMusic = () => {
        setIsPlaying((prevState) => !prevState);
    }

  return (
    <>
    <section className = "player-container">
      <div className = "player-song-details" >
        <img src = {music_image} alt = "Dummy Song Image" />
        <p className = "player-song-name" >Song Full Partial Name</p>
        <p>Movie Name</p>
      </div>
      <div className = "player-progress-bar" >
        <p>2.10</p>
        <progress value = "99" max = "100" />
        <p>5.00</p>
      </div>
      <div className = "player-control-menu" >
        <FaRegHeart className = "player-icon" />
        <FaStepBackward className = "player-icon" />
        {isPlaying ? <FaPlayCircle onClick = {handlePlayMusic} className = "player-icon" id = "player-play-button" /> : <FaPauseCircle  onClick = {handlePlayMusic} className = "player-icon" id = "player-play-button" /> }
        
        <FaStepForward className = "player-icon" />
        <LuRepeat className = "player-icon" />
      </div>
    </section>
    </>
  )
}

export default MusicPlayer;
