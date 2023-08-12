import React from "react";
import heroImg from "../assets/gallery/logo.jpeg";
import "./home.style.css";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="logo-container">
      <img className="logo-img" alt="heroImg" src={heroImg} />
      <div className="home__buttons">
        <Link
          activeClass="active"
          to={"contact"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="btn">Register now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
