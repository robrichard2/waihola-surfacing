/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <>
      <div
        id="banner-area"
        className="banner-area"
        style={{ backgroundImage: "url(assets/images/banner/banner3.jpg)" }}>
        <div className="banner-text">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="banner-heading">
                  <h1 className="banner-title">Contact</h1>
                  <ol className="breadcrumb">
                    <li>Home</li>
                    <li>
                      <Link className={"text-white"} to="/contact">
                        Contact
                      </Link>
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
            <h2 className="section-title">Reaching our Office</h2>
            <h3 className="section-sub-title">Find Our Location</h3>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="ts-service-box-bg text-center">
                <span className="ts-service-icon icon-round">
                  <i className="fa fa-map-marker"></i>
                </span>
                <div className="ts-service-box-content">
                  <h4>Visit Our Office</h4>
                  <p>13 Brighton Road, Green Island, Dunedin</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ts-service-box-bg text-center">
                <span className="ts-service-icon icon-round">
                  <i className="fa fa-envelope"></i>
                </span>
                <div className="ts-service-box-content">
                  <h4>Email Us</h4>
                  <p>scott@waihola.nz</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ts-service-box-bg text-center">
                <span className="ts-service-icon icon-round">
                  <i className="fa fa-phone-square"></i>
                </span>
                <div className="ts-service-box-content">
                  <h4>Call Us</h4>
                  <p>(+64) 027-540-0852</p>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-60" />

          <div id="map" className="map" />

          <div className="gap-40" />

          <div className="row">
            <div className="col-md-12">
              <h3 className="column-title">We love to hear</h3>
              <form id="contact-form" method="post" role="form">
                <div className="error-container"></div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control form-control-name"
                        name="name"
                        id="name"
                        placeholder=""
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control form-control-email"
                        name="email"
                        id="email"
                        placeholder=""
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        className="form-control form-control-subject"
                        name="subject"
                        id="subject"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    className="form-control form-control-message"
                    name="message"
                    id="message"
                    placeholder=""
                    rows="10"
                    required></textarea>
                </div>
                <div className="text-right">
                  <br />
                  <button className="btn btn-primary solid blank" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
