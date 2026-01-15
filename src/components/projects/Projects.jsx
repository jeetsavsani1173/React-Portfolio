import React, { useState } from "react";

const Projects = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Development Skill</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">CoursePool</h3>
          </div>
          <a
            href="https://github.com/jeetsavsani1173/CoursePool"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button-85">Code</button>
          </a>
          <br />
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">CoursePool</h3>
              <p className="services__modal-description">
                CoursePool is an SEO-friendly E-learning platform offering
                diverse courses. It features OAuth authentication, JWT security,
                and Redis caching. The platform integrates Stripe for payments,
                Cloudinary for image uploads, VdoCipher for secure video, and
                real-time notifications via Socket.io.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Developed a innovative dynamic E-learning plateform called
                    CoursePool with SEO-friendly. which offers a wide range of
                    courses to students of all ages and backgrounds.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Implemented Google-sign-in and Github-sign-in using OAuth
                    and also added JWT Token Authentication system by using the
                    concept of Refresh Token Rotation.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Added Redis database for caching purpose and cached the
                    frequently called API’s.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Used the Dynamic Email sending template with Ejs on Account
                    Activation and course-purchased ,etc.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Other functionalities are stripe payment gateway on
                    purchased-course, used cloudinary for image upload
                    ,VdoCipher for secure video upload, real-time notification
                    with sound in admin panel using Socket.io.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">TourNion</h3>
          </div>
          <a
            href="https://github.com/jeetsavsani1173/TourNion"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button-85">Code</button>
          </a>
          <br />
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">TourNion</h3>
              <p className="services__modal-description">
                TourNion is a web application built on the MERN stack that
                allows users to share their travel experiences. It features a
                RESTful API for seamless CRUD operations, Google Sign-In for
                secure authentication, and interactive functionalities like
                pagination, likes, comments, and a search feature to find tours
                by name. The platform's modern and responsive design is powered
                by MDB (Modern Design Bootstrap), creating an engaging space for
                users to connect and explore unique travel stories.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Designed a web application in MERN stack that lets users to
                    Share their Tour Experience.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Built restful API with Node.js and Express.js for CRUD
                    operations and tested on Postman API tool.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Implemented Sign-In with google functionality using
                    google-cloud API and JWT Token Authenticated.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Other functionalities Pagination ,Like, Comment, Search Tour
                    by name, Related tour section. used MDB(Modern design
                    bootstrap) for styling ,etc.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">InterviewBie</h3>
          </div>
          <a
            href="https://github.com/jeetsavsani1173/InterviewBie"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button-85">Code</button>
          </a>
          <br />
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">InterviewBie</h3>
              <p className="services__modal-description">
                The main objective of InterviewBie was to create a web
                application that facilitates virtual technical interviews. It
                includes a real-time code editor with support for multiple
                programming languages and themes, a code execution feature
                through an API, and integrated live video and audio chat
                functionalities, offering a comprehensive platform for
                interviewers and candidates.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Builded a web-application for taking virtual technical
                    interview with realtime Code Editor IDE using Socket.io.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Added Codemirror NPM module for code editor and Enabled
                    different languages(15+) and themes support.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Integrated code-compiler Rapid-API for code-runner
                    functionality.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    live Video and audio chat functionalities were created
                    successfully using ZegoCloud Web services.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
