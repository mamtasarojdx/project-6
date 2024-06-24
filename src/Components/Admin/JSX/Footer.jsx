import React from "react";
import Rating from "./Rating";
import MarketOverview from "./MarketOverview";

function Footer() {
  return (
    <>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-sm-12">
              <div class="home-tab">
                {/* <div class="d-sm-flex align-items-center justify-content-between border-bottom">
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active ps-0"
                        id="home-tab"
                        data-bs-toggle="tab"
                        href="#overview"
                        role="tab"
                        aria-controls="overview"
                        aria-selected="true"
                      >
                        Overview
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#audiences" role="tab" aria-selected="false">
                        Audiences
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#demographics" role="tab" aria-selected="false">
                        Demographics
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link border-0" id="more-tab" data-bs-toggle="tab" href="#more" role="tab" aria-selected="false">
                        More
                      </a>
                    </li>
                  </ul>
                  <div>
                    <div class="btn-wrapper">
                      <a href="#" class="btn btn-otline-dark align-items-center">
                        <i class="icon-share"></i> Share
                      </a>
                      <a href="#" class="btn btn-otline-dark">
                        <i class="icon-printer"></i> Print
                      </a>
                      <a href="#" class="btn btn-primary text-white me-0">
                        <i class="icon-download"></i> Export
                      </a>
                    </div>
                  </div>
                </div> */}
                <div class="tab-content tab-content-basic">
                  <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                    <Rating />
                    <MarketOverview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Premium{" "}
              <a href="https://www.bootstrapdash.com/" target="_blank">
                Bootstrap admin template
              </a>{" "}
              from BootstrapDash.
            </span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
