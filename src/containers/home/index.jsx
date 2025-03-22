import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Rishu
          <br />
          Full Stack Developer
        </h1>
      </div>

      <motion.div
        initial={{ y: 550 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <a href="/Rishu_Resume.pdf" download="Rishu_CV.pdf">
            <button>Download CV</button>
          </a>
        </div>
        <div
          className="home__social"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "12px",
            gap: "12px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/rishu--kumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={60} color="var(--yellow-theme-main-color)" />
          </a>

          <a
            href="https://github.com/rishu-7549"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={60} color="var(--yellow-theme-main-color)" />
          </a>

          <a
            href="https://www.instagram.com/rishu_7549"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare
              size={60}
              color="var(--yellow-theme-main-color)"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
