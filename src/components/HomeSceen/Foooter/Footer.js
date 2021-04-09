import React, { useEffect, useState } from "react";
import "./Footer.css";
import { GoPrimitiveDot } from 'react-icons/go';

const Footer = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch("http://ip-api.com/json/")
      .then((res) => res.json())
      .then((response) => {
        setUserData(response);
        console.log("Country is : ", response);
      })
      .catch((data, status) => {
        console.log("Request failed:", data);
      });
  }, []);

  return (
    <div className="footer">
    <div className="container footer">
      <div className="row current-location">
        <p className="my-2 mx-auto">
          <GoPrimitiveDot className="active"/> {userData.city}, {userData.country}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
