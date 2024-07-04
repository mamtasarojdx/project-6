import React from "react";
import "../CSS/AdminHeader.css";
import { IoIosMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import PageBodyWrapper from "./PageBodyWrapper";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { RiAlertFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { TbAirBalloon } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { IoPowerSharp } from "react-icons/io5";
import SideNavbar from "./SideNavbar";

function AdminHeader() {
  return (
    <>
      {/* ----------------menu icon--------------- */}
      <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row navbar-1">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <div class="me-3 menu-icon1">
            <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
              <span class="icon-menu">
                <IoIosMenu />
              </span>
            </button>
          </div>

          {/* ---------------star admin Image------------ */}
          <div>
            <a class="navbar-brand brand-logo" href="index.html">
              <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/logo.svg" alt="logo" />
            </a>
            <a class="navbar-brand brand-logo-mini" href="index.html">
              <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/logo-mini.svg" alt="logo" className="admin-logo-img" />
            </a>
          </div>
        </div>

        {/* --------------good morning text------------------ */}
        <div class="navbar-menu-wrapper d-flex align-items-top">
          <ul class="navbar-nav">
            <li class="nav-item font-weight-semibold d-none d-lg-block ms-0">
              <h1 class="welcome-text">
                Good Morning, <span class="span-john ">John Doe</span>
              </h1>
              <h3 class="performance-text">Your performance summary this week </h3>
            </li>
          </ul>

          {/* -------------------select category-------------------- */}
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown d-none d-lg-block">
              <a
                class="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split"
                id="messageDropdown"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="select-text">Select Category </span>
                <i class="down-icon">
                  <IoChevronDownOutline />
                </i>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                <a class="dropdown-item py-3">
                  <p class="mb-0 font-weight-medium float-left">Select category</p>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-item-content flex-grow py-2">
                    <p class="preview-subject ellipsis font-weight-medium text-dark">Bootstrap Bundle </p>
                    <p class="fw-light small-text mb-0">This is a Bundle featuring 16 unique dashboards</p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-item-content flex-grow py-2">
                    <p class="preview-subject ellipsis font-weight-medium text-dark">Angular Bundle</p>
                    <p class="fw-light small-text mb-0">Everything you’ll ever need for your Angular projects</p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-item-content flex-grow py-2">
                    <p class="preview-subject ellipsis font-weight-medium text-dark">VUE Bundle</p>
                    <p class="fw-light small-text mb-0">Bundle of 6 Premium Vue Admin Dashboard</p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-item-content flex-grow py-2">
                    <p class="preview-subject ellipsis font-weight-medium text-dark">React Bundle</p>
                    <p class="fw-light small-text mb-0">Bundle of 8 Premium React Admin Dashboard</p>
                  </div>
                </a>
              </div>
            </li>

            {/* -------------------calender input---------------------- */}
            <li class="nav-item d-none d-lg-block">
              <div id="datepicker-popup" class="input-group date datepicker navbar-date-picker">
                <span class="input-group-addon input-group-prepend border-right">
                  <span class="icon-calendar input-group-text calendar-icon">
                    <FaRegCalendarAlt />
                  </span>
                </span>

                <input type="text" class="form-control" />
              </div>
            </li>

            {/* ---------------search bar------------ */}
            <li class="nav-item">
              <form class="search-form" action="#">
                <i class="icon-search">
                  <IoSearch />
                </i>
                <input type="search" class="form-control" placeholder="Search Here" title="Search here" />
              </form>
            </li>

            {/* -----------------mail icon--------------- */}
            <li class="nav-item dropdown">
              <a class="nav-link count-indicator" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                <i class="icon-mail icon-lg">
                  <MdMailOutline />
                </i>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                <a class="dropdown-item py-3 border-bottom">
                  <p class="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                  <span class="badge badge-pill badge-primary float-right">View all</span>
                </a>
                <a class="dropdown-item preview-item py-3">
                  <div class="preview-thumbnail">
                    <i class="mdi mdi-alert m-auto text-primary">
                      <RiAlertFill />
                    </i>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject fw-normal text-dark mb-1">Application Error</h6>
                    <p class="fw-light small-text mb-0"> Just now </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item py-3">
                  <div class="preview-thumbnail">
                    <i class="mdi mdi-settings m-auto text-primary">
                      <IoSettingsSharp />
                    </i>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject fw-normal text-dark mb-1">Settings</h6>
                    <p class="fw-light small-text mb-0"> Private message </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item py-3">
                  <div class="preview-thumbnail">
                    <i class="mdi mdi-airballoon m-auto text-primary">
                      <TbAirBalloon />
                    </i>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject fw-normal text-dark mb-1">New user registration</h6>
                    <p class="fw-light small-text mb-0"> 2 days ago </p>
                  </div>
                </a>
              </div>
            </li>

            {/* -----------------------bell icon-------------- */}
            <li class="nav-item dropdown">
              <a class="nav-link count-indicator" id="countDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="icon-bell">
                  <CiBellOn />
                </i>
                <span class="count"></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="countDropdown">
                <a class="dropdown-item py-3">
                  <p class="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                  <span class="badge badge-pill badge-primary float-right">View all</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face10.jpg" alt="image" class="img-sm profile-pic" />
                  </div>
                  <div class="preview-item-content flex-grow py-2">
                    <p class="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                    <p class="fw-light small-text mb-0"> The meeting is cancelled </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face12.jpg" alt="image" class="img-sm profile-pic" />
                  </div>
                  <div class="preview-item-content flex-grow py-2">
                    <p class="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                    <p class="fw-light small-text mb-0"> The meeting is cancelled </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face1.jpg" alt="image" class="img-sm profile-pic" />
                  </div>
                  <div class="preview-item-content flex-grow py-2">
                    <p class="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                    <p class="fw-light small-text mb-0"> The meeting is cancelled </p>
                  </div>
                </a>
              </div>
            </li>

            {/* -----------------------user image--------------- */}
            <li class="nav-item dropdown d-none d-lg-block user-dropdown">
              <a class="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="img-xs rounded-circle" src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face8.jpg" alt="Profile image" />{" "}
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <div class="dropdown-header text-center">
                  <img
                    class="img-md rounded-circle"
                    src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face8.jpg"
                    alt="Profile image"
                  />
                  <p class="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                  <p class="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
                </div>
                <a class="dropdown-item">
                  <i class="dropdown-item-icon mdi mdi-account-outline text-primary me-2">
                    <FaRegUser />
                  </i>{" "}
                  My Profile <span class="badge badge-pill badge-danger">1</span>
                </a>
                <a class="dropdown-item">
                  <i class="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2">
                    <MdOutlineMessage />
                  </i>{" "}
                  Messages
                </a>
                <a class="dropdown-item">
                  <i class="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2">
                    <FaRegCalendarCheck />
                  </i>{" "}
                  Activity
                </a>
                <a class="dropdown-item">
                  <i class="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2">
                    <FiHelpCircle />
                  </i>{" "}
                  FAQ
                </a>
                <a class="dropdown-item">
                  <i class="dropdown-item-icon mdi mdi-power text-primary me-2">
                    <IoPowerSharp />
                  </i>
                  Sign Out
                </a>
              </div>
            </li>
          </ul>

          <div class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
            <span class="icon-menu">
              <IoIosMenu />
            </span>
          </div>
        </div>
      </nav>

      <PageBodyWrapper />
    </>
  );
}

export default AdminHeader;
