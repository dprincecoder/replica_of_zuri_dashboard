import React from "react";
import Faqs from "./faqs/Faqs";
import TwitterIcon from "@mui/icons-material/Twitter";
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
    <>
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
      <main className="main-content">
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
                  A basic introduction to software development and product
                  design aimed at complete beginners, which anyone can join
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
        </section>{" "}
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
              <p className="help-you-grid-item-p">
                We will help you get started
              </p>
              <h2 className="help-you-grid-item-h2">
                High quality training with hands-on practice
              </h2>
              <p className="help-you-grid-item-p-b">
                We give you weekly tasks, ranging from easy to complex, as you
                progress from stage to stage; making it to the final stage means
                you are now ready to continue learning and growing
                independently.
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
                  Here is the list of areas that will be explored in the
                  training.
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
        <section className="faqs">
          <hr className="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
          <div className="faqs-container">
            <div className="faqs-text-container">
              <div className="faqs-svg-wrap">
                <img
                  src="https://training.zuri.team/section7wire.svg"
                  alt=""
                  className="faqs-wire"
                />
              </div>
              <div className="faqs-text-wrap">
                <p>Got Questions?</p>
                <h2>Frequently Asked Questions</h2>
              </div>
              <div className="faqs-text-desc-wrap"></div>
            </div>
            <div className="faqs-questions-wrapper">
              <Faqs />
            </div>
            <div className="faqs-more">
              <div className="faqs-more-wrap">
                <div className="faqs-more-text">
                  <p>Still got Questions?</p>
                </div>
                <div className="faqs-more-btn-wrap">
                  <a
                    href="https://twitter.com/thezuriteam"
                    className="faqs-more-btn"
                  >
                    <TwitterIcon className="twit-svg" />
                    Tweet them at us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
        </section>
        <section className="programme_structure_section">
          <div className="structure_header">
            <img
              src="https://training.zuri.team/section7wire.svg"
              alt=""
              className="structure_wire"
            />
            <img
              src="https://training.zuri.team/Star1.svg"
              alt=""
              className="structure_star"
            />
            <p className="pre_structure_heading">Structure</p>

            <h2 className="structure_heading">Program Structure</h2>
            <p className="structure_sub_heading">
              There are 2 broad paths in this program based on your
              availability.
            </p>
          </div>

          <div className="program_card_wrapper">
            <div className="program_card">
              <h2>Full-time</h2>
              <p>Requires at least 25 hours weekly on program content.</p>
              <h3>Available Tracks:</h3>
              <ul className="programme_list">
                <li>
                  Full Stack: Backend (Python, JavaScript), Frontend (HTML, CSS,
                  JavaScript) & DevOps
                </li>
                <li>Design: Figma, Adobe XD</li>
              </ul>
              <h3>Phases:</h3>
              <ul className="programme_list">
                <li>Training Phase</li>
                <li>Project Phase</li>
              </ul>
              <h3>Post Program:</h3>
              <ul className="programme_list">
                <li>Certification of Attendance</li>
                <li>
                  Zuri Internship{" "}
                  <img
                    src="https://training.zuri.team/clarity.svg"
                    className="clarity-svg"
                  />
                </li>
                <li>
                  Laptop Reward (upgrade or new one){" "}
                  <img
                    src="https://training.zuri.team/clarity.svg"
                    className="clarity-svg"
                  />
                </li>
                <li>
                  Job Placement{" "}
                  <img
                    src="https://training.zuri.team/clarity.svg"
                    className="clarity-svg"
                  />
                </li>
                <li>Zuri Talent Pool </li>
                <li>
                  More Training:{" "}
                  <img
                    src="https://training.zuri.team/clarity.svg"
                    className="clarity-svg"
                  />
                </li>
                <li className="list_style_none">Interview Prep</li>
                <li className="list_style_none">Algorithms & Data Structure</li>
                <li className="list_style_none">Freelance Setup & Training</li>
                <li className="list_style_none">LinkedIn Optimization</li>
                <li className="list_style_none">CV Review</li>
              </ul>

              <img
                src="https://training.zuri.team/hour.png"
                alt=""
                className="structure_img"
              />
            </div>
            <div className="program_card">
              <h1>Part-time</h1>
              <p>Requires at least 11 hours weekly on program content.</p>
              <h3>Available Tracks:</h3>
              <ul className="programme_list">
                <li>Frontend:</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Backend: Can only select one backend language</li>
                <li className="list_style_none">Python,</li>
                <li className="list_style_none">PHP,</li>
                <li className="list_style_none">JavaScript</li>
                <li>Design:</li>
                <li className="list_style_none">Figma</li>
              </ul>
              <h3>Phases:</h3>
              <ul className="programme_list">
                <li>Training Phase</li>
              </ul>
              <h3>Post Program:</h3>
              <ul className="programme_list">
                <li>Certification of Attendance</li>
                <li>Zuri Internship</li>
              </ul>
              <img
                src="https://training.zuri.team/time.png"
                alt=""
                className="structure_img"
              />
            </div>
          </div>
          <img
            src="https://training.zuri.team/circle.png"
            alt=""
            className="structure_circle"
          />

          <img
            src="https://training.zuri.team/move.svg"
            alt=""
            className="structure_move"
          />
        </section>
        <section className="industry_section">
          <img
            src="https://training.zuri.team/circle.png"
            alt=""
            className="industry_circle_img"
          />
          <div className="industry_box">
            <img
              src="https://training.zuri.team/round.svg"
              alt=""
              className="industry_box_round"
            />
            <img
              src="https://training.zuri.team/bend1.svg"
              alt=""
              className="industry_box_bend"
            />
            <img
              src="https://training.zuri.team/mains.png"
              alt=""
              className="industry_box_main"
            />
            <img
              src="https://training.zuri.team/curve2.svg"
              alt=""
              className="industry_box_bend2"
            />
            <p className="industry_start">Get Started</p>
            <h1 className="industry_heading">
              Break into the tech industry like a Pro
            </h1>
            <button className="industry_btn">Enroll now</button>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer_img_wrapper">
          <img src="https://training.zuri.team/logo.svg" alt="" />
          <div className="all_social">
            <a target="_blank" to="https://web.facebook.com/thezuriteam">
              {" "}
              <img alt="" src="https://training.zuri.team/facebook.svg" />{" "}
            </a>
            <a target="_blank" to="https://www.linkedin.com/company/zuri-team">
              {" "}
              <img alt="" src="https://training.zuri.team/linkd.svg" />{" "}
            </a>
            <a target="_blank" to="https://twitter.com/thezuriteam">
              {" "}
              <img alt="" src="https://training.zuri.team/twitter.svg" />{" "}
            </a>
            <a to="https://www.youtube.com/thezuriteam">
              {" "}
              <img alt="" src="https://training.zuri.team/youtube.svg" />{" "}
            </a>
          </div>
        </div>

        <div className="copyright_policy">
          <p>© 2022 Zuri Training</p>
          <p >
            <span>Privacy Policy</span>{" "}
            <span>&nbsp;&nbsp;&nbsp; Ingressive For Good</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default ZuriTraining;
