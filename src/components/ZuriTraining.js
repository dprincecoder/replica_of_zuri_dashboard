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

      <section className="training-hero">
        <div className="hero-wrap">
          <div className="lady-svg-wrapper">
            <img
              alt=""
              className="lady-svg-img"
              src="https://training.zuri.team/lady1.jpg"
            />
          </div>
          <div className="typography-wrap">
            <div className="typography-feature">
              <p className="smp-text">And now your search has ended...</p>
              <h1>
                Gain knowledge to help you scale through the tech industry for
                free.
              </h1>
              <span className="vector-lne">
                <img
                  src="https://training.zuri.team/line.svg"
                  alt=""
                  className="vector-line-img"
                />
              </span>
              <p className="dm-txt">
                A basic introduction to software development and product design
                aimed at complete beginners, which anyone can join
              </p>
              <div className="btn-wrap">
                <a
                  href="https://training.zuri.team/enroll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-enroll-training"
                >
                  {" "}
                  Enroll Now{" "}
                </a>
              </div>
              <div className="lines">
                <img
                  src="https://training.zuri.team/maleface.svg"
                  alt=""
                  className="maleface-svg"
                />
                <img
                  src="https://training.zuri.team/section1wire.svg"
                  alt=""
                  className="wire-svg"
                />
              </div>
            </div>
          </div>
          <div className="man-svg-wrapper">
            <img
              className="man-svg-img"
              src="https://training.zuri.team/male1.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZuriTraining;
