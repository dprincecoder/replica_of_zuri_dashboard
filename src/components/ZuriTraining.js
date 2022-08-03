import React from "react";
import "./zuriTraining.css";

const ZuriTraining = () => {
  return (
    <div>
      <nav className="zuriTraining-nav">
        <div className="zuriTraining-navWrapper">
          <div className="training-logo">
            <img
              alt=""
              className="logo-img"
              src="https://training.zuri.team/logo.svg"
            />
          </div>
          <ul className="training-list">
            <li className="training-listItem">
              <a href="#about">About</a>
            </li>
            <li className="training-listItem">
              <a href="#whyus">Why Us</a>
            </li>
            <li className="training-listItem">
              <a href="#howitworks">Stacks Covered</a>
            </li>
            <li className="training-listItem">
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
          <div className="training-enroll">
            <div className="enroll-thumbs">
              <img
                alt=""
                className="enroll-thumb-img"
                src="https://training.zuri.team/thumbs.png"
              />
            </div>
            <div className="enroll-text-wrap">
              <a
                href="https://training.zuri.team/enroll"
                target="_blank"
                rel="noopener noreferrer"
                className="enroll-text-title"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ZuriTraining;
