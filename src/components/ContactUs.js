import React from "react";

const ContactUs = ({ theme, closeContact }) => {
  return (
    <div className="contact-overlay" onClick={closeContact}>
      <div className={`contact-container ${theme}`} onClick={(e) => e.stopPropagation()}>
        <h2 className="contact-title">Contact Us</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" placeholder="Your Email" required />

          <label>Message</label>
          <textarea placeholder="Your Message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        <button className="close-btn" onClick={closeContact}>✖</button>
      </div>
    </div>
  );
};

export default ContactUs;
