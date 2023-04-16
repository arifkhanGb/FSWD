import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import vg from "../assets/boystdy.png";


const Header = () => {
  return (
    <nav>
      <img src={vg} alt="headerImg" id="tableImg" />
      <h1>UPSC With Us</h1>
      
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/Services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;