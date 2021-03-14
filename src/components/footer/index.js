import React from "react";

export const Footer = () => {
  return (
    <footer id="footer" className="footer bg-overlay">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 footer-widget footer-about">
              <h3 className="widget-title">About Us</h3>
              <img
                className="footer-logo"
                src="assets/images/footer-logo.png"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor inci done idunt ut labore et dolore magna aliqua.
              </p>
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="https://facebook.com/themefisher">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/themefisher">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/themefisher">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/themefisher">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 footer-widget footer-about">
              <h3 className="widget-title">About Us</h3>
              <p>
                Waihola Asphalt Services are committed to high quality customer
                services. Call Scott for a free quote today with no obligations
                on 021 sdfsdf or office@mail.com.
              </p>
            </div>

            <div className="col-md-4 col-sm-12 footer-widget">
              <span>
                <h3 className="widget-title">Working Hours</h3>
                Monday - Friday:
                <br /> 8:00am -- 4:30pm
                <br />
                Saturday: <br />
                8:00am -- 1:30pm{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="copyright-info">
                <span>
                  Copyright © 2020{" "}
                  <a href="https://entivik.co.nz">Website by entivik.co.nz</a>
                </span>
              </div>
            </div>
            <div
              id="back-to-top"
              data-spy="affix"
              data-offset-top="10"
              className="back-to-top affix">
              <button className="btn btn-primary" title="Back to Top">
                <i className="fa fa-angle-double-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
