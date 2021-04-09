import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import MicIcon from "@material-ui/icons/Mic";
import { IconButton } from "@material-ui/core";
import logo from "../Assets/logo.png";
import "./Home.css";
const Home = ({ setSearch,openVoiceSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(input) ||
      /^[a-zA-Z0-9]+[" "]/.test(input)
    ) {
      setSearch(input);   
    }
  };
  const handleButton = () => {
    if (                                                                                                                                                                                                                
      /^[a-zA-Z0-9].*/.test(input) ||
      /^[a-zA-Z0-9]+[" "]/.test(input)
    ) {
      setSearch(input);   
    }
  };
const clearInput = () => {
  setInput('');
}
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 d-flex flex-column align-items-center justify-content-center">
            <img
              src={logo}
              className="mx-auto my-3"
              alt="google logo"
            />
            <div className="formDiv col-md-6 my-3 mx-auto d-flex align-items-center justify-content-between">
              <IconButton>
                <SearchIcon />
              </IconButton>
              <form className="search-box" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control search-box-input border-0"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
              </form>
              {input ? (
                <IconButton onClick={clearInput}>
                  <CloseIcon className="close-icon" />
                </IconButton>
              ) : null}
              <IconButton onClick={() => openVoiceSearch()}>
                <MicIcon />
              </IconButton>
            </div>
            <div className="btns mx-auto text-center">
              <button
                type="button"
                className="btn btn-default mx-1 search-button"
                onClick={handleButton}
              >
                The BitSearch
              </button>
              <button
                type="button"
                className="btn btn-default mx-1 search-button"
              >
                I'm Feeling Lucky
              </button>
            </div>
            <div className="mx-auto text-center mt-4">
              <span className="google-language">
                The BitCode offered in: <a href="/">বাংলা</a>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
