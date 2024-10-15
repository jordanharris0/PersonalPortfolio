import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import "../styles/contact.css";
import Footer from "./Footer";

export default function Contact({ setActiveSection }) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  //in view uef
  useEffect(() => {
    if (inView) {
      setActiveSection("contact");
    }
  }, [inView, setActiveSection]);

  //handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //auto resize text area
  const handleTextareResize = async (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${Math.max(e.target.scrollHeight, 100)}px`;
  };

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/contact",
        formData
      );
      if (response.status === 201) {
        setStatus("Message sent successfully! Jordan will be in contact soon.");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus("Failed to send the message. Please try again.");
    }
  };

  return (
    <>
      <section ref={ref} id="contact" className="contact-section">
        <div className="contact-title-container">
          <h1 className="contact-title">Contact</h1>
        </div>
        {/* content */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onInput={handleTextareResize}
                style={{
                  minheight: "100px",
                  height: "100px",
                  overflow: "hidden",
                }}
                required
              />
            </div>
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
          {status && <p>{status}</p>} {/* display success/error messages */}
        </div>
        <Footer />
      </section>
    </>
  );
}
