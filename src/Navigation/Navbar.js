import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="vv">
        <div className="bb">
  <h1>Foodie</h1>
        </div>
        <div>
      <nav>
        <ul>
          <button>Register Now</button>
          <li>
          <Link to="/Login">Login </Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <a href="#">Partners </a>
          </li>
          <li>
            <a href="#">Blog </a>
          </li>
          <li>
            <a href="#">Pricing </a>
          </li>
          <li>
            <a href="#">Online Ordering</a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}
export default Navbar;
