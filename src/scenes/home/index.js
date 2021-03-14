import React from "react";
import { Link } from "react-router-dom";
import { ProjectGrid } from "../../components/projectGrid";
export const Home = () => {
  return (
    <>
      <div id="main-slide" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators visible-lg visible-md">
          <li
            data-target="#main-slide"
            data-slide-to="0"
            className="active"></li>
          <li data-target="#main-slide" data-slide-to="1"></li>
          <li data-target="#main-slide" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div
            className="item active"
            style={{
              backgroundImage: "url(assets/images/slider-main/bg1.jpg)",
            }}>
            <div className="slider-content">
              <div className="col-md-12 text-center">
                <h2 className="slide-title animated4">
                  17 Years of excellence in
                </h2>
                <h3 className="slide-sub-title animated5">
                  Construction Industry
                </h3>
                <p>
                  <a href="services.html" className="slider btn btn-primary">
                    Our Services
                  </a>
                  <a
                    href="contact.html"
                    className="slider btn btn-primary border">
                    Contact Now
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: "url(assets/images/slider-main/bg3.jpg)",
            }}>
            <div className="slider-content">
              <div className="col-md-12 text-centre">
                <h2 className="slide-title-box animated2">
                  World Class Service
                </h2>
                <h3 className="slide-title animated3">When Service Matters</h3>
                <h3 className="slide-sub-title animated3">
                  Your Choice is Simple
                </h3>
                <p className="animated3">
                  <a
                    href="services.html"
                    className="slider btn btn-primary border">
                    Our Services
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: "url(assets/images/slider-main/bg2.jpg)",
            }}>
            <div className="slider-content text-right">
              <div className="col-md-12">
                <h2 className="slide-title animated6">Meet Our Engineers</h2>
                <h3 className="slide-sub-title animated7">
                  We believe sustainability
                </h3>
                <p className="slider-description lead animated7">
                  We will deal with your failure that determines how you achieve
                  success.
                </p>
                <p>
                  <a href="contact.html" className="slider btn btn-primary">
                    Get Free Quote
                  </a>
                  <a
                    href="about.html"
                    className="slider btn btn-primary border">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="left carousel-control"
          href="#main-slide"
          data-slide="prev">
          <span>
            <i className="fa fa-angle-left"></i>
          </span>
        </a>
        <a
          className="right carousel-control"
          href="#main-slide"
          data-slide="next">
          <span>
            <i className="fa fa-angle-right"></i>
          </span>
        </a>
      </div>
      <section className="call-to-action-box no-padding">
        <div className="container">
          <div className="action-style-box">
            <div className="row">
              <div className="col-md-10">
                <div className="call-to-action-text">
                  <h3 className="action-title">
                    Looking for an Asphalt or Chipseal specialist?
                  </h3>
                </div>
              </div>
              <div className="col-md-2">
                <div className="call-to-action-btn">
                  <Link className="btn btn-dark" to={"/contact"}>
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ts-features" className="ts-features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="ts-intro">
                <h2 className="into-title">About Us</h2>
                <h3 className="into-sub-title">We deliver landmark projects</h3>
                <p>
                  We are rethoric question ran over her cheek When she reached
                  the first hills of the Italic Mountains, she had a last view
                  back on the skyline of her hometown Bookmarksgrove, the
                  headline of Alphabet Village and the subline of her own road,
                  the Line Lane.
                </p>
              </div>
              <div className="gap-20"></div>
              <div className="row">
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fa fa-trophy"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">
                        We've Repution for Excellence
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fa fa-sliders"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">
                        We Build Partnerships
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fa fa--up"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">
                        Guided by Commitment
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fa fa-users"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">
                        A Team of Professionals
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <h3 className="into-sub-title">Our Values</h3>
              <p>
                Minim Austin 3 wolf moon scenester aesthetic, umami odio
                pariatur bitters. Pop-up occaecat taxidermy street art, tattooed
                beard literally.
              </p>
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne">
                        Safety
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidata
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        className="collapsed"
                        data-parent="#accordion"
                        href="#collapseTwo">
                        {" "}
                        Customer Service
                      </a>
                    </h4>
                  </div>
                  <div id="collapseTwo" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidata
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        className="collapsed"
                        data-parent="#accordion"
                        href="#collapseThree">
                        Integrity
                      </a>
                    </h4>
                  </div>
                  <div id="collapseThree" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidata
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="facts" className="facts-area dark-bg">
        <div className="container">
          <div className="row text-center">
            <div className="row text-center">
              <h2 className="ts-facts-num">Years Trading</h2>
            </div>
            <div className="row text-center">
              <div className="ts-facts-img">
                <img src="assets/images/icon-image/fact2.png" alt="" />
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-txt">
                  <span className="counterUp" data-count="17">
                    0
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ts-service-area" className="ts-service-area">
        <div className="container">
          <div className="row text-center">
            <h2 className="section-title">We Are Specialists In</h2>
            <h3 className="section-sub-title">What We Do</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="ts-service-box">
                <div className="ts-service-box-img pull-left">
                  <img
                    src="assets/images/icon-image/service-icon1.png"
                    alt=""
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <span>Home Construction</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    Integer adipiscing erat
                  </p>
                </div>
              </div>
              <div className="ts-service-box">
                <div className="ts-service-box-img pull-left">
                  <img
                    src="assets/images/icon-image/service-icon2.png"
                    alt=""
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <span>Building Remodels</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    Integer adipiscing erat
                  </p>
                </div>
              </div>
              <div className="ts-service-box">
                <div className="ts-service-box-img pull-left">
                  <img
                    src="assets/images/icon-image/service-icon3.png"
                    alt=""
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <span>Interior Design</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    Integer adipiscing erat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img
                className="service-center-img img-responsive"
                src="assets/images/services/service-center.jpg"
                alt=""
              />
            </div>
            <div className="col-md-4">
              <div className="ts-service-box">
                <div className="ts-service-box-img pull-left">
                  <img
                    src="assets/images/icon-image/service-icon4.png"
                    alt=""
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <span>Exterior Design</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    Integer adipiscing erat
                  </p>
                </div>
              </div>
              <div className="ts-service-box">
                <div className="ts-service-box-img pull-left">
                  <img
                    src="assets/images/icon-image/service-icon5.png"
                    alt=""
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <span>Renovation</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    Integer adipiscing erat
                  </p>
                </div>
              </div>
              <div className="ts-service-box">
                <div className="ts-service-box-img pull-left">
                  <img
                    src="assets/images/icon-image/service-icon6.png"
                    alt=""
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <span>Safety Management</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    Integer adipiscing erat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectGrid />

      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="column-title">Testimonials</h3>
              <div
                id="testimonial-slide"
                className="owl-carousel owl-theme testimonial-slide">
                <div className="item">
                  <div className="quote-item">
                    <span className="quote-text">
                      Question ran over her cheek When she reached the first
                      hills of the Italic Mountains, she had a last view back on
                      the skyline of her hometown Bookmarksgrove, the headline
                      of Alphabet Village and the subline of her own road.
                    </span>
                    <div className="quote-item-footer">
                      <img
                        className="testimonial-thumb"
                        src="assets/images/clients/testimonial1.png"
                        alt="testimonial"
                      />
                      <div className="quote-item-info">
                        <h3 className="quote-author">Gabriel Denis</h3>
                        <span className="quote-subtext">Chairman, OKT</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="quote-item">
                    <span className="quote-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor inci done idunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitoa tion ullamco laboris nisi ut commodo consequat.
                    </span>
                    <div className="quote-item-footer">
                      <div className="quote-item-info">
                        <h3 className="quote-author">Minter Puchan</h3>
                        <span className="quote-subtext">Director, AKT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="column-title">Our Accereditations</h3>
              <div className="row all-clients">
                <div className="col-sm-4">
                  <figure className="clients-logo">
                    <img
                      className="img-responsive"
                      src="assets/images/clients/client1.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-sm-4">
                  <figure className="clients-logo">
                    <img
                      className="img-responsive"
                      src="assets/images/clients/client2.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-sm-4">
                  <figure className="clients-logo">
                    <img
                      className="img-responsive"
                      src="assets/images/clients/client3.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
