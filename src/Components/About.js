import React from "react";
import "./Stylesheet.css";
import { BrowserRouter as Router } from "react-router-dom";
import mina from "../Components/Assests/minaPortfolio.pdf";
import {
  DiPhotoshop,
  DiIllustrator,
  DiMysql,
  DiJqueryLogo,
  DiFirebase,
  DiCss3,
  DiHtml5,
  DiReact,
  DiJsBadge,
 
} from "react-icons/di";

import Tooltip from "react-simple-tooltip";

class About extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <div className="about-section">
              <h2
                style={{
                  textAlign: "left"
                }}
              >
                About Me
              </h2>
              <p className="separator"></p>
              <p className="paraTag">
                Being a <span>web-developer</span> and <span>code-teaching</span>
                 having knowledge of contemporary programming languages and hands-on experience of various{" "}
                <span>technologies</span> I'm working on my own academic
                projetcs and serving local and international clients for a
                prolonged period on different platforms with my expertise and
                skills. I've also served as a project manager for more than a
                year hance aquired sufficient managing skills as well.
              </p>
              <a href={mina} download target="_blank">
                <button className="btn">Download Resume</button>
              </a>
            </div>
            <div className="skill-section ">
              <div className="horizontal-line">
                <div className="vertical tag-1">
                  <p>
                    <Tooltip content="javascript">
                      <DiJsBadge className="skill-icon" />
                    </Tooltip>
                  </p>
                </div>

                <div className="vertical  tag-2">
                  <p>
                    <Tooltip content="html5">
                      <DiHtml5 className="skill-icon" />
                    </Tooltip>
                  </p>
                </div>

                <div className="vertical  tag-4">
                  <p>
                    <Tooltip content="photoshop">
                      <DiPhotoshop className="skill-icon" />
                    </Tooltip>
                  </p>
                </div>
                <div className="vertical  tag-3">
                  <p>
                    <Tooltip content="css3">
                      <DiCss3 className="skill-icon" />
                    </Tooltip>
                  </p>
                </div>
                <div className="vertical  tag-2">
                  <p>
                    <Tooltip content="reactjs">
                      <DiReact className="skill-icon" />
                    </Tooltip>
                  </p>
                </div>
                <div className="vertical  tag-1">
                  <p>
                    <Tooltip content="illustrator">
                      <DiIllustrator className="skill-icon" />
                    </Tooltip>
                  </p>
                </div>
                <div className="vertical  tag-2">
                  <p>
                    <Tooltip content="MySql">
                      <DiMysql className="skill-icon" />
                    </Tooltip>
                  </p>
                </div>
                <div className="vertical  tag-4">
                  <p>
                    <Tooltip content="jQuery">
                      <DiJqueryLogo className="skill-icon" />
                    </Tooltip>
                  </p>
                </div>
                <div className="vertical  tag-2">
                  <p>
                    <Tooltip content="firebase">
                      <DiFirebase className="skill-icon" />
                    </Tooltip>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default About;
