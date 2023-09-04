import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_content">
        <div className="contact_title">
          <p>Contact</p>
          <h3>Don't be shy! Hit me up! 👇</h3>
        </div>
        <div className="contact_icons">
          <div className="contact_icon_box">
            <span>
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </span>
            <div className="contact_info">
              <h3>Mobile</h3>
              <p>7024692684</p>
            </div>
          </div>
          <div className="contact_icon_box">
            <span>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </span>
            <div className="contact_info">
              <h3>Mail</h3>
              <a href="mailto:vishalg30699@gmail.com">vishalg30699@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
