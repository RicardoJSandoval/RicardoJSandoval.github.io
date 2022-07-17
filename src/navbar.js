import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">Ricardo Sandoval</Link>
      <ul>
        <li>
          <Link to="/research">Research</Link>
        </li>
        <li>
          <Link to="/photography">Photography</Link>
        </li>
      </ul>
    </nav>
  );
}

