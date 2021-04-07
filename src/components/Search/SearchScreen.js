import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header/Header";
import SearchData from "./searchData/SearchData";
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
          <SearchData googleData={googleData}/>
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
