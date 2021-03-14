import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const AddressHeader = () => (
    <div id="top-bar" className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
            <ul className="top-info">
              <li>
                <i className="fa fa-map-marker">&nbsp;</i>
                <p className="info-text">
                  13 Brighton Road, Green Island, Dunedin
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const HeaderNav = () => (
    <header id="header" className="header-one">
      <div className="container">
        <div className="row">
          <div className="logo-area clearfix">
            <div className="logo col-xs-12 col-md-3">
              <a href="index.html">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </div>

            <div className="col-xs-12 col-md-9 header-right">
              <ul className="top-info-box">
                <li>
                  <div className="info-box">
                    <div className="info-box-content">
                      <p className="info-box-title">Call Us</p>
                      <p className="info-box-subtitle">(+64) 027-540-0852</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="info-box">
                    <div className="info-box-content">
                      <p className="info-box-title">Email Us</p>
                      <p className="info-box-subtitle">scott@waihola.nz</p>
                    </div>
                  </div>
                </li>
                <li className="header-get-a-quote">
                  <a className="btn btn-primary" href="contact.html">
                    Get A Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="site-navigation navigation navdown">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="site-nav-inner pull-left">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

                <div className="collapse navbar-collapse navbar-responsive-collapse">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to={"/home"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/services"}>Services</Link>
                    </li>
                    <li>
                      <Link to={"/projects"}>Projects</Link>
                    </li>
                    <li>
                      <Link to={"about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"testimonials"}>Testimonials</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-search">
            <span id="search">
              <i className="fa fa-search"></i>
            </span>
          </div>

          <div className="search-block" style={{ display: "none" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Type what you want and enter"
            />
            <span className="search-close">&times;</span>
          </div>
        </div>
      </nav>
    </header>
  );
  return (
    <div>
      <AddressHeader />
      <HeaderNav />
    </div>
  );
};
