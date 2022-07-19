import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/Event">Event</Link>
      </li>
      <li>
        <Link to="/Feedback">Feedback</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </div>
  );
};

export default Nav;
