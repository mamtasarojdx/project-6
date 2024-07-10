import React, { useEffect } from "react";
import "../CSS/HappyCustomers.css";
import { tns } from "tiny-slider/src/tiny-slider";
import { FaQuoteLeft } from "react-icons/fa";

function HappyCustomers() {
  useEffect(() => {
    const slider = tns({
      container: '#tns1',
      items: 1,
      slideBy: 'page',
      autoplay: true,
      controls: true,
      nav: false,
      autoplayButtonOutput: false,
      responsive: {
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });

    return () => {
      slider.destroy(); // Clean up slider on component unmount
    };
  }, []);

  return (
    <>
      <section class="ftco-section5 testimony-section bg-light">
        <div class="container-xl">
          <div class="row justify-content-center pb-4">
            <div class="col-lg-7 text-center heading-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <span class="subheading">Testimonial</span>
              <h2 class="mb-3">Happy Customers</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              <div class="tns-outer" id="tns1-ow">
                <div class="tns-nav" aria-label="Carousel Pagination">
                  <button type="button" data-nav="0" aria-controls="tns1" aria-label="Carousel Page 1 (Current Slide)" class="tns-nav-active"></button>
                  <button type="button" data-nav="1" aria-controls="tns1" aria-label="Carousel Page 2" class="" tabindex="-1"></button>
                  <button type="button" data-nav="2" tabindex="-1" aria-controls="tns1" style={{ display: "none" }} aria-label="Carousel Page 3"></button>
                  <button type="button" data-nav="3" tabindex="-1" aria-controls="tns1" style={{ display: "none" }} aria-label="Carousel Page 4"></button>
                  <button type="button" data-nav="4" tabindex="-1" aria-controls="tns1" style={{ display: "none" }} aria-label="Carousel Page 5"></button>
                </div>
                <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">
                  slide <span class="current">12 to 14</span> of 5
                </div>
                <div id="tns1-mw" class="tns-ovh">
                  <div class="tns-inner" id="tns1-iw">
                    <div
                      class="carousel-testimony  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                      id="tns1"
                      style={{ transform: "translate3d(-73.3333%, 0px, 0px)" }}
                    >
                      <div class="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                        <div class="testimony-wrap">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-quote-left">
                              {" "}
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
                      <div class="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                        <div class="testimony-wrap">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-quote-left">
                              {" "}
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
                      <div class="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
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
                      </div>
                      <div class="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                        <div class="testimony-wrap">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-quote-left">
                              {" "}
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
                      <div class="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                        <div class="testimony-wrap">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-quote-left">
                              {" "}
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
                      <div class="item tns-item" id="tns1-item0" aria-hidden="true" tabindex="-1">
                        <div class="testimony-wrap">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-quote-left">
                              {" "}
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
                      <div class="item tns-item" id="tns1-item1" aria-hidden="true" tabindex="-1">
                        <div class="testimony-wrap">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-quote-left">
                              {" "}
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
                      <div class="item tns-item" id="tns1-item2" aria-hidden="true" tabindex="-1">
                        <div class="testimony-wrap">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-quote-left">
                              {" "}
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
                      </div>
                      <div class="item tns-item" id="tns1-item3" aria-hidden="true" tabindex="-1">
                        <div class="testimony-wrap">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-quote-left">
                              {" "}
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
                      <div class="item tns-item" id="tns1-item4" aria-hidden="true" tabindex="-1">
                        <div class="testimony-wrap">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-quote-left">
                              {" "}
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
                      <div class="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                        <div class="testimony-wrap">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-quote-left">
                              {" "}
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
                      <div class="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                        <div class="testimony-wrap">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-quote-left">
                              {" "}
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
                      <div class="item tns-item tns-slide-cloned tns-slide-active">
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
                      <div class="item tns-item tns-slide-cloned tns-slide-active">
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
                      </div>
                      <div class="item tns-item tns-slide-cloned tns-slide-active">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HappyCustomers;
