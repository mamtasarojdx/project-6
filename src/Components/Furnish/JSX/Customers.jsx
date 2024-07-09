import React from "react";
import "../CSS/HappyCustomers.css";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa";

function Customers() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="col-lg-12 col-md-12  d-flex justify-content-center mt-4">
                        <div className="col-lg-4 col-md-4  ">
                          <div class="testimony-wrap">
                            <div class="icon d-flex align-items-center justify-content-center">
                              <span class="fa fa-quote-left">
                                <FaQuoteLeft />
                              </span>
                            </div>
                            <div class="text">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                              </p>
                              <div class="d-flex align-items-center">
                                <div
                                  class="user-img"
                                  style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/person_2.jpg.webp)" }}
                                ></div>
                                <div class="ps-3">
                                  <p class="name">Roger Scott</p>
                                  <span class="position">Marketing Manager</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div class="testimony-wrap">
                            <div class="icon d-flex align-items-center justify-content-center">
                              <span class="fa fa-quote-left">
                                <FaQuoteLeft />
                              </span>
                            </div>
                            <div class="text">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                              </p>
                              <div class="d-flex align-items-center">
                                <div
                                  class="user-img"
                                  style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/person_3.jpg.webp)" }}
                                ></div>
                                <div class="ps-3">
                                  <p class="name">Roger Scott</p>
                                  <span class="position">Marketing Manager</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="col-lg-4 col-md-4 ">
                          <div class="testimony-wrap">
                            <div class="icon d-flex align-items-center justify-content-center">
                              <span class="fa fa-quote-left">
                                <FaQuoteLeft />
                              </span>
                            </div>
                            <div class="text">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                              </p>
                              <div class="d-flex align-items-center">
                                <div
                                  class="user-img"
                                  style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/person_4.jpg.webp)" }}
                                ></div>
                                <div class="ps-3">
                                  <p class="name">Roger Scott</p>
                                  <span class="position">Marketing Manager</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="col-lg-12 col-md-12  d-flex justify-content-center mt-4">
                        <div className="col-lg-4 col-md-4">
                          <div class="testimony-wrap">
                            <div class="icon d-flex align-items-center justify-content-center">
                              <span class="fa fa-quote-left"></span>
                            </div>
                            <div class="text">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                              </p>
                              <div class="d-flex align-items-center">
                                <div
                                  class="user-img"
                                  style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/person_2.jpg.webp)" }}
                                ></div>
                                <div class="ps-3">
                                  <p class="name">Roger Scott</p>
                                  <span class="position">Marketing Manager</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          {" "}
                          <div class="testimony-wrap">
                            <div class="icon d-flex align-items-center justify-content-center">
                              <span class="fa fa-quote-left"></span>
                            </div>
                            <div class="text">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                              </p>
                              <div class="d-flex align-items-center">
                                <div
                                  class="user-img"
                                  style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/person_1.jpg.webp)" }}
                                ></div>
                                <div class="ps-3">
                                  <p class="name">Roger Scott</p>
                                  <span class="position">Marketing Manager</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div class="testimony-wrap">
                            <div class="icon d-flex align-items-center justify-content-center">
                              <span class="fa fa-quote-left"></span>
                            </div>
                            <div class="text">
                              <p class="mb-4">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                              </p>
                              <div class="d-flex align-items-center">
                                <div
                                  class="user-img"
                                  style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/person_2.jpg.webp)" }}
                                ></div>
                                <div class="ps-3">
                                  <p class="name">Roger Scott</p>
                                  <span class="position">Marketing Manager</span>
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
              <button class="carousel-control-prev control-prev3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
