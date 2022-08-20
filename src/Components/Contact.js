import React from "react";
import "./Stylesheet.css";

function Contact() {
  return (
    <div>
      <div className="container contact">
        <h1
          style={{
            color: "purple"
          }}
        >
          Contact
          <p className="contact-separator"></p>
        </h1>

        <div className="contact-section">
          <div className="cards">
            <i className="fas fa-mobile-alt"></i>
            <h3>Phone</h3>
            <p>(+82)10-4641-2537</p>
          </div>
        </div>
        <div className="contact-section">
          <div className="cards">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>myelin24m@gmail.com</p>
          </div>
        </div>
        <div className="contact-section">
          <div className="cards">
            <i className="fas fa-link"></i>
            <h3>Social Links</h3>
            <div className="social-links">
              
              <a
                href="www.linkedin.com/in/mina94"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?i=1ji245lv4hg8c&utm_content=sfvhdd/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
