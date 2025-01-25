

import "./SlidingCarousel.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import SongTitleCard from "../SongTitleCard/SongTitleCard";
import { StoreContext } from "../../context/StoreContext";

import React, { useContext, useEffect} from 'react'

const SlidingCarousel = ({title, trendingList}) => {
// console.log(trendingList);
  const handleScrollLeft = () => {
    document.getElementById("carousel-content-scroll").scrollLeft -= 300;
  };

  const handleScrollRight = () => {
    document.getElementById("carousel-content-scroll").scrollLeft += 300;
  };

  return (
    <section className = "carousel-container" >
    <div className="carousel-heading">
      <p>{title}</p>
      <div className="carousel-icons-div">
        <FaLongArrowAltLeft
          className="arrow-icons"
          onClick={handleScrollLeft}
        />
        <FaLongArrowAltRight
          className="arrow-icons"
          onClick={handleScrollRight}
        />
      </div>
    </div>
    <div className="carousel-content " id="carousel-content-scroll">

{trendingList.map((album) => <SongTitleCard key = {album.id} song_id = {album.album.id} url = {album.href} image = {album.album.images[0].url} name = {album.name} subName = {album.total_tracks} type = {album.type} />)}
    </div>
  </section>
  )
}

export default SlidingCarousel
