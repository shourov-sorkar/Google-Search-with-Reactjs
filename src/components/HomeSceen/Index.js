import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Foooter/Footer";
const  Index = ( { setSearch,openVoiceSearch } ) => {
  return (
    <div>
      <NavBar />
      <Home setSearch={setSearch} openVoiceSearch={openVoiceSearch}/>
      <Footer />
    </div>
  );
}

export default Index;
