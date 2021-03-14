import React from "react";
import { Link } from "react-router-dom";

export const Testimonials = () => {
  return (
    <>
      <div
        id="banner-area"
        className="banner-area"
        style={{ backgroundImage: "url(assets/images/banner/banner1.jpg)" }}>
        <div className="banner-text">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="banner-heading">
                  <h1 className="banner-title">Testimonials</h1>
                  <ol className="breadcrumb">
                    <li>Home</li>
                    <li>
                      <Link to={"testimonials"}>Testimonials</Link>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row text-center">
            <h3 className="section-sub-title">What People Said</h3>
          </div>

          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="quote-item quote-border">
                <div className="quote-text-border">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid.
                </div>

                <div className="quote-item-footer">
                  <img
                    className="testimonial-thumb"
                    src="assets/images/clients/testimonial1.png"
                    alt="testimonial"
                  />
                  <div className="quote-item-info">
                    <h3 className="quote-author">Gabriel Denis</h3>
                    <span className="quote-subtext">
                      Chairman, Okt Industries
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="quote-item quote-border">
                <div className="quote-text-border">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid.
                </div>

                <div className="quote-item-footer">
                  <img
                    className="testimonial-thumb"
                    src="assets/images/clients/testimonial2.png"
                    alt="testimonial"
                  />
                  <div className="quote-item-info">
                    <h3 className="quote-author">Weldon Cash</h3>
                    <span className="quote-subtext">
                      CEO, First Choice Group
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="quote-item quote-border">
                <div className="quote-text-border">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid.
                </div>

                <div className="quote-item-footer">
                  <img
                    className="testimonial-thumb"
                    src="assets/images/clients/testimonial3.png"
                    alt="testimonial"
                  />
                  <div className="quote-item-info">
                    <h3 className="quote-author">Hyram Izzy</h3>
                    <span className="quote-subtext">Director, AKT Group</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
