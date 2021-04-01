import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, IconButton } from "@material-ui/core";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="col-md-12">
      <nav className="navbar">
        <ul className="nav ml-auto d-flex align-items-center pl-2">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Gmail
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Images
            </a>
          </li>
          <li className="nav-item">
            <IconButton>
              <AppsIcon className="apps-icon" />
            </IconButton>
          </li>
          <li className="nav-item">
            <IconButton>
              <Avatar className="avatar" />
            </IconButton>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
