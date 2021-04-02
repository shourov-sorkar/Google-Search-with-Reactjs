import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./components/HomeSceen/Index";
import SearchScreen from "./components/Search/SearchScreen";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={"/"} component={() => <Index />} />
          <Route exact path={"/search"} component={() => <SearchScreen />} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
