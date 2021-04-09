import React, { useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./components/HomeSceen/Index";
import SearchScreen from "./components/Search/SearchScreen";
import {searchData} from "./api/googleSearch";
import {recognition} from "./api/voiceRecognition";
import VoiceSearch from "./components/VoiceSearch/VoiceSearch";
const App = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [googleData, setGoogleData] = useState({});
  const [voiceSearch, setVoiceSearch] = useState(false);
  const setSearch = async (term) =>{
    setSearchTerm(term);
    const data = await searchData(term);
    setGoogleData(data);
    // console.log(data);
    history.push("/search");
  };

  const openVoiceSearch = () => {
    setVoiceSearch(true);
    recognition.start();
    recognition.onresult = (event) => {
      const { transcript } = event.results[0][0];
      if(transcript !== null || transcript !=="" || transcript !== " "){
        setVoiceSearch(false);
        setSearch(transcript);
      } else {
        setVoiceSearch(false);
        alert("Please try again.....")
      }
    };
  };
  const closeVoiceSearch = () => {
    setVoiceSearch(false);
    recognition.stop();
  }
  return (
      <div className="App">
        {
          voiceSearch?(<VoiceSearch closeVoiceSearch={closeVoiceSearch}/>):null
        }
        
        <Switch>
          <Route exact path={"/"} component={() => <Index setSearch={setSearch} openVoiceSearch={openVoiceSearch}/>} />
          {
            searchTerm !== ""?(
                <Route
                exact
                path={"/search"}
                component={() => (
                <SearchScreen setSearch={setSearch} searchTerm={searchTerm} googleData={googleData} openVoiceSearch={openVoiceSearch}/>)}
              />
            ): null
          }
          
          <Redirect to="/" />
        </Switch>
      </div>

  );
};

export default App;
