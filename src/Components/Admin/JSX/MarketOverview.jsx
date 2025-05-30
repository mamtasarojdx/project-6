import React from "react";
import "../CSS/MarketOverview.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import ApexColumnBarChart from "./ApexColumnBarChart";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoMdCalendar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import DonutChart from "./DonutChart";
import ApexLineChart from "./ApexLineChart";
import { CiFlag1 } from "react-icons/ci";

function MarketOverview() {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col-lg-8 d-flex flex-column">
            {/* ------------Market Overview------------ */}
            <div class="row flex-grow">
              <div class="col-12 grid-margin stretch-card">
                <div class="card card-rounded">
                  <div class="card-body">
                    <div class="d-sm-flex justify-content-between align-items-start">
                      <div>
                        <h4 class="card-title card-title-dash">Market Overview</h4>
                        <p class="card-subtitle card-subtitle-dash market-overviewText">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                      </div>
                      <div>
                        <div class="dropdown">
                          <button
                            class="btn3 btn3-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0"
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            This month <MdKeyboardArrowDown />
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                            <h6 class="dropdown-header">Settings</h6>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                              Separated link
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-sm-flex align-items-center mt-1 justify-content-between">
                      <div class="d-sm-flex align-items-center mt-4 justify-content-between">
                        <h2 class="me-2 fw-bold">$36,2531.00</h2>
                        <h4 class="me-2">USD</h4>
                        <h4 class="text-success">(+1.37%)</h4>
                      </div>
                    </div>

                    <div class="chartjs-bar-wrapper mt-3">
                      <div class="me-3">
                        <div id="marketing-overview-legend">
                          <div class="last-week">
                            <ul>
                              <li class="text-muted text-small">
                                <span style={{ backgroundColor: "#52CDFF" }}></span>Last week
                              </li>
                              <li class="text-muted text-small">
                                <span style={{ backgroundColor: "#1F3BB3" }}></span>This week
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ApexColumnBarChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------Pending Requests------------ */}
            <div class="row flex-grow mt-4">
              <div class="col-12 grid-margin stretch-card">
                <div class="card card-rounded">
                  <div class="card-body">
                    <div class="d-sm-flex justify-content-between align-items-start">
                      <div>
                        <h4 class="card-title card-title-dash">Pending Requests</h4>
                        <p class="card-subtitle card-subtitle-dash">You have 50+ new requests</p>
                      </div>
                      <div>
                        <button class="btn2 btn-primary btn-lg text-white mb-0 me-0" type="button">
                          <i class="mdi mdi-account-plus">
                            <IoPersonAddSharp />
                          </i>
                          Add new member
                        </button>
                      </div>
                    </div>
                    <div class="table-responsive  mt-1">
                      <table class="table select-table">
                        <thead>
                          <tr>
                            <th>
                              <div class="form-check form-check-flat mt-0">
                                <label class="form-check-label">
                                  <input type="checkbox" class="form-check-input" aria-checked="false" />
                                  <i class="input-helper"></i>
                                  <i class="input-helper"></i>
                                </label>
                              </div>
                            </th>
                            <th>Customer</th>
                            <th>Company</th>
                            <th>Progress</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="form-check form-check-flat mt-0">
                                <label class="form-check-label">
                                  <input type="checkbox" class="form-check-input" aria-checked="false" />
                                  <i class="input-helper"></i>
                                  <i class="input-helper"></i>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex ">
                                <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face1.jpg" alt="" />
                                <div>
                                  <h6>Brandon Washington</h6>
                                  <p>Head admin</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h6>Company name 1</h6>
                              <p>company type</p>
                            </td>
                            <td>
                              <div>
                                <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                  <p class="text-success">79%</p>
                                  <p>85/162</p>
                                </div>
                                <div class="progress progress-md">
                                  <div
                                    class="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "85%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="badge badge-opacity-warning">In progress</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check form-check-flat mt-0">
                                <label class="form-check-label">
                                  <input type="checkbox" class="form-check-input" aria-checked="false" />
                                  <i class="input-helper"></i>
                                  <i class="input-helper"></i>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex">
                                <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face2.jpg" alt="" />
                                <div>
                                  <h6>Laura Brooks</h6>
                                  <p>Head admin</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h6>Company name 1</h6>
                              <p>company type</p>
                            </td>
                            <td>
                              <div>
                                <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                  <p class="text-success">65%</p>
                                  <p>85/162</p>
                                </div>
                                <div class="progress progress-md">
                                  <div
                                    class="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "65%" }}
                                    aria-valuenow="65"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="badge badge-opacity-warning">In progress</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check form-check-flat mt-0">
                                <label class="form-check-label">
                                  <input type="checkbox" class="form-check-input" aria-checked="false" />
                                  <i class="input-helper"></i>
                                  <i class="input-helper"></i>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex">
                                <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face3.jpg" alt="" />
                                <div>
                                  <h6>Wayne Murphy</h6>
                                  <p>Head admin</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h6>Company name 1</h6>
                              <p>company type</p>
                            </td>
                            <td>
                              <div>
                                <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                  <p class="text-success">65%</p>
                                  <p>85/162</p>
                                </div>
                                <div class="progress progress-md">
                                  <div
                                    class="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: "38%" }}
                                    aria-valuenow="38"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="badge badge-opacity-warning">In progress</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check form-check-flat mt-0">
                                <label class="form-check-label">
                                  <input type="checkbox" class="form-check-input" aria-checked="false" />
                                  <i class="input-helper"></i>
                                  <i class="input-helper"></i>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex">
                                <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face4.jpg" alt="" />
                                <div>
                                  <h6>Matthew Bailey</h6>
                                  <p>Head admin</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h6>Company name 1</h6>
                              <p>company type</p>
                            </td>
                            <td>
                              <div>
                                <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                  <p class="text-success">65%</p>
                                  <p>85/162</p>
                                </div>
                                <div class="progress progress-md">
                                  <div
                                    class="progress-bar bg-danger"
                                    role="progressbar"
                                    style={{ width: "15%" }}
                                    aria-valuenow="15"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="badge badge-opacity-danger">Pending</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check form-check-flat mt-0">
                                <label class="form-check-label">
                                  <input type="checkbox" class="form-check-input" aria-checked="false" />
                                  <i class="input-helper"></i>
                                  <i class="input-helper"></i>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex">
                                <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face5.jpg" alt="" />
                                <div>
                                  <h6>Katherine Butler</h6>
                                  <p>Head admin</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h6>Company name 1</h6>
                              <p>company type</p>
                            </td>
                            <td>
                              <div>
                                <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                  <p class="text-success">65%</p>
                                  <p>85/162</p>
                                </div>
                                <div class="progress progress-md">
                                  <div
                                    class="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "65%" }}
                                    aria-valuenow="65"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="badge badge-opacity-success">Completed</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------Recent Events------------ */}
            <div class="row flex-grow mb-4">
              <div class="col-md-6 col-lg-6 grid-margin stretch-card1 mt-4 ">
                <div class="card card-rounded">
                  <div class=" card-rounded recent-card">
                    <h4 class="card-title  card-title-dash">Recent Events</h4>
                    <div class="list align-items-center border-bottom py-2">
                      <div class="wrapper w-100">
                        <p class="mb-2 font-weight-medium">Change in Directors</p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center">
                            <i class="mdi mdi-calendar text-muted me-1">
                              <IoMdCalendar />
                            </i>
                            <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="list align-items-center border-bottom py-2">
                      <div class="wrapper w-100">
                        <p class="mb-2 font-weight-medium">Other Events</p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center">
                            <i class="mdi mdi-calendar text-muted me-1">
                              <IoMdCalendar />
                            </i>
                            <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="list align-items-center border-bottom py-2">
                      <div class="wrapper w-100">
                        <p class="mb-2 font-weight-medium">Quarterly Report</p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center">
                            <i class="mdi mdi-calendar text-muted me-1">
                              <IoMdCalendar />
                            </i>
                            <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="list align-items-center border-bottom py-2">
                      <div class="wrapper w-100">
                        <p class="mb-2 font-weight-medium">Change in Directors</p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center">
                            <i class="mdi mdi-calendar text-muted me-1">
                              <IoMdCalendar />
                            </i>
                            <p class="mb-0 text-small text-muted">Mar 14, 2019</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="list align-items-center pt-3">
                      <div class="wrapper w-100 mb-2">
                        <p class="mb-0">
                          <a href="#" class="fw-bold text-primary">
                            Show all{" "}
                            <i class="mdi mdi-arrow-right ms-2">
                              <FaArrowRight />
                            </i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------------Activities------------ */}
              <div class="col-md-6 col-lg-6 grid-margin stretch-card2 mt-4 ">
                <div class="card card-rounded">
                  <div class="card-rounded activity-card">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <h4 class="card-title card-title-dash">Activities</h4>
                      <p class="mb-0">20 finished, 5 remaining</p>
                    </div>
                    <ul class="bullet-line-list">
                      <li>
                        <div class="d-flex justify-content-between">
                          <div>
                            <span class="text-light-green">Ben Tossell</span> <span className="second-text">assign you a task</span>
                          </div>
                          <p>Just now</p>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between">
                          <div>
                            <span class="text-light-green">Oliver Noah</span> <span className="second-text">assign you a task</span>
                          </div>
                          <p>1h</p>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between">
                          <div>
                            <span class="text-light-green">Jack William</span> <span className="second-text">assign you a task</span>
                          </div>
                          <p>1h</p>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between">
                          <div>
                            <span class="text-light-green">Leo Lucas</span> <span className="second-text">assign you a task</span>
                          </div>
                          <p>1h</p>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between">
                          <div>
                            <span class="text-light-green">Thomas Henry</span> <span className="second-text">assign you a task</span>
                          </div>
                          <p>1h</p>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between">
                          <div>
                            <span class="text-light-green">Ben Tossell</span> <span className="second-text">assign you a task</span>
                          </div>
                          <p>1h</p>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between">
                          <div>
                            <span class="text-light-green">Ben Tossell</span> <span className="second-text">assign you a task</span>
                          </div>
                          <p>1h</p>
                        </div>
                      </li>
                    </ul>
                    <div class="list align-items-center pt-3">
                      <div class="wrapper w-100">
                        <p class="mb-0">
                          <a href="#" class="fw-bold text-primary">
                            Show all{" "}
                            <i class="mdi mdi-arrow-right ms-2">
                              <FaArrowRight />
                            </i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex flex-column">
            {/* ------------Todo list------------ */}
            <div class="row flex-grow">
              <div class="col-12 grid-margin todo-card">
                <div class="card card-rounded ">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="d-flex justify-content-between align-items-center">
                          <h4 class="card-title card-title-dash">Todo list</h4>
                          <div class="add-items d-flex mb-0">
                            <button class="add btn4 btn4-icons btn-rounded todo-list-add-btn text-white me-0 pl-12p">
                              <i class="mdi mdi-plus">
                                <FaPlus />
                              </i>
                            </button>
                          </div>
                        </div>
                        <div class="list-wrapper">
                          <ul class="todo-list todo-list-rounded">
                            <li class="d-block">
                              <div class="form-check w-100">
                                <label class="form-check-label">
                                  <input class="checkbox" type="radio" /> <span className="lorem-text">Lorem Ipsum is simply dummy text of the printing</span>{" "}
                                  <i class="input-helper rounded"></i>
                                  <i class="input-helper"></i>
                                </label>
                                <div class="d-flex mt-2">
                                  <div class="ps-4 text-small me-3">24 June 2020</div>
                                  <div class="badge badge-opacity-warning me-3">Due tomorrow</div>
                                  <i class="mdi mdi-flag ms-2 flag-color">
                                    <CiFlag1 />
                                  </i>
                                </div>
                              </div>
                            </li>
                            <li class="d-block">
                              <div class="form-check w-100">
                                <label class="form-check-label">
                                  <input class="checkbox" type="radio" /> <span className="lorem-text">Lorem Ipsum is simply dummy text of the printing</span>{" "}
                                  <i class="input-helper rounded"></i>
                                  <i class="input-helper"></i>
                                </label>
                                <div class="d-flex mt-2">
                                  <div class="ps-4 text-small me-3">23 June 2020</div>
                                  <div class="badge badge-opacity-success me-3">Done</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="form-check w-100">
                                <label class="form-check-label">
                                  <input class="checkbox" type="radio" /> <span className="lorem-text">Lorem Ipsum is simply dummy text of the printing</span>{" "}
                                  <i class="input-helper rounded"></i>
                                  <i class="input-helper"></i>
                                </label>
                                <div class="d-flex mt-2">
                                  <div class="ps-4 text-small me-3">24 June 2020</div>
                                  <div class="badge badge-opacity-success me-3">Done</div>
                                </div>
                              </div>
                            </li>
                            <li class="border-bottom-0">
                              <div class="form-check w-100">
                                <label class="form-check-label">
                                  <input class="checkbox" type="radio" /> <span className="lorem-text">Lorem Ipsum is simply dummy text of the printing</span>{" "}
                                  <i class="input-helper rounded"></i>
                                  <i class="input-helper"></i>
                                </label>
                                <div class="d-flex mt-2">
                                  <div class="ps-4 text-small me-3">24 June 2020</div>
                                  <div class="badge badge-opacity-danger me-3">Expired</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------Type By Amount------------ */}
            <div class="row flex-grow mt-4">
              <div class="col-12 grid-margin todo-card">
                <div class="card card-rounded">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          <h4 class="card-title card-title-dash">Type By Amount</h4>
                        </div>

                        <DonutChart />

                        <div id="doughnut-chart-legend" class="doughnut-chart text-center">
                          <div class="chartjs-legend">
                            <ul class="justify-content-center">
                              <li>
                                <span style={{ backgroundColor: "#1F3BB3" }}></span>Total
                              </li>
                              <li>
                                <span style={{ backgroundColor: "#FDD0C7" }}></span>Net
                              </li>
                              <li>
                                <span style={{ backgroundColor: "#52CDFF" }}></span>Gross
                              </li>
                              <li>
                                <span style={{ backgroundColor: "#81DADA" }}></span>AVG
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------Leave Report------------ */}
            <div class="row flex-grow mt-4">
              <div class="col-12 grid-margin todo-card">
                <div class="card card-rounded">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <h4 class="card-title card-title-dash">Leave Report</h4>
                          </div>
                          <div>
                            <div class="dropdown">
                              <button
                                class="btn3 btn3-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0"
                                type="button"
                                id="dropdownMenuButton3"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                {" "}
                                Month Wise{" "}
                              </button>
                              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                <h6 class="dropdown-header">week Wise</h6>
                                <a class="dropdown-item" href="#">
                                  Year Wise
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="leave-report">
                          <ApexLineChart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------Top Performer------------ */}
            <div class="row flex-grow mt-4 mb-5">
              <div class="col-12 grid-margin Performer-card">
                <div class="card card-rounded Performer-card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <h4 class="card-title card-title-dash">Top Performer</h4>
                          </div>
                        </div>
                        <div class="mt-3">
                          <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                            <div class="d-flex">
                              <img
                                class="img-sm rounded-10"
                                src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face1.jpg"
                                alt="profile"
                              />
                              <div class="wrapper ms-3">
                                <p class="ms-1 mb-1 fw-bold">Brandon Washington</p>
                                <small class="text-muted mb-0">162543</small>
                              </div>
                            </div>
                            <div class="text-muted text-small">1h ago</div>
                          </div>
                          <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                            <div class="d-flex">
                              <img
                                class="img-sm rounded-10"
                                src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face2.jpg"
                                alt="profile"
                              />
                              <div class="wrapper ms-3">
                                <p class="ms-1 mb-1 fw-bold">Wayne Murphy</p>
                                <small class="text-muted mb-0">162543</small>
                              </div>
                            </div>
                            <div class="text-muted text-small">1h ago</div>
                          </div>
                          <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                            <div class="d-flex">
                              <img
                                class="img-sm rounded-10"
                                src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face3.jpg"
                                alt="profile"
                              />
                              <div class="wrapper ms-3">
                                <p class="ms-1 mb-1 fw-bold">Katherine Butler</p>
                                <small class="text-muted mb-0">162543</small>
                              </div>
                            </div>
                            <div class="text-muted text-small">1h ago</div>
                          </div>
                          <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                            <div class="d-flex">
                              <img
                                class="img-sm rounded-10"
                                src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face4.jpg"
                                alt="profile"
                              />
                              <div class="wrapper ms-3">
                                <p class="ms-1 mb-1 fw-bold">Matthew Bailey</p>
                                <small class="text-muted mb-0">162543</small>
                              </div>
                            </div>
                            <div class="text-muted text-small">1h ago</div>
                          </div>
                          <div class="wrapper d-flex align-items-center justify-content-between pt-2">
                            <div class="d-flex">
                              <img
                                class="img-sm rounded-10"
                                src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face5.jpg"
                                alt="profile"
                              />
                              <div class="wrapper ms-3">
                                <p class="ms-1 mb-1 fw-bold">Rafell John</p>
                                <small class="text-muted mb-0">Alaska, USA</small>
                              </div>
                            </div>
                            <div class="text-muted text-small">1h ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketOverview;
