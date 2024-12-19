import "./SongMiniCard.css";
import {
  FaRegHeart,
  FaStepBackward,
  FaStepForward,
  FaPauseCircle,
  FaPlayCircle,
  FaPlus,
} from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";

import React from "react";

import song_image from "../../assests/music_image.png";

const SongMiniCard = () => {
  return (
    <section className="song-card-container">
      <p>01</p>
      <img src =  {song_image} alt = "Song Image" />
      <div>
        <p className = "song-card-song-name" >Song Partial Name</p>
        <p>Movie Name</p>
      </div>
      <p>05:40</p>
      <FaPlayCircle id = "song-card-play-button" />
      <FaChartSimple />
      <FaPlus />
    </section>
  );
};

export default SongMiniCard;
