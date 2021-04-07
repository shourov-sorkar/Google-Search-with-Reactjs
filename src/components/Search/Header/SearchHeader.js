import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./SearchHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import MicIcon from "@material-ui/icons/Mic";
import { IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
const SearchHeader = ({ searchTerm }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText(searchTerm);
  }, [searchTerm]);
  return (
    <div className="col-md-12 py-3 d-flex align-items-center">
      <Link to={"/"} className="ml-5">
        <img src={logo} alt="logo" height="35" />
      </Link>
      <div className="col-md-6 d-flex align-items-center border ml-3 justify-content-between formdiv2">
        <form style={{ width: "100%" }}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="form-control search-box-input border-0 mr-2"
          />
        </form>
        {searchText ? (
          <IconButton>
            <CloseIcon />
          </IconButton>
        ) : null}
        <IconButton>
          <MicIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      <ul className="nav ml-auto ">
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
    </div>
  );
};

export default SearchHeader;
