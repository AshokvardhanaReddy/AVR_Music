

import "./MPHomeLayout.css";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import SecondNavbar from "../../components/SecondNavbar/SecondNavbar";

import {useContext} from 'react'
import MainMusicPlayer from "../../components/MainMusicPlayer/MainMusicPlayer";
import HomePage from "../HomePage/HomePage";
import AlbumsPage from "../AlbumsPage/AlbumsPage";
import ArtistsPage from "../ArtistsPage/ArtistsPage";
import GenresPage from "../GenresPage/GenresPage";
import FavouritesPage from "../FavouritesPage/FavouritesPage";
// import ContentPageLayout from "../../components/ContentPageLayout/ContentPageLayout"

import { StoreContext } from "../../context/StoreContext";

const MPHomeLayout = () => {

  const {page} = useContext(StoreContext);


  return (
    <section className="mp-layout-container" >
        <div className="mp-layout-navbar" ><MainNavbar/></div>
        <div className="mp-layout-sidemenu" > <SecondNavbar/> </div>
        <div className="mp-layout-content" > {page === "home" ? <HomePage/> : page === "albums" ? <AlbumsPage/> : page === "artists" ? <ArtistsPage/> : page === "genres" ? <GenresPage/> : page === "favourites" ? <FavouritesPage/> : "" } </div>
        <div className="mp-layout-player" > <MainMusicPlayer/> </div>
    </section>
  )
}

export default MPHomeLayout
