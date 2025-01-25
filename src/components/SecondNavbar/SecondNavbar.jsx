
import "./SecondNavbar.css";

import {useContext} from 'react'
import { NavLink } from "react-router-dom";

import { FaUser, FaFolderOpen, FaMusic } from "react-icons/fa6";
import { FaHome, FaHeart  } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";

import { StoreContext } from "../../context/StoreContext";

const SecondNavbar = () => {

  const {setPage} =  useContext(StoreContext);
 
  return (
    <section className = "second-navbar-container" >
    <div className = "second-navbar-links" >
      <NavLink to = "/" className = {({isActive}) => (isActive ? "active" : "")} onClick = {() => setPage("home") } >
        <i><FaHome/></i>
        <p>Home</p>
      </NavLink>

      <NavLink to = "/albums" className = {({isActive}) => (isActive ? "active" : "")} onClick = {() => setPage("albums") } >
        <i><FaFolderOpen/></i>
        <p>Albums</p>
      </NavLink>

      <NavLink to = "/artists" className = {({isActive}) => (isActive ? "active" : "")} onClick = {() => setPage("artists") } >
        <i><FaUser/></i>
        <p>Artists</p>
      </NavLink>

       <NavLink to = "/genres" className = {({isActive}) => (isActive ? "active" : "")} onClick = {() => setPage("genres") } >
        <i><FaMusic/></i>
        <p>Genres</p>
       </NavLink> 

        <NavLink to = "/recent-play" className = {({isActive}) => (isActive ? "active" : "")} onClick = {() => setPage("recents") } >
          <i><IoTimer/></i>
          <p>Recents</p>
        </NavLink>

        <NavLink to = "/favourites" className = {({isActive}) => (isActive ? "active" : "")} onClick = {() => setPage("favourites") } >
          <i><FaHeart/></i>
          <p>Favourites</p>
        </NavLink>
    </div>
    </section>
  )
}

export default SecondNavbar;
