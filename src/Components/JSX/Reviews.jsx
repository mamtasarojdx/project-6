import React from "react";
import Style from "../CSS/ReviewStyle.module.css";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

function Reviews() {
  return (
    <>
      <section class={`reviews-section ${Style.sectionPadding}`} id="reviews">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12 text-center mb-5">
              <h6 className={`${Style.Review}`}>Reviews</h6>

              <h2 className={`mb-4 ${Style.peopleSaying}`}>What people saying...</h2>
            </div>

            <div class="col-lg-4 col-12">
              <div class={`${Style.customBlock} d-flex flex-wrap`}>
                <div class={`${Style.customBlockImageWrap} d-flex flex-column`}>
                  <img
                    src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
                    class="img-fluid avatar-image"
                    className={`${Style.avatarImage}`}
                    alt=""
                  />

                  <div class="text-center mt-3">
                    <span class="text-white">Sandy</span>

                    <strong class="d-block text-white">Artist</strong>
                  </div>
                </div>

                <div class={`${Style.customBlockInfo}`}>
                  <div class={`${Style.customBlockInfo}`}>
                    <strong class={`text-white ${Style.rating}`}>4.5</strong>

                    <span class={`mx-1 ${Style.starRating}`}>
                      {" "}
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                      <i class={`${Style.biStarUnFill}`}>
                        <IoIosStarOutline />
                      </i>
                    </span>
                  </div>

                  <p class={`text-white mb-0 ${Style.LoremText}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class={`${Style.customBlock} d-flex flex-wrap`}>
                <div class={`${Style.customBlockImageWrap} d-flex flex-column`}>
                  <img
                    src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/avatar/portrait-young-redhead-bearded-male.jpg"
                    class="img-fluid avatar-image"
                    className={`${Style.avatarImage}`}
                    alt=""
                  />

                  <div class="text-center mt-3">
                    <span class="text-white">John</span>

                    <strong class="d-block text-white">Producer</strong>
                  </div>
                </div>

                <div class={`${Style.customBlockInfo}`}>
                  <div class={`${Style.customBlockInfo}`}>
                    <strong class={`text-white ${Style.rating}`}>3.5</strong>

                    <span class={`mx-1 ${Style.starRating}`}>
                      {" "}
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                      <i class={`${Style.biStarUnFill}`}>
                        <IoIosStarOutline />
                      </i>
                      <i class={`${Style.biStarUnFill}`}>
                        <IoIosStarOutline />
                      </i>
                    </span>
                  </div>

                  <p class={`text-white mb-0 ${Style.LoremText}`}>
                    If you need some specific CSS templates, you can Google with keywords such as templatemo one-page, templatemo portfolio, etc.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-12">
              <div class={`${Style.customBlock} d-flex flex-wrap`}>
                <div class={`${Style.customBlockImageWrap} d-flex flex-column`}>
                  <img
                    src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/avatar/pretty-blonde-woman.jpg"
                    class="img-fluid avatar-image"
                    className={`${Style.avatarImage}`}
                    alt=""
                  />

                  <div class="text-center mt-3">
                    <span class="text-white">Candy</span>

                    <strong class="d-block text-white">VP, Design</strong>
                  </div>
                </div>

                <div class={`${Style.customBlockInfo}`}>
                  <div class={`${Style.customBlockInfo}`}>
                    <strong class={`text-white ${Style.rating}`}>5</strong>

                    <span class={`mx-1 ${Style.starRating}`}>
                      {" "}
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                      <i class={`${Style.biStarFill}`}>
                        <IoIosStar />
                      </i>
                    </span>
                  </div>

                  <p class={`text-white mb-0 ${Style.LoremText}`}>
                    Please tell your friends about our website that we provide 100% free CSS templates for everyone. Thank you for using our templates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
