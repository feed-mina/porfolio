import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import oracleImage from "./Assests/oracleImage.jpg";
import one from "./Assests/one.jpg";
import two from "./Assests/two.jpg";
import three from "./Assests/three.jpg";
import four from "./Assests/four.jpg";
 

//Owl Carousel Settings
const options = {
  loop: true,
  margin: 30,
  responsiveClass: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    600: {
      items: 1
    },
    700: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
};
class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1
            style={{
              color: "purple"
            }}
          >
            Portfolio
            <p className="contact-separator"></p>
          </h1>
          <OwlCarousel
            className="slider-items owl-carousel"
            {...options}
            autoplay={true}
          >
          
            <div className="item">
              <a href="https://youtu.be/KagSYDK1y5U" target="_blank">
                <div className="portfolio-cards">
                  <div>
                    <img src={one} />
                  </div>
                  <div>
                    <p>
                    Youth community site <br />
                      (react.js , node-express)
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="item">
              <a href="https://www.youtube.com/watch?v=MnDKt44GFTw" target="_blank">
                <div className="portfolio-cards">
                  <div>
                    <img src={two} />
                  </div>
                  <div>
                    <p>
                      Gardening Website <span>Lavender fields</span>
                      <br />
                      (blender, unity)
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://www.youtube.com/watch?v=llLGjbvcIwY" target="_blank">
                <div className="portfolio-cards">
                  <div>
                    <img src={three} />
                  </div>
                  <div>
                    <p>
                      Hosipital month report
                      <br />
                      (HTML5, flask, jinja2, CSS3, BOOTSTRAP, JAVASCRIPT, JQUERY)
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://github.com/feed-mina/MIMO" target="_blank">
                <div className="portfolio-cards">
                  <div>
                    <img src={four} />
                  </div>
                  <div>
                    <p>
                      AI cosmetic web application
                      <br />
                      (React-js,java-spring,flask,python-tensorflow)
                    </p>
                  </div>
                </div>
              </a>
            </div>
           
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Portfolio;
