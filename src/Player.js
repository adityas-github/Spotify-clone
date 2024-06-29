import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar.js";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}
// 131 22

export default Player;
