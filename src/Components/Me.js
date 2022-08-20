import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Typical from "react-typical";
import myPic from "./Assests/Pic.jpg";
function Me() {
  return (
    <Router>
      <div>
        <div className="container">
          <div className="intro-section">
            <h1>I'm Min yerin</h1>
            <p>
              <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                  "Web-Developer",
                  2000,
                  "Web-Frontend",
                  2000
                ]}
              />
            </p>
            <p className="separator"></p>
            <a
              href="https://github.com/feed-mina"
              target="_blank"
              className="iconBtn"
            >
              <i class="fab fa-github"></i>
            </a>
            
          </div>
          <div className="image-section">
            <img src={myPic} />
          </div>
        </div>
      </div>
    </Router>
  );
}
export default Me;
