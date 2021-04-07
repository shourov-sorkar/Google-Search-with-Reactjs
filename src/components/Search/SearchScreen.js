import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header/Header"
const SearchScreen = ({ searchTerm, googleData }) => {
  const history = useHistory();
  console.log(googleData);
  useEffect(() => {
    if (searchTerm === "") {
      history.push("/");
    }
  }, [searchTerm]);

  return (
    <>
    <Header searchTerm={searchTerm}/>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Welcome to the Search Page : {searchTerm}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
