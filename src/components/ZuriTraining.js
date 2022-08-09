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

const moreActions = [
  {
    id: 1,
    svgArt: "https://training.zuri.team/hand.svg",
    title: "Teamwork",
  },
  {
    id: 2,
    svgArt: "https://training.zuri.team/mentor.svg",
    title: "Mentorship",
  },
  {
    id: 3,
    svgArt: "https://training.zuri.team/practice.svg",
    title: "Practice",
  },
  {
    id: 4,
    svgArt: "https://training.zuri.team/games.svg",
    title: "Fun & Games",
  },
];

const scopeOfProgramCards = [
  {
    id: 1,
    title: "Frontend Developent",
    svgs: [
      "https://training.zuri.team/html.svg",
      "https://training.zuri.team/css-3%20logo.svg",
      "https://training.zuri.team/javascript%20logo.svg",
    ],
    desc: "This track deals with the aspect of your application that the users interact with. A front-end developer will be able to correctly interpret a given design to the user interface.",
  },
  {
    id: 2,
    title: "Backend Developent",
    svgs: [
      "https://training.zuri.team/php2%20logo.svg",
      "https://training.zuri.team/python-4%20logo.svg",
      "https://training.zuri.team/javascript%20logo.svg",
    ],
    desc: "This track deals with the aspect of the application the user does not directly interact with. It allows the frontend function either by running some back-end code or connecting to the database.",
  },
  {
    id: 3,
    title: "Product Design",
    svgs: [
      "https://training.zuri.team/adobe-xd%20logo.svg",
      "https://training.zuri.team/Figma%20logo.svg",
    ],
    desc: "This track deals with creating a graphic plan for an application. You will learn to convert project documentation into viewable and understandable graphic design for the developers to work with.",
  },
  {
    id: 4,
    title: "DevOPS",
    svgs: [
      "https://training.zuri.team/Ubuntu%20logo.svg",
      "https://training.zuri.team/Bash%20logo.svg",
      "https://training.zuri.team/aws%20logo.svg",
    ],
    desc: "The DevOps track is an extension of the backend track. It involves tools that’ll allow the participant to deploy solutions for public use.",
  },
  {
    id: 5,
    title: "Fullstack Developent",
    svgs: [
      "https://training.zuri.team/php2%20logo.svg",
      "https://training.zuri.team/css-3%20logo.svg",
      "https://training.zuri.team/javascript%20logo.svg",
      "https://training.zuri.team/python-4%20logo.svg",
    ],
    desc: "A combination of frontend, backend, and DevOps. This track will only be available to participants who have the time to dedicate to the training.",
  },
  {
    id: 6,
    title: "Frameworks",
    svgs: [
      "https://training.zuri.team/Laravel%20logo.svg",
      "https://training.zuri.team/React%20logo.svg",
      "https://training.zuri.team/Django%20logo.svg",
    ],
    desc: "During the program we will be exploring several useful frameworks to give you an edge in the industry and help you develop complex applications much faster.",
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

      <section className="help-you">
        <div className="help-you-grid">
          <div className="help-you-grid-item grid-bx1">
            <div className="help-you-grid-item-wire-wrap">
              <img
                src="https://training.zuri.team/section5wire.svg"
                alt=""
                className="help-you-wire-img"
              />
            </div>
            <p className="help-you-grid-item-p">We will help you get started</p>
            <h2 className="help-you-grid-item-h2">
              High quality training with hands-on practice
            </h2>
            <p className="help-you-grid-item-p-b">
              We give you weekly tasks, ranging from easy to complex, as you
              progress from stage to stage; making it to the final stage means
              you are now ready to continue learning and growing independently.
            </p>
            <div className="help-you-grid-item-link-wrap">
              <a
                href="https://training.zuri.team/enroll"
                target="_blank"
                rel="noopener noreferrer"
                className="help-you-grid-item-link"
              >
                Enroll Now
              </a>
            </div>
            <div className="help-you-grid-item-moreactions">
              {moreActions.map((action) => (
                <div className="help-you-grid-item-moreactions-item">
                  <img
                    src={action.svgArt}
                    alt=""
                    className="help-you-grid-item-moreactions-item-img"
                  />
                  <p className="help-you-grid-item-moreactions-item-p">
                    {action.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="help-you-grid-item-img-wrap grid-bx">
            <img
              src="https://training.zuri.team/section5-image.png"
              alt=""
              className="help-you-grid-item-img"
            />
          </div>
        </div>
        <div className="help-you-clip-art-wrap">
          <img
            src="https://training.zuri.team/dotsection5.svg"
            alt=""
            className="help-you-clip-art-img"
          />
        </div>
      </section>

      <section className="scope">
        <div className="scope-main">
          <div className="scope-main-text">
            <div className="scope-main-text-text">
              <p className="scope-p">Scope Of Program</p>
              <h2 className="scope-h2">
                Here is the list of areas that will be explored in the training.
              </h2>
            </div>
            <div className="scope-main-text-svg-wrap">
              <img
                src="https://training.zuri.team/section6.svg"
                alt=""
                className="scope-wire"
              />
            </div>
          </div>
          <div className="scope-main-cards">
            {scopeOfProgramCards.map((card) => (
              <div className="scope-card-wrapper">
                <h3 className="scope-main-card-text">{card.title}</h3>
                <div className="scope-card-svgs">
                  {card.svgs.map((svgs) => (
                    <img src={svgs} alt="" className="scope-card-svg-img" />
                  ))}
                </div>
                <p className="scope-main-desc">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="scope-btn-wrap">
            <div className="scope-enrol-btn-wrap">
              <a href="" className="scope-enroll-link">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ZuriTraining;
