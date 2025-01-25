

import "./ThirdCarousel.module.css";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

// import React, { useEffect, useState } from 'react'

import SongTitleCard from "../SongTitleCard/SongTitleCard";

const ThirdCarousel = ({title}) => {

  // const [scrollValue, setScrollValue] = useState(0)

  const handleScrollLeft = () => {
    document.getElementById("third-carousel-content-scroll").scrollLeft -= 300;
  };

  const handleScrollRight = () => {
    document.getElementById("third-carousel-content-scroll").scrollLeft += 300;
  };


  return (
    <section className = "third-carousel-container" >
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
    <div className="carousel-content " id="third-carousel-content-scroll">
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

export default ThirdCarousel;
