import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { RiVideoLine, RiMapPin2Line } from "react-icons/ri";
import { BiImage, BiNews } from "react-icons/bi";
import { MdMoreVert } from "react-icons/md";

import "./SearchSubHeader.css";
const SearchSubHeader = () => {
  return (
    <div className="container-fluid py-2 border-bottom">
      <div className="col-md-6 sub_header_menu ml-5">
        <ul className="nav">
          <li className="nav-item">
            <Link
              to={"/"}
              className="d-flex align-items-center nav-link justify-content-between"
            >
              <SearchIcon className="sub_header_icon" />
              All
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/"}
              className="d-flex align-items-center nav-link justify-content-between"
            >
              <BiImage className="sub_header_icon" /> Images
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/"}
              className="d-flex align-items-center nav-link justify-content-between"
            >
              <RiVideoLine className="sub_header_icon" />
              Videos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/"}
              className="d-flex align-items-center nav-link justify-content-between"
            >
              <BiNews className="sub_header_icon" />
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/"}
              className="d-flex align-items-center nav-link justify-content-between"
            >
              <RiMapPin2Line className="sub_header_icon" />
              Maps
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/"}
              className="d-flex align-items-center nav-link justify-content-between"
            >
              <MdMoreVert className="sub_header_icon" />
              More
            </Link>
          </li>
          <ul className="nav header_sub_right_menu mr-auto">
            <li className="nav-item">
              <Link
                to={"/"}
                className="d-flex align-items-center nav-link justify-content-between"
              >
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/"}
                className="d-flex align-items-center nav-link justify-content-between"
              >
                Tools
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default SearchSubHeader;
