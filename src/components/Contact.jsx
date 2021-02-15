import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <h2>Let's work together...</h2>
        <p>Contact me</p>
      </div>
      <div className="contact-links">
        <a id="profile-link" className="btn contact-details"
          href="https://github.com/kellina" >
          <i className="fa fa-github"></i> GitHub
        </a>
        <a className="btn contact-details"
          href="https://www.freecodecamp.org/fccc9d6ace9-dc3c-4805-89de-ae42013b8725">
          <i className="fa fa-free-code-camp"></i> FreeCodeCamp
        </a>
        <a className="btn contact-details"
          href="https://www.linkedin.com/in/kellina-oliveira-82375336">
          <i className="fa fa-linkedin"></i> Linkedin
        </a>
        <a href="mailto:kellina@gmail.com" className="btn contact-details">
          <i className="fa fa-at"></i> Send a email
        </a>
        <a href="tel:+5585996705430" className="btn contact-details">
          <i className="fa fa-mobile-phone"></i> Call me
        </a>
      </div>
    </section>
  );
}

export default Contact;
