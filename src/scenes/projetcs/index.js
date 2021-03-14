import React from "react";
import { Link } from "react-router-dom";
import { ProjectGrid } from "../../components/projectGrid";

export const Projects = () => {
  return (
    <div>
      <div
        id="banner-area"
        className="banner-area"
        style={{ backgroundImage: "url(assets/images/banner/banner2.jpg)" }}>
        <div className="banner-text">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="banner-heading">
                  <h1 className="banner-title">Projects</h1>
                  <ol className="breadcrumb">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>
                      <Link className={"text-white"} to={"/projects"}>
                        Projects All
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectGrid />
    </div>
  );
};
