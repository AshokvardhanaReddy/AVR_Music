import "./MainMusicPlayer.css";
import song_image from "../../assests/music_image.png";
import dummy_music from "../../assests/dummy_music.mp3";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  FaRegHeart,
  FaStepBackward,
  FaStepForward,
  FaPauseCircle,
  FaPlayCircle,
  FaPlus,
} from "react-icons/fa";
import { LuRepeat, LuRepeat1 } from "react-icons/lu";
import { FaChartSimple } from "react-icons/fa6";

import { StoreContext } from "../../context/StoreContext";

const MainMusicPlayer = ({ songName, songAlbum }) => {
  const { isPlaying, setIsPlaying, currentSong} = useContext(StoreContext);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function timeInSeconds(time) {
    const mins = Math.floor((time % 3600) / 60); // Get remaining minutes
    const secs = Math.floor(time % 60); // Get remaining seconds
    return `${mins.toString().padStart(2, "0")} : ${secs
      .toString()
      .padStart(2, "0")}`;
  }

  const handlePlayMusic = () => {
    setIsPlaying((prevState) => !prevState);
  };
  useEffect(() => {
    console.log(isPlaying);
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    setCurrentTime(Math.floor(audioRef.current.currentTime));
    if (audioRef.current.currentTime === audioRef.current.duration) {
      setIsPlaying(false);
    }
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };
  return (
    <>
      <audio
        ref={audioRef}
        className="original-music-player"
        controls
        src={currentSong}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>
      <section className="main-mp-container">
        <div className="main-mp-div">
          <div className="main-mp-song-primary">
            <img src={song_image} alt="song image" />
            <div className="main-mp-song-name">
              <p>Song Partial Name</p>
              <p>Movie Name</p>
            </div>
          </div>
          <div className="main-mp-song-controls">
            <FaRegHeart className="mp-icons" id="mp-favourite" />
            <FaStepBackward className="mp-icons" />
            {isPlaying ? (
              <FaPauseCircle
                onClick={handlePlayMusic}
                className="mp-icons"
                id="mp-play-button"
              />
            ) : (
              <FaPlayCircle
                onClick={handlePlayMusic}
                className="mp-icons"
                id="mp-play-button"
              />
            )}
            <FaStepForward className="mp-icons" />
            <LuRepeat className="mp-icons" id="mp-loop" />
          </div>
          <div className="main-mp-song-secondary">
            <b>
              {timeInSeconds(currentTime)}{" "}
              <b className="mp-song-end-time">/ {timeInSeconds(duration)}</b>{" "}
            </b>
            <FaChartSimple className="mp-icons" id="mp-chart" />
            <FaPlus className="mp-icons" id="mp-add" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainMusicPlayer;
