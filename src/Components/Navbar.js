import React, { useState } from "react";
import "./Stylesheet.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Me from "./Me";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Portfolio from "./Portfolio";

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
                to="/about"
                style={{
                  color: "black",
                  fontSize: "20px",
                  textDecoration: "none"
                }}
              >
                About
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
              Yerin's Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                style={{
                  color: "black",
                  fontSize: "20px",
                  textDecoration: "none"
                }}
              >
                display
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{
                  color: "black",
                  fontSize: "20px",
                  textDecoration: "none"
                }}
              >
                Contact
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
              <i onClick={() => setOpen(!open)} class="fas fa-bars "></i>
            </a>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Me />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
