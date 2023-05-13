import React from "react";
import "./ContactSection.css";
import { Button } from "./Button";

function ContactSection() {
  return (
    <div id="contact" className="hero-container">
      <h1>Contact</h1>
      <Button buttonStyle="btn--outline" className="btns" buttonSize="btn--large" to="mailto:danielkearsleybrown@gmail.com">Email Me</Button>
    </div>
  );
}

export default ContactSection;
