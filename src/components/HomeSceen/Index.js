import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Foooter/Footer";
const  Index = ( {setSearch} ) => {
  return (
    <div>
      <NavBar />
      <Home setSearch={setSearch}/>
      {/* <Footer /> */}
    </div>
  );
}

export default Index;
