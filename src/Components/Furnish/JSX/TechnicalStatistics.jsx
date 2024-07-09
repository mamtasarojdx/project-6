import React from "react";
import "../CSS/TechnicalStatistics.css";

function TechnicalStatistics() {
  return (
    <>
      <section class="ftco-section-counter img" style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/bg_3.jpg.webp)" }}>
        <div class="overlay"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 heading-section text-center mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <span class="subheading">Great Reviews for our services</span>
              <h2 class="mb-0">Technical Statistics</h2>
            </div>
          </div>
          <div class="row section-counter viewed">
            <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div class="counter-wrap-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h2 class="number">
                  <span class="countup">20</span>
                </h2>
                <span class="caption">Year of Experienced</span>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div class="counter-wrap-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <h2 class="number">
                  <span class="countup">10,200</span>
                </h2>
                <span class="caption">Satisfied Customers </span>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div class="counter-wrap-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <h2 class="number">
                  <span class="countup">9,850</span>
                </h2>
                <span class="caption">Project Completed</span>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div class="counter-wrap-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <h2 class="number">
                  <span class="countup">20</span>
                </h2>
                <span class="caption">Get Awards</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechnicalStatistics;
