import React, { useState } from "react";
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Me from "./Me";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Main from "../pages/main";
import Question from "../pages/question";
import QuestionResult from "../pages/QuestionResult";
import Story from "../pages/Story";
import StoryResult from '../pages/StoryResult';
import Storystart from "../pages/Storystart";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div>
        <nav className="header ">
          <ul
            className="navLinks"
            style={{ transform: open ? "translateX(0px)" : "" }}
          >
            <li>
              <Link
                to="/main"
                style={{
                  color: "black",
                  fontSize: "20px",
                  textDecoration: "none"
                }}
              >
                main
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                style={{
                  color: "black",
                  fontSize: "20px",
                  textDecoration: "none"
                }}
              >
                Services
              </Link>
            </li>
            <li className="mainTab hidden ">
              <Link
                to="/"
                style={{
                  color: "purple",
                  fontSize: "50px",
                  textDecoration: "none"
                }}
              >
              밥꾹 테스트 nav
              </Link>
            </li>
            <li>
              <Link
                to="/question"
                style={{
                  color: "black",
                  fontSize: "20px",
                  textDecoration: "none"
                }}
              >
                question
              </Link>
            </li>
            <li>
              <Link
                to="/story"
                style={{
                  color: "black",
                  fontSize: "20px",
                  textDecoration: "none"
                }}
              >
                story
              </Link>
            </li>
          </ul>
          <div className="navIcon">
            <h2 className="mainTab  ">
              <Link
                to="/"
                style={{
                  color: "purple",
                  fontSize: "50px",
                  textDecoration: "none"
                }}
              >
                Me.
              </Link>
            </h2>
            <a title="cick again to close">
              <i onClick={() => setOpen(!open)} className="fas fa-bars "></i>
            </a>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" element={<Main/>}/>
     
          {/* <Route exact path="/question" element={  <Question/>}/> */}
        
          <Route exact path="/story" element={<Story/>}/>
          
          <Route exact path="/stroyresult" element={<StoryResult/>}/>
  
          <Route exact path="/questionresult" element={   <QuestionResult/>}/>
        
          <Route exact path="/start" element={ <Storystart/>}/>

        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
