import "./SongMiniCard.css";
import {
  // FaRegHeart,
  // FaStepBackward,
  // FaStepForward,
  // FaPauseCircle,
  FaPlayCircle,
  FaPlus,
} from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";

import React from "react";

import song_image from "../../assests/music_image.png";

const SongMiniCard = ({number, songName, movieName, image}) => {
  return (
    <section className="song-card-container">
      <div className="song-card-movie-details">
        <p className="song-card-number">{number}</p>
        <img src={image} alt="Song " />
        <div className="song-card-movie-div">
          <p className="song-card-song-name">Song Partial Name</p>
          <p>{movieName}</p>
        </div>
      </div>

      <div className="song-card-song-icons">
        <FaPlayCircle id="song-card-play-button" />
        <p>05:40</p>
        <FaChartSimple />
        <FaPlus />
      </div>
    </section>
  );
};

export default SongMiniCard;
