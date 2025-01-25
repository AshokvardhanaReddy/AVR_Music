import { createContext, useEffect, useState } from "react";
import dummySong from "../assests/dummy_music.mp3"
export const StoreContext = createContext(null);

const CLIENT_ID = "77df74fa1476427799e7b5265310c427";
const CLIENT_SECRET = "184ffaf56c954d05a65e03c38e7520cd";

const StoreContextProvider = (props) => {

    const [spotifyToken, setSpotifyToken] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(dummySong)


  const [token, setToken] = useState(false);
  const [page, setPage] = useState("home");
  const [topAlbums, setTopAlbums] = useState([]);
  const [trendingList, setTrendingList] = useState([]);
  const [playList, setPlayList] = useState(null);

  // const handlePlayMusic = () => {
  //   setIsPlaying((prevState) => !prevState);
  //   // if (!isPlaying) {
  //   //   audioRef.current.play();
  //   //   console.log(audioRef);
  //   //   setIsPlaying((prevState) => !prevState);
  //   // } else {
  //   //   audioRef.current.pause();
  //   //   setIsPlaying((prevState) => !prevState);
  //   // }
  // };

  async function fetchToken(){
  await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      })
        .then((res) => res.json())
        .then((data) => setSpotifyToken(data.access_token));
  }

  useEffect(() => {
    fetchToken();
  },[]);

  const contextValue = { spotifyToken, isPlaying, setIsPlaying,currentSong, setCurrentSong, token, page, setPage, playList,trendingList, setTrendingList, topAlbums, setTopAlbums };
  return (
    <>
      <StoreContext.Provider value={contextValue}>
        {props.children}
      </StoreContext.Provider>
    </>
  );
};

export default StoreContextProvider;
