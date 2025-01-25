import "./ContentPageLayout.css";

import React from "react";
import SongMiniCard from "../SongMiniCard/SongMiniCard";
// import MusicPlayer from "../MusicPlayer/MusicPlayer";
import SlidingCarousel from "../SlidingCarousel/SlidingCarousel";
import SecondCarousel from "../SecondCarousel/SecondCarousel";
import ThirdCarousel from "../ThirdCarousel/ThirdCarousel";

const ContentPageLayout = ({ firstCaro, secondCaro, thirdCaro, songsList, trendingList }) => {
  // const playList = songsList === null ? [] : songsList.playlists.items 
  const playList = []
// console.log(songsList)
  return (
    <section className="page-layout-container">
      <div className="page-layout-primary">
        <SlidingCarousel title={firstCaro} trendingList = {trendingList} />
        <SecondCarousel title={secondCaro} songList = {songsList} />
        <ThirdCarousel title={thirdCaro} />
      </div>
      <div className="page-layout-secondary">
        {playList.map((song, index) => (
          <SongMiniCard />
        ))}
      </div>
      <div className="page-layout-music-player"> </div>
    </section>
  );
};

export default ContentPageLayout;
