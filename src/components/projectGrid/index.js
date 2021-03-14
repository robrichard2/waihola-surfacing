/* eslint-disable */
import React, { useState } from "react";

import projects from "../../projects.json";

export const ProjectGrid = () => {
  const [category, setCategory] = useState(null);
  const categories = projects.map(({ category }) => category);
  const tile = projects
    .filter(project => category === null || project.category === category)
    .map(({ category, image, title }, idx) => {
      return (
        <div
          key={idx}
          className="col-md-4 col-sm-6 col-xs-12 commercial isotope-item">
          <div className="isotope-img-container">
            <a className="gallery-popup" href={image}>
              <img className="img-responsive" src={image} alt="" />
              <span className="gallery-icon">
                <i className="fa fa-plus"></i>
              </span>
            </a>
            <div className="project-item-info">
              <div className="project-item-info-content">
                <h3 className="project-item-title text-white">{title}</h3>
                <p className="project-cat">{category}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row text-center">
          <h2 className="section-title">Work of Excellence</h2>
          <h3 className="section-sub-title">Recent Projects</h3>
        </div>
        <div className="row">
          <div className="isotope-nav" data-isotope-nav="isotope">
            <ul>
              <li>
                <a
                  className={`pointer ${category === null ? "active" : ""}`}
                  onClick={() => setCategory(null)}>
                  Show All
                </a>
              </li>
              {categories.map((_category, idx) => (
                <li key={`category-${idx}`}>
                  <a
                    className={`pointer ${
                      category === _category ? "active" : ""
                    }`}
                    onClick={() => setCategory(_category)}>
                    {_category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div id="isotope" className="isotope">
            {tile}
          </div>
        </div>
      </div>
    </section>
  );
};
