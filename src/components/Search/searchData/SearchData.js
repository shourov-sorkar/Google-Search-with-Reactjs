import React from "react";
import Data from "./Data";
const SearchData = ({ googleData }) => {
  return (
    <div className="col-md-12">
      <p className="small text-dark p-2">
        About {googleData?.searchInformation.formattedTotalResults} results (
        {googleData?.searchInformation.searchTime} seconds)
      </p>

      {googleData?.items.map((data, id) => (
        <Data data={data} key={id} />
      ))}
    </div>
  );
};

export default SearchData;
