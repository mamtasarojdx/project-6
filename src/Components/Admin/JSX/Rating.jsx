import React from "react";
import "../CSS/Rating.css";
import { CiShare2 } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";
import { RiExportLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa6";
import { TiArrowSortedUp } from "react-icons/ti";

function ContactBar() {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="d-sm-flex align-items-center justify-content-between border-bottom">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">
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
                  <i class="icon-share">
                    <CiShare2 />
                  </i>{" "}
                  Share
                </a>
                <a href="#" class="btn btn-otline-dark">
                  <i class="icon-printer">
                    <FiPrinter />
                  </i>{" "}
                  Print
                </a>
                <a href="#" class="btn btn-primary text-white me-0">
                  <i class="icon-download">
                    <RiExportLine />
                  </i>{" "}
                  Export
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="statistics-details d-flex align-items-center justify-content-between">
              <div>
                <p class="statistics-title">Bounce Rate</p>
                <h3 class="rate-percentage">32.53%</h3>
                <p class="text-danger d-flex">
                  <i class="mdi mdi-menu-down">
                    <FaCaretDown />
                  </i>
                  <span>-0.5%</span>
                </p>
              </div>
              <div>
                <p class="statistics-title">Page Views</p>
                <h3 class="rate-percentage">7,682</h3>
                <p class="text-success d-flex">
                  <i class="mdi mdi-menu-up">
                    <TiArrowSortedUp />
                  </i>
                  <span>+0.1%</span>
                </p>
              </div>
              <div>
                <p class="statistics-title">New Sessions</p>
                <h3 class="rate-percentage">68.8</h3>
                <p class="text-danger d-flex">
                  <i class="mdi mdi-menu-down">
                    <FaCaretDown />
                  </i>
                  <span>68.8</span>
                </p>
              </div>
              <div class="d-none d-md-block">
                <p class="statistics-title">Avg. Time on Site</p>
                <h3 class="rate-percentage">2m:35s</h3>
                <p class="text-success d-flex">
                  <i class="mdi mdi-menu-down">
                    <FaCaretDown />
                  </i>
                  <span>+0.8%</span>
                </p>
              </div>
              <div class="d-none d-md-block">
                <p class="statistics-title">New Sessions</p>
                <h3 class="rate-percentage">68.8</h3>
                <p class="text-danger d-flex">
                  <i class="mdi mdi-menu-down">
                    <FaCaretDown />
                  </i>
                  <span>68.8</span>
                </p>
              </div>
              <div class="d-none d-md-block">
                <p class="statistics-title">Avg. Time on Site</p>
                <h3 class="rate-percentage">2m:35s</h3>
                <p class="text-success d-flex">
                  <i class="mdi mdi-menu-down">
                    <FaCaretDown />
                  </i>
                  <span>+0.8%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactBar;
