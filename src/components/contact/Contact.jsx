import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";

export default function contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>mohammadrezamf2014@gmail.com</h5>
            <a
              href="mailito:dummyegator@email.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>messenger</h4>
            <h5>mohammadrezamf2014@gmail.com</h5>
            <a
              href="mailito:dummyegator@email.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>whatsApp</h4>
            <h5>+9375332212</h5>
            <a
              href="https://api.whatsapp.com/send?phone+9375332212"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of  contact option */}
        <form action=""></form>
      </div>
    </section>
  );
}
