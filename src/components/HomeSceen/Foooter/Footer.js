import React, { useEffect, useState } from "react";
import "./Footer.css";

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
      <div className="row current-location">
        <p className="ml-5 my-2">
          {userData.city}, {userData.country}
        </p>
      </div>
      <div className="row">
        <div className="col sm-6 md-6 lg-6">
          <div className="footer-down-right ml-5">
            <ul className="w-100">
              <li className="footer-item-start">
                <a href="/">About</a>
              </li>
              <li className="footer-item">
                <a href="/">Advertising</a>
              </li>
              <li className="footer-item">
                <a href="/">Business</a>
              </li>
              <li className="footer-item">
                <a href="/">How Search works</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col sm-6 md-6 lg-6">
          <div className="footer-down-right ">
            <ul className="w-100">
              <li className="footer-item">
                <a href="/">Privacy</a>
              </li>
              <li className="footer-item">
                <a href="/">Terms</a>
              </li>
              <li className="footer-item">
                <a href="/">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
