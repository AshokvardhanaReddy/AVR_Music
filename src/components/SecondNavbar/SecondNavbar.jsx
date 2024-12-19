
import "./SecondNavbar.css";

import React from 'react'
import { NavLink } from "react-router-dom";

import { FaUser, FaFolderOpen, FaMusic } from "react-icons/fa6";
import { FaHome, FaHeart  } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";

import HomePage from "../../pages/HomePage/HomePage";

const SecondNavbar = () => {
  return (
    <section className = "second-navbar-container" >
    <div className = "second-navbar-links" >
      <NavLink to = "/" className = {({isActive}) => (isActive ? "active" : "")} >
        <i><FaHome/></i>
        <p>Home</p>
      </NavLink>

      <NavLink to = "/albums" className = {({isActive}) => (isActive ? "active" : "")} >
        <i><FaFolderOpen/></i>
        <p>Albums</p>
      </NavLink>

      <NavLink to = "/artists" className = {({isActive}) => (isActive ? "active" : "")} >
        <i><FaUser/></i>
        <p>Artists</p>
      </NavLink>

       <NavLink to = "/genres" className = {({isActive}) => (isActive ? "active" : "")} >
        <i><FaMusic/></i>
        <p>Genres</p>
       </NavLink> 

        <NavLink to = "/recent-play" className = {({isActive}) => (isActive ? "active" : "")} >
          <i><IoTimer/></i>
          <p>Recents</p>
        </NavLink>

        <NavLink to = "/favourites" className = {({isActive}) => (isActive ? "active" : "")} >
          <i><FaHeart/></i>
          <p>Favourites</p>
        </NavLink>
    </div>
    <div className = "second-navbar-content" >
      
       <HomePage/>

    </div>
    </section>
  )
}

export default SecondNavbar;
