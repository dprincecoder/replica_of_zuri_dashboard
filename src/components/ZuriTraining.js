import React from "react";
import "./zuriTraining.css";

const detailsCards = [
  {
    id: 1,
    num: "01",
    svgArt: "https://training.zuri.team/curve1.png",
    title: "Fully Remote",
    description: "100% online classes available to anyone in the world.",
    bg: "#e7332b",
    color: "rgb(255, 255, 255)",
  },
  {
    id: 2,
    num: "02",
    svgArt: "https://training.zuri.team/curve.svg",
    title: "Hands-on Experience",
    description:
      "We don't just teach you theory, we show you how to build things.",
    bg: "#fff",
    color: "#000",
  },
  {
    id: 3,
    num: "03",
    svgArt: "https://training.zuri.team/curve3.svg",
    title: "Collaborative Learning",
    description: "We connect you with like minds to grow together.",
    bg: "#fff",
    color: "#000",
  },
  {
    id: 4,
    num: "04",
    svgArt: "https://training.zuri.team/curve4.svg",
    title: "Real-life Projects",
    description:
      "We give CV worthy projects to help you hit the ground running.",
    bg: "#fff",
    color: "#000",
  },
  {
    id: 5,
    num: "05",
    svgArt: "https://training.zuri.team/curve5.svg",
    title: "Beginner Friendly",
    description:
      "We provide step-by-step procedures on how to get things done.",
    bg: "#fff",
    color: "#000",
  },
  {
    id: 6,
    num: "06",
    svgArt: "https://training.zuri.team/curve6.svg",
    title: "In-program Mentorship",
    description:
      "During and after the program you have access to experience seniors.",
    bg: "#fff",
    color: "#000",
  },
];

const ZuriTraining = () => {
  return (
    <main>
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

      <section className="about">
        <hr className="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
        <div className="about-grid">
          <div className="typography-box">
            <p className="typography-ft-lrg">
              Ingressive for Good was launched in July 2020 with No dollar in
              donation...
            </p>
          </div>
          <div className="typography-box">
            <div className="about-focus-img-wrap">
              <img
                alt=""
                className="about-focus-img"
                src="https://training.zuri.team/ingresive.jpg"
              />
            </div>
          </div>
          <div className="typography-box esp  ">
            <div className="coln">
              <p className="typography-ft-sml">
                to help increase the earning power of African youths by
                providing them with tech skills, community, tools, resources,
                and jobs...{" "}
                <span className="readmore-span">
                  <a
                    href="https://ingressive.org/i4g-in-2021/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-or-hide"
                  >
                    Read More
                  </a>
                </span>
              </p>{" "}
            </div>
          </div>
        </div>
        <hr className="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
      </section>

      <section className="why-us">
        <div className="why-us-grid">
          <div className="why-us-train train-bx">
            <div className="why-us-train-wire-wrap">
              <img
                alt=""
                className="why-us-train-wire-img"
                src="https://training.zuri.team/section3wire.svg"
              />
            </div>
            <div className="why-us-train-text-wrap">
              <h2 className="why-us-train-text-title">Why Zuri Training?</h2>
              <p className="why-us-train-text-desc">
                Here at Zuri, you gain access to enough knowledge to introduce
                and aid your success in the tech industry.
              </p>
            </div>
          </div>
          <div className="star-svg-wrap train-bx">
            <img
              alt=""
              className="star-svg-img"
              src="https://training.zuri.team/Star.jpg"
            />
          </div>
        </div>
      </section>

      <section className="details-cards-container">
        <div className="details-cards-grid">
          {detailsCards.map((card) => (
            <div
              className="details-card-wrap"
              key={card.id}
              style={{ background: `${card.bg}` }}
            >
              <div className="details-card-img-wrap">
                <img alt="" className="details-card-img" src={card.svgArt} />
              </div>
              <div className="details-card-num-wrap">
                <p
                  className="details-card-num"
                  style={{ color: `${card.color}` }}
                >
                  {card.num}
                </p>
              </div>
              <div className="details-card-title-wrap">
                <p
                  className="details-card-title"
                  style={{ color: `${card.color}` }}
                >
                  {card.title}
                </p>
              </div>
              <div className="details-card-text-wrap">
                <p
                  className="details-card-text"
                  style={{ color: `${card.color}` }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ZuriTraining;
