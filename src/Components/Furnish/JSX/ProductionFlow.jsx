import React from "react";
import { FaCalculator } from "react-icons/fa";
import "../CSS/ProductionFlow.css";
import { SlSettings } from "react-icons/sl";
import { FaBoxesPacking } from "react-icons/fa6";

function ProductionFlow() {
  return (
    <>
      <section class="ftco-section6 bg-light ftco-no-pt">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 heading-section text-center mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <span class="subheading">Production Flows</span>
              <h2 class="mb-4">How it Works</h2>
            </div>
          </div>
          <div class="row justify-content-center g-0">
            <div class="col-md-4 text-center d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div class="flow-wrap flow-wrap-right">
                <div class="icon1">
                  <div class="d-flex align-items-center justify-content-center">
                    <small>01</small>
                  </div>
                  <span class="flaticon-calculator"><FaCalculator /></span>
                </div>
                <div class="text">
                  <h2>Get A Free Quote</h2>
                  <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div class="flow-wrap flow-wrap-2">
                <div class="icon2">
                  <div class="d-flex align-items-center justify-content-center">
                    <small>02</small>
                  </div>
                  <span class="flaticon-production"><SlSettings /></span>
                </div>
                <div class="text">
                  <h2>Production</h2>
                  <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div class="flow-wrap flow-wrap-left">
                <div class="icon1">
                  <div class="d-flex align-items-center justify-content-center">
                    <small>03</small>
                  </div>
                  <span class="flaticon-package"><FaBoxesPacking /></span>
                </div>
                <div class="text">
                  <h2>Delivery &amp; Assembly</h2>
                  <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>
            </div>
            <div class="col-md-12 text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <p>
                <a href="#" class="btn btn-primary py-3 px-4">
                  Learn More
                </a>{" "}
                <a href="#" class="btn btn-secondary py-3 px-4">
                  Get A Request
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductionFlow;
