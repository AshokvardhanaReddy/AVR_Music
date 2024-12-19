

import "./SlidingCarousel.css";
import music_image from "../../assests/music_image.png";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import React from 'react'

import SongTitleCard from "../SongTitleCard/SongTitleCard";

const SlidingCarousel = ({title}) => {
  
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
      <SongTitleCard/>
      <SongTitleCard/>
      <SongTitleCard/>
      <SongTitleCard/>
      <SongTitleCard/>
      <SongTitleCard/>
      <SongTitleCard/>
      <SongTitleCard/>
      <SongTitleCard/>
      <SongTitleCard/>
      <SongTitleCard/>
      <SongTitleCard/>
      <SongTitleCard/>
    </div>
  </section>
  )
}

export default SlidingCarousel
