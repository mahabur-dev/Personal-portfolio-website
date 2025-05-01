import { useTypewriter, Cursor } from "react-simple-typewriter";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Competitive Programmer", "FullStack Developer"],
    loop: true,
  });

  return (
    <div className="block flex-col md:flex-row home_style1">
      <div className="home_style">
        <h1 className="text-white text-4xl">Mahabur Rahman</h1>
        <h2 className="text-2xl text-white mt-5">
          I'm a <span style={{ color: "green" }}>{text}</span>
          <Cursor cursorStyle="|" />
        </h2>
        <div className="all_home_icon">
          <a
            href="https://www.linkedin.com/in/mahabur-rahman-9303aa246/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            {" "}
            <FaLinkedin className="home_icons" />
          </a>
          <a href="mailto:https://mail.google.com/mail/u/0/#inbox" aria-label="Email">
            <MdOutlineMailOutline className="home_icons" />
          </a>
          <a
            href="https://github.com/Wrong1234"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="home_icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
