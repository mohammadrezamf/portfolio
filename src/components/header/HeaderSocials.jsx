import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mohammadreza-akbari-developer/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
        <FaDribbble />
      </a>
    </div>
  );
}
