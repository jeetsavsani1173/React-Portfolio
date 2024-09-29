import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Technology</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Material UI</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
