import React from "react";
import "./VoiceSearch.css";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MicIcon from "@material-ui/icons/Mic";
const VoiceSearch = ({ closeVoiceSearch }) => {
  return (
    <div
      className="container-fluid d-flex align-items-center 
        justify-content-center 
          voiceModal"
    >
      <div className="col-md-6  voice-search">
        <div
          className="w-100 d-flex align-items-center 
                 justify-content-between py-2 "
        >
          <h3></h3>
          <IconButton onClick={() => closeVoiceSearch()}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="w-100 h-50 d-flex align-items-center justify-content-center py-2">
          <div className="col-md-3 micIcon d-flex align-items-center justify-content-center  mt-5">
            <IconButton>
              <MicIcon className="voiceicon" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VoiceSearch;
