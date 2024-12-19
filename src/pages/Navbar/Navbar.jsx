
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import SecondNavbar from "../../components/SecondNavbar/SecondNavbar";
import "./Navbar.css";

import React from 'react'

const Navbar = () => {
  return (
    <section className = "navbar-container" >
     <MainNavbar/>
     <SecondNavbar/>
    </section>
  )
}

export default Navbar
