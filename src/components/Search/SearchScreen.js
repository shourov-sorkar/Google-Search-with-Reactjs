import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const SearchScreen = ({ searchTerm, googleData  }) => {
  const history = useHistory();
  console.log(googleData);
  useEffect(() => {
    if (searchTerm === "") {
      history.push("/");
    }
  }, [searchTerm]);

 return(
<div>
  <h1>Welcome to the Search Page : {searchTerm}</h1>
</div>
 );
};

export default SearchScreen;
