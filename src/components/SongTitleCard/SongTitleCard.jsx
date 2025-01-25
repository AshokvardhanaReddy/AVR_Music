

import "./SongTitleCard.css";
import { StoreContext } from "../../context/StoreContext";

import {useContext, useEffect, useState} from 'react'

import song_image from "../../assests/music_image.png";

const SongTitleCard = ({image = song_image,song_id, url, name, subName, type}) => {
  const [song, setSong] = useState()
  const {spotifyToken, isPlaying, setIsPlaying, handlePlayMusic} = useContext(StoreContext);
    // console.log(song_id, url)

  const handleSongId = () => {
    setIsPlaying((prevState) => !prevState);
  }


useEffect(() => {
  const data = {
    context_uri: url,
    offset: {
      position: 5,
    },
    position_ms: 0,
  };

    fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${spotifyToken}`,
      'Content-Type': 'pplication/json'
    },
    body: JSON.stringify(data),
  }).then((res) => res.json()).then((data) => console.log(data))
}, [])

  return (
    <div className = "song-title-card-container" onClick={handleSongId} >
     <img src = {image} alt = "Song" />
     <div>
        <p className = "song-title-name" >{name}</p>
        <p className = "song-movie-name" >Movie Name</p>
     </div>
     <audio controls src = {song} ></audio>
    </div>
  )
}

export default SongTitleCard
