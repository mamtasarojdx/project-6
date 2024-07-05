import React from "react";
import SideNavbar from "./SideNavbar";
import "../CSS/PageBodyWrapper.css";
import { CiSettings } from "react-icons/ci";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import MainPanel from "./MainPanel";

function PageBodyWrapper() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleSettingsPanel = () => {
    setSettingsOpen(!settingsOpen);
  };
  return (
    <>
      <div className="container-fluid page-body-wrapper">
        {/* ------------------Setting Icon---------------- */}
        <div className="theme-setting-wrapper" onClick={toggleSettingsPanel}>
          <div id="settings-trigger">
            <i className="ti-settings">
              <CiSettings />
            </i>
          </div>
          <div id="theme-settings" className={`settings-panel ${settingsOpen ? "open" : ""}`}>
            <i className="settings-close ti-close" onClick={toggleSettingsPanel}>
              <IoMdClose />
            </i>
            <p className="settings-heading">SIDEBAR SKINS</p>
            <div className="sidebar-bg-options selected" id="sidebar-light-theme">
              <div className="img-ss rounded-circle bg-light border me-3"></div>Light
            </div>
            <div className="sidebar-bg-options" id="sidebar-dark-theme">
              <div className="img-ss rounded-circle bg-dark border me-3"></div>Dark
            </div>
            <p className="settings-heading mt-2">HEADER SKINS</p>
            <div className="color-tiles mx-0 px-4">
              <div className="tiles success"></div>
              <div className="tiles warning"></div>
              <div className="tiles danger"></div>
              <div className="tiles info"></div>
              <div className="tiles dark"></div>
              <div className="tiles default"></div>
            </div>
          </div>
        </div>
        {/* --------------------Right Sidebar------------- */}
        <div id="right-sidebar" class="settings-panel">
          <i class="settings-close ti-close"></i>
          <ul class="nav nav-tabs border-top" id="setting-panel" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="todo-tab" data-bs-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">
                TO DO LIST
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="chats-tab" data-bs-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">
                CHATS
              </a>
            </li>
          </ul>
          <div class="tab-content" id="setting-content">
            <div class="tab-pane fade show active scroll-wrapper ps ps--active-y" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
              <div class="add-items d-flex px-3 mb-0">
                <form class="form w-100">
                  <div class="form-group d-flex">
                    <input type="text" class="form-control todo-list-input" placeholder="Add To-do" />
                    <button type="submit" class="add btn btn-primary todo-list-add-btn" id="add-task">
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <div class="list-wrapper px-3">
                <ul class="d-flex flex-column-reverse todo-list">
                  <li>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" />
                        Team review meeting at 3.00 PM
                        <i class="input-helper"></i>
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" />
                        Prepare for presentation
                        <i class="input-helper"></i>
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" />
                        Resolve all the low priority tickets due today
                        <i class="input-helper"></i>
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li class="completed">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" checked="" />
                        Schedule meeting for next week
                        <i class="input-helper"></i>
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li class="completed">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" checked="" />
                        Project review
                        <i class="input-helper"></i>
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                </ul>
              </div>
              <h4 class="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
              <div class="events pt-4 px-3">
                <div class="wrapper d-flex mb-2">
                  <i class="ti-control-record text-primary me-2"></i>
                  <span>Feb 11 2018</span>
                </div>
                <p class="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
                <p class="text-gray mb-0">The total number of sessions</p>
              </div>
              <div class="events pt-4 px-3">
                <div class="wrapper d-flex mb-2">
                  <i class="ti-control-record text-primary me-2"></i>
                  <span>Feb 7 2018</span>
                </div>
                <p class="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                <p class="text-gray mb-0 ">Call Sarah Graves</p>
              </div>
              <div class="ps__rail-x" style={{ left: "0px", bottom: "0px" }}>
                <div class="ps__thumb-x" tabindex="0" style={{ left: "0px", width: "0px" }}></div>
              </div>
              <div class="ps__rail-y" style={{ top: "0px", height: "331px", right: "0px" }}>
                <div class="ps__thumb-y" tabindex="0" style={{ top: "0px", height: "141px" }}></div>
              </div>
            </div>

            <div class="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
              <div class="d-flex align-items-center justify-content-between border-bottom">
                <p class="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                <small class="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">See All</small>
              </div>
              <ul class="chat-list">
                <li class="list active">
                  <div class="profile">
                    <img src="images/faces/face1.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Thomas Douglas</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">19 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="images/faces/face2.jpg" alt="image" />
                    <span class="offline"></span>
                  </div>
                  <div class="info">
                    <div class="wrapper d-flex">
                      <p>Catherine</p>
                    </div>
                    <p>Away</p>
                  </div>
                  <div class="badge badge-success badge-pill my-auto mx-2">4</div>
                  <small class="text-muted my-auto">23 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="images/faces/face3.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Daniel Russell</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">14 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="images/faces/face4.jpg" alt="image" />
                    <span class="offline"></span>
                  </div>
                  <div class="info">
                    <p>James Richardson</p>
                    <p>Away</p>
                  </div>
                  <small class="text-muted my-auto">2 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="images/faces/face5.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Madeline Kennedy</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">5 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="images/faces/face6.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Sarah Graves</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">47 min</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <MainPanel />
      </div>
    </>
  );
}

export default PageBodyWrapper;
