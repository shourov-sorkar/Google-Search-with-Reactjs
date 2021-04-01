import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import MicIcon from "@material-ui/icons/Mic";
import { IconButton } from "@material-ui/core";
import "./Home.css";
const Home = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 d-flex flex-column align-items-center justify-content-center">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              className="mx-auto my-3"
              alt="google logo"
            />
            <div className="formDiv col-md-6 my-3 mx-auto d-flex align-items-center justify-content-between">
              <IconButton>
                <SearchIcon />
              </IconButton>
              <form className="search-box">
                <input
                  type="text"
                  className="form-control search-box-input border-0"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
              </form>
              {input ? (
                <IconButton>
                  <CloseIcon className="close-icon" />
                </IconButton>
              ) : null}
              <IconButton>
                <MicIcon />
              </IconButton>
            </div>
            <div className="btns mx-auto text-center">
              <button
                type="button"
                className="btn btn-default mx-1 search-button"
              >
                Google Search
              </button>
              <button
                type="button"
                className="btn btn-default mx-1 search-button"
              >
                I'm Feeling Lucky
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
