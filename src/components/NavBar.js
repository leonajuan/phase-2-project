import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/food">Food</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/restaurants">Restaurants</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;