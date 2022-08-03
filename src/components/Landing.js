import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <section className="hero-container">
        <div className="center-image">
          <img
            alt=""
            className="logo-img"
            src="https://zuri.team/img/zuri-logo-full.svg"
          />
        </div>

        <div className="hero">
          <h2>Learn, Build, Grow.</h2>
          <p>
            Unlock your Brilliance with our hands-on{" "}
            <Link to="/zuri.training">beginner</Link> and{" "}
            <a
              href="https://internship.zuri.team"
              target="_blank"
              rel="noopener noreferrer"
            >
              expert training
            </a>
            . Zuri Team has been immensely successful in creating Link global
            network of a highly adept intelligent workforce that can help your
            company achieve their mission-critical{" "}
            <Link to="/zuri.talent">projects and goals</Link>
          </p>
          <div className="btn-div">
            <Link to="/zuri.training">
              <button className=" my-btn btn-red">
                I'm new to the Industry
              </button>
            </Link>
            <br className="d-block d-md-none" />
            <Link to="/zuri.talent">
              <button className=" my-btn btn-red-outline">
                I need industry experience
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="programs">
        <div className="container-fluid program-content ">
          <div className="text-center">
            <h3 className="heading">BY ZURI Team</h3>
            <p className="slogan">
              We cater for every level of <br /> expertise and needs in the
              industry.
            </p>
          </div>
          <div className="container-fluid my-container">
            <div className="row">
              <div className="col-lg-4 program-card-zed text-center">
                <div className="program-card text-left mx-auto m-4 m-lg-0">
                  <img
                    alt=""
                    className="card-bg-svg-1 d-none d-xl-block"
                    src="https://res.cloudinary.com/dafsch2zs/image/upload/v1596628122/Zuri%20Landing/left_bvmv7q.png"
                  />
                  <div className="zed-content">
                    <img
                      alt=""
                      src="https://zuri.team/img/zuri-training-img.svg"
                    />
                    <p>
                      We understand a complete beginner cannot become a
                      professional after a few weeks, the aim here is to get you
                      familiar enough with each the tools such that you’ll be
                      able to continue learning on your own with minimal
                      support.
                    </p>
                    <h3>
                      <Link to="/zuri.training">I want to be trained </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 text-center">
                <div className="program-card text-left mx-auto m-4 m-lg-0">
                  <img
                    alt=""
                    src="https://zuri.team/img/zuri-internship-img.svg"
                  />
                  <p>
                    We place you in a work simulation. We give you tasks every
                    week, the tasks ranges from easy to hard as you progress
                    from stage to stage, making it to the final stage means you
                    are ready for actual work.{" "}
                  </p>
                  <h3>
                    <a
                      href="https://internship.zuri.team/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I want to join the internship{" "}
                    </a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 program-card-zed">
                <div className="program-card text-left mx-auto m-4 m-lg-0">
                  <img
                    alt=""
                    className="card-bg-svg-2 d-none d-xl-block"
                    src="https://res.cloudinary.com/dafsch2zs/image/upload/v1596628122/Zuri%20Landing/right_yz6hn3.png"
                  />
                  <div className="zed">
                    <img
                      alt=""
                      src="https://zuri.team/img/zuri-talent-img.svg"
                    />
                    <p>
                      Keeping pace with projects and being on the look out for
                      the extremely talented individuals has become ever more
                      challenging. Here is where Zuri Team comes into play to
                      bring the best suited talent for your company
                    </p>
                    <h3>
                      <Link to="/zuri.talent">I am looking for talent </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer my-container mx-auto">
        <div className="footer-flex-container text-center text-md-left">
          <div className="flex-1">
            <img
              alt=""
              className="footer-logo"
              src="https://zuri.team/img/zuri-logo-full.svg"
            />
          </div>

          <div className="flex-3">
            <h3>Links</h3>
            <Link to="https://flutterwave.com/store/zuriteam">
              <p>Store</p>
            </Link>
            <Link to="https://blog.zuri.team">
              <p>Blog</p>
            </Link>
          </div>

          <div className="flex-4 address">
            <h3>Contact</h3>
            <p>
              8 Jubliee-CMD Road, Magodo, <br />
              Lagos State
            </p>
            <p>
              <Link to="mailto:hello@zuri.com">hello@zuri.team</Link>
            </p>
          </div>

          <div className="flex-5">
            <h3>Follow Us</h3>
            <div className="contact-icons">
              <a target="_blank" to="https://web.facebook.com/thezuriteam">
                {" "}
                <img alt="" src="https://zuri.team/img/fb.png" />{" "}
              </a>
              <a target="_blank" to="https://twitter.com/theZuriTeam">
                {" "}
                <img alt="" src="https://zuri.team/img/twitter.png" />{" "}
              </a>
              <a target="_blank" to="https://www.instagram.com/thezuriteam/">
                {" "}
                <img alt="" src="https://zuri.team/img/IG.png" />{" "}
              </a>
              <a to="#">
                {" "}
                <img alt="" src="https://zuri.team/img/in.png" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div>
          <hr className="m-3 md-0" />
        </div>

        <div className="mx-auto text-center copyright">
          <p> &#169 2020 ZURI TEAM </p>
        </div>
      </footer>
    </>
  );
};

export default Landing;
