
import "./SecondCarousel.module.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import SongTitleCard from "../SongTitleCard/SongTitleCard";

const SecondCarousel = ({title, songList}) =>{

  const handleScrollLeft = () => {
    document.getElementById("second-carousel-content-scroll").scrollLeft -= 300;
  };

  const handleScrollRight = () => {
    document.getElementById("second-carousel-content-scroll").scrollLeft += 300;
  };

  return (
    <section className = "second-carousel-container" >
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
    <div className="carousel-content " id="second-carousel-content-scroll">
    {songList.map((album) => <SongTitleCard key = {album.id} image = {album.images[0].url} name = {album.name} subName = {album.total_tracks} type = {album.album_type} />)}
    </div>
  </section>
  )
}

export default SecondCarousel
