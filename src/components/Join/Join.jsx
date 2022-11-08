import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Join.css";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eeugxjt",
        "template_xeuubfm",
        form.current,
        "besIsXEM_BCYt19xI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="Join" id="join-us">
        <div className="left-j">
          <hr />
          <div>
            <span className="stroke-text">ready to</span>
            <span>level up</span>
          </div>
          <div>
            <span>your body</span>
            <span className="stroke-text">with us?</span>
          </div>
        </div>
        <div className="right-j">
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email address"
            />
            <button className="btn btn-j">Join now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
