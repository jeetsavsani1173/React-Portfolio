import React, { useState } from "react";
import "./projects.css";

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
            <h3 className="services__title">
              React <br /> Portfolio
            </h3>
          </div>
          <a
            href="https://github.com/jeetsavsani1173/React-Portfolio"
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

              <h3 className="services__modal-title">React Portfolio</h3>
              <p className="services__modal-description">
                React Portfolio is one static Responsive website. which has some
                sections called About,Skills,Projects, Online Coding Plateform
                Profile , contact form , etc.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    used variable-CSS for styling.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Made carousal with the help of SwiperJs inbuilt module.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    for mailing functionality used emailJs Services.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    for different type Icon used website
                    https://iconscout.com/unicons/explore/line.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    for giving shadow to box used website
                    https://getcssscan.com/css-buttons-examples
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web-Scraping <br /> in-Node.js
            </h3>
          </div>
          <a
            href="https://github.com/jeetsavsani1173/Web-Scraping-in-Node.js"
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

              <h3 className="services__modal-title">Web-Scraping in-Node.js</h3>
              <p className="services__modal-description">
                Web-Scraping in-Node.js Node-application scrap the data from
                cricinfo website about IPL matches and show in console. and also
                store in excel file as per team name.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    for styling in console used cheerio module.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    for working with file opration used module called fs
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    used path inbuilt module.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">used request module</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    used Asynchronous programming in node-Js for fetching data
                    from other website
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Results <br /> Management System
            </h3>
          </div>
          <a
            href="https://github.com/jeetsavsani1173/Results_Management_System"
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

              <h3 className="services__modal-title">
                Results Management System
              </h3>
              <p className="services__modal-description">
                Results Management System is devloped using .net framwork
                Technology. it has basic application which has two type of user
                called Admin and Student. Admin can add student and student
                results. while student can see his/her results.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    for styling used BootStrap.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Coding IDE used is Visual studio 2019
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    for storing data of studnet and result used SQL database.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    added print result functionality
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    used inbuilt functionality called gridView for showing data
                    of studnets and results.
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
