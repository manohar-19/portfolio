import React from "react";
import "./footer.css";
import { IoLogoGithub } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        MANOHAR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/manohar19/" target="_blank">
          <IoLogoLinkedin />
        </a>
        <a href="https://www.instagram.com/_manohar19_/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://github.com/manohar-19">
          <IoLogoGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Manu All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
