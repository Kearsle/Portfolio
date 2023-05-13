import React from "react";
import "./ContactSection.css";
import { Button } from "./Button";

function ContactSection() {
  return (
    <div id="contact" className="contact-container">
      <h1>Contact</h1>
      <Button buttonStyle="btn--outline-dark" className="btns" buttonSize="btn--large" to="mailto:danielkearsleybrown@gmail.com">Email Me</Button>
      <Button buttonStyle="btn--outline-dark" className="btns" buttonSize="btn--large" to="https://www.linkedin.com/in/daniel-kearsley-brown-139b3212b/">Linked In</Button>
    </div>
  );
}

export default ContactSection;
