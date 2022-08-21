import React from "react";
import "./zuriTalent.css";

const ZuriTalent = () => {
  return (
    <div className="body-talent">
      <nav>
        <div className="nav_box">
          <div className="logo">
            <img src="https://talent.zuri.team/logo2.svg" alt="" />
          </div>
          <ul className="nav_list">
            <li className="hidden_mobile home_link">Home</li>
            <li className="hidden_mobile">Impact</li>
            <li className="hidden_mobile">Why us</li>
            <li>
              <button className="hire_talents">Hire talents</button>
            </li>

            <div className="home_underline">
              <h1>___</h1>
            </div>
            <div className="impact_underline">
              <h1>___</h1>
            </div>
            <div className="why_us_underline">
              <h1>___</h1>
            </div>
          </ul>
        </div>
      </nav>

      <section className="hero_section">
        <div className="hero_content_wrapper">
          <div className="hero_text">
            <h1 className="hero_heading">
              Vetted and Trusted <span className="colored">talents</span>{" "}
              <img
                src="https://talent.zuri.team/thick2.svg"
                alt=""
                className="thick_hero-line-svg"
              />
            </h1>
            <p className="hero_txt_sm">
              At Zuri Team, we train, test and place talent in various
              industries. We have access to the best pool of skills in the tech
              Industry.
            </p>
            <div className="hero_btn_box">
              <button className="hero_hire hero-b">Hire talents</button>
              <button className="join_talent_pool hero-b">
                Join Talent pool
              </button>
            </div>
          </div>
          <div className="hero_img">
            <img
              src="https://talent.zuri.team/section1.png"
              alt=""
              className="main_hero_img"
            />
            <img
              src="https://talent.zuri.team/line1.svg"
              alt=""
              className="talent_hero_line"
            />
          </div>
        </div>
      </section>

      <section className="impact_section">
        <div className="impact_section_wrapper">
          <div className="all_impact_txt">
            <h1 className="impact_heading">
              We have impacted the lives of{" "}
              <span className="colored">thousands</span> around the world
            </h1>
            <p className="impact_stats">6,000 trained in 14 months</p>
            <p className="country_placed">Talent Placed in 5 countries</p>
            <div className="countries_impacted">
              <img
                src="https://talent.zuri.team/GER.svg"
                alt=""
                className="country"
              />
              <img
                src="https://talent.zuri.team/ENG.svg"
                alt=""
                className="country"
              />
              <img
                src="https://talent.zuri.team/ind.svg"
                alt=""
                className="country"
              />
              <img
                src="https://talent.zuri.team/NIG.svg"
                alt=""
                className="country"
              />
              <img
                src="https://talent.zuri.team/ussa.svg"
                alt=""
                className="country"
              />
            </div>
          </div>
          <div className="impact_img">
            <img src="https://talent.zuri.team/section2.png" alt="" />
          </div>
        </div>
      </section>

      <div className="tags_section">
        <div className="tag_section_wrapper">
          <div className="tag_box">
            <h1 className="needed_skills">
              Skills of our <span className="colored">talents</span> that you
              will need
            </h1>
            <div className="btn_wrapper wrapper1">
              <button className="tag_btn">UI/UX Designers</button>
              <button className="tag_btn">Backend Developers</button>
              <button className="tag_btn">DevOps Engineers</button>
              <button className="tag_btn">Frontend Developers</button>
            </div>
            <img
              src="https://talent.zuri.team/line1.svg"
              alt=""
              className="tag_line"
            />
          </div>
          <div className="tag_box">
            <h1 className="needed_talent">Where our talents work</h1>
            <div className="btn_wrapper wrapper1">
              <button className="tag_btn">GitHub</button>
              <button className="tag_btn">Microsoft</button>
              <button className="tag_btn">Reskill Americans</button>
              <button className="tag_btn">Flutterwave</button>
              <button className="tag_btn">Google</button>
              <button className="tag_btn">Career Transitioners</button>
            </div>
          </div>
        </div>
      </div>

      <section className="why_hire_us">
        <h1 className="why_us_heading">
          Why Hire our <span className="colored">Talents</span>
        </h1>
        <div className="why_us_card_wrapper_lg">
          <div className="card">
            <img
              src="https://talent.zuri.team/people.svg"
              alt=""
              className="card_img"
            />
            <p>
              Zuri Team has a highly skilled set of talents that are built on
              referral and successful partnerships.
            </p>
          </div>
          <div className="card">
            <img
              src="https://talent.zuri.team/mech.svg"
              alt=""
              className="card_img"
            />
            <p>
              Our recruiters are exceptionally skilled in identifying top talent
              around the globe and matching them with the client's needs.
            </p>
          </div>
          <div className="card">
            <img
              src="https://talent.zuri.team/hand.svg"
              alt=""
              className="card_img"
            />
            <p>
              We have an 85% fill ratio for every open position we partner for.
            </p>
          </div>
        </div>
        <div className="why_us_card_wrapper_sm">
          <div className="card hide">
            <img
              src="https://talent.zuri.team/write.svg"
              alt=""
              className="card_img"
            />
            <p>Contract renewal rate for our consultant is 90 percent.</p>
          </div>
          <div className="card hide_sm">
            <img
              src="https://talent.zuri.team/many.svg"
              alt=""
              className="card_img"
            />
            <p>60% of our consultants are converted to full-time employees.</p>
          </div>
        </div>
        <img src="https://talent.zuri.team/rope.svg" alt="" className="rope" />
        <div className="why_hire_btn">
          <button className="hero_hire">Hire talents</button>
          <button className="join_talent_pool">Join Talent pool</button>
        </div>
      </section>

      <footer>
        <div className="footer_links_wrapper">
          <div className="footer_logo">
            <img src="https://talent.zuri.team/logo.svg" alt="" />
          </div>
          <div className="all_social">
            <a target="_blank" to="https://web.facebook.com/thezuriteam">
              {" "}
              <img src="https://talent.zuri.team/facebook.svg" alt="" />
            </a>
            <a target="_blank" to="https://www.linkedin.com/company/zuri-team">
              {" "}
              <img alt="" src="https://talent.zuri.team/linkd.svg" />{" "}
            </a>
            <a target="_blank" to="https://twitter.com/thezuriteam">
              {" "}
              <img alt="" src="https://talent.zuri.team/twit.png" />{" "}
            </a>
            <a to="https://www.youtube.com/thezuriteam">
              {" "}
              <img alt="" src="https://talent.zuri.team/youtube.svg" />{" "}
            </a>
          </div>
        </div>

        <div className="copyright">
          <p>© Copyright 2022 ZURI TEAM. All rights Reserved</p>
          <p className="footer-ruler">
            <a
              href="mailto:talent@zuri.team"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              talent@zuri.team
            </a>
            <hr class="MuiDivider-root MuiDivider-fullWidth css-39bbo6 footer-ruler" />{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ZuriTalent;
