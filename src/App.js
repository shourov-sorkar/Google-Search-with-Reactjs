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
import {searchData} from "./api/googleSearch"
const App = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [googleData, setGoogleData] = useState({});
  const setSearch = async (term) =>{
    setSearchTerm(term);
    const data = await searchData(term);
    setGoogleData(data);
    // console.log(data);
    history.push("/search");
  }
  return (

      <div className="App">
        <Switch>
          <Route exact path={"/"} component={() => <Index setSearch={setSearch}/>} />
          <Route
            exact
            path={"/search"}
            component={() => <SearchScreen searchTerm={searchTerm} googleData={googleData}/>}
          />
          <Redirect to="/" />
        </Switch>
      </div>

  );
};

export default App;
