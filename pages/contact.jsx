import React from "react";
import "./Contact.css"; // Import the CSS file for styling

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        Feel free to reach out to us if you have any questions or feedback. We
        are here to help!
      </p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button className="btnx" type="submit">Send Message</button>
      </form>
    </div>
  );
};
