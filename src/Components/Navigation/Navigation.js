import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand">Navbar</Link>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact
                    activeClassName=""
                    activeStyle={{color: "royalblue"}}
                    className="nav-link" aria-current="page" 
                    to="/">Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact
                    activeClassName=""
                    activeStyle={{color: "royalblue"}}
                    className="nav-link" 
                     to={{
                          pathname: "/posts",
                          hash: "#posts",
                          search: "Only6Posts" 
                      }}>Posts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
