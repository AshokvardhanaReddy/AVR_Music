

import SlidingCarousel from "../../components/SlidingCarousel/SlidingCarousel";
import "./HomePage.css";

import React from 'react'

const HomePage = () => {
  return (
    <section>
      <SlidingCarousel title = "Trending Now" />
      <SlidingCarousel title = "Top Albums" />
      <SlidingCarousel title = "Top Artists" />
    </section>
  )
}

export default HomePage
