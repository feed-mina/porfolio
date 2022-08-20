import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Stylesheet.css";

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
class Services extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1
            style={{
              color: "purple"
            }}
          >
            Services
            <p className="contact-separator"></p>
          </h1>
          <OwlCarousel
            className="slider-items owl-carousel"
            {...options}
            autoplay={true}
          >
            <div class="item " className="service-card">
              <i class="fab fa-html5"></i>
              <h3>Static Web Pages</h3>
              <p>(HTML5 )</p>
            </div>
            <div class="item " className="service-card">
              <i class="fab fa-css3-alt"></i>
              <h3>Web Designing</h3>
              <p>(CSS3 )</p>
            </div>
            <div class="item " className="service-card">
              <i class="fab fa-js-square"></i>
              <h3>Javascript</h3>
              <p>(ES5 ES6)</p>
            </div>
            <div class="item " className="service-card">
              <i class="fab fa-react"></i>
              <h3>Attractive UI</h3>
              <p>(REACT JS)</p>
            </div>
            <div class="item " className="service-card">
              <i class="fab fa-php"></i>
              <h3>Dynamic Websites</h3>
              <p>(PHP)</p>
            </div>
            <div class="item " className="service-card">
              <i class="fas fa-bezier-curve"></i>
              <h3>Graphic Designing</h3>
              <p>
                (ADOBE PHOTOSHOP <br />
                ADOBE ILLUSTRATOR)
              </p>
            </div>
            <div class="item " className="service-card">
              <i class="fab fa-bootstrap"></i>
              <h3>Responsive Websites</h3>
              <p>(BOOTSTRAP)</p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Services;
