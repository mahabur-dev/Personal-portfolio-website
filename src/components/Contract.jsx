import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "../contract.css";
import { FiPhoneCall } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contract = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4h9hgtd", "template_xbtnt53", form.current, {
        publicKey: "UvZXhaaKBQlDaG1sV",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contract_full_body">
      <div className="contract_all_items">
        <div className="contract_item">
          <div className="contract mt-4">
            <MdOutlineMailOutline className="img" />
            <p>Email</p>
          </div>
          <p className="contract_name">mahabur24cse@gmail.com</p>
        </div>
        <div className="contract_item">
          <div className="contract mt-4">
            <FiPhoneCall className="img" />
            <p>Contract</p>
          </div>
          <p className="contract_name">01797515386</p>
        </div>
        <div className="contract_item">
          <div className="contract mt-4">
            <IoShareSocialOutline className="img" />
            <p>Social Contract</p>
          </div>
          <div className="contract_name flex social ">
            <a
              href="https://www.linkedin.com/in/mahabur-rahman-9303aa246/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              {" "}
              <FaLinkedin className="img" />
            </a>
            <a
              href="https://github.com/Wrong1234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="img" />
            </a>
          </div>
        </div>
      </div>
      <div className="form_container">
        <div className="form_body">
          <div className="form_header">
            <h1>Contact Me</h1>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form_input">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                className="input"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form_input">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                className="input"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form_input">
              <label>Message</label>
              <textarea
                name="message"
                className="input textarea"
                placeholder="Enter your message"
                rows="5"
                required
              />
            </div>
            <div className="form_button">
              <input
                type="submit"
                value="Send Message"
                className="submit_button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contract;
