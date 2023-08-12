import React from "react";
import Friendsgiving from "../assets/gallery/friendsgiving.jpeg";
import Ramadan from "../assets/gallery/ramadan.jpeg";
import Startup from "../assets/gallery/startup.jpeg";
import TikTok from "../assets/gallery/tiktok.jpeg";
import "./prevEvents.style.css";

const PrevEvents = (props) => {
  return (
    <div className="event-container">
      <h1>{props.title}</h1>
      <div className="events">
        <div className="events-title">
          <p>Startup</p>
          <img src={Startup} alt="no img" style={{ width: "100%" }} />
        </div>
        <div className="events-title">
          <p>Ramadan</p>
          <img src={Ramadan} alt="no img" style={{ width: "100%" }} />
        </div>
        <div className="events-title">
          <p>TikTok</p>
          <img src={TikTok} alt="no img" style={{ width: "100%" }} />
        </div>
        <div className="events-title">
          <p>Friendsgiving</p>
          <img src={Friendsgiving} alt="no img" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default PrevEvents;
