import React from "react";
import "../CSS/RecentBlog.css";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

function RecentBlog() {
  return (
    <>
      <section class="ftco-section7">
        <div class="container-xl">
          <div class="row justify-content-center mb-5">
            <div class="col-lg-7 heading-section text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <span class="subheading">Our Blog</span>
              <h2>Recent From Blog</h2>
            </div>
          </div>
          <div class="row g-4 justify-content-center">
            <div class="col-md-6 col-lg-6 d-flex">
              <div class="blog-entry justify-content-end d-md-flex aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <a href="blog-single.html" class="block-20 img" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/furnish/images/image_1.jpg.webp')" }}></a>
                <div class="text">
                  <p class="meta">
                    <span>
                      <i class="fa fa-user me-1"><FaUser /></i>Admin
                    </span>{" "}
                    <span>
                      <i class="fa fa-calendar me-1"><FaCalendarAlt /></i>Jan. 27, 2021
                    </span>{" "}
                    <span>
                      <a href="#">
                        <i class="fa fa-comment me-1"><FaComment /></i> 3 Comments
                      </a>
                    </span>
                  </p>
                  <h3 class="heading mb-3">
                    <a href="#">Shop the Look Cottage Country Living Room</a>
                  </h3>
                  <p>A small river named Duden flows by their place.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 d-flex">
              <div class="blog-entry justify-content-end d-md-flex aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <a href="blog-single.html" class="block-20 img" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/furnish/images/image_2.jpg.webp')" }}></a>
                <div class="text">
                <p class="meta">
                    <span>
                      <i class="fa fa-user me-1"><FaUser /></i>Admin
                    </span>{" "}
                    <span>
                      <i class="fa fa-calendar me-1"><FaCalendarAlt /></i>Jan. 27, 2021
                    </span>{" "}
                    <span>
                      <a href="#">
                        <i class="fa fa-comment me-1"><FaComment /></i> 3 Comments
                      </a>
                    </span>
                  </p>
                  <h3 class="heading mb-3">
                    <a href="#">Shop the Look Cottage Country Living Room</a>
                  </h3>
                  <p>A small river named Duden flows by their place.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 d-flex">
              <div class="blog-entry justify-content-end d-md-flex aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <a href="blog-single.html" class="block-20 img order-lg-last" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/furnish/images/image_3.jpg.webp')" }}></a>
                <div class="text">
                <p class="meta">
                    <span>
                      <i class="fa fa-user me-1"><FaUser /></i>Admin
                    </span>{" "}
                    <span>
                      <i class="fa fa-calendar me-1"><FaCalendarAlt /></i>Jan. 27, 2021
                    </span>{" "}
                    <span>
                      <a href="#">
                        <i class="fa fa-comment me-1"><FaComment /></i> 3 Comments
                      </a>
                    </span>
                  </p>
                  <h3 class="heading mb-3">
                    <a href="#">Shop the Look Cottage Country Living Room</a>
                  </h3>
                  <p>A small river named Duden flows by their place.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 d-flex">
              <div class="blog-entry justify-content-end d-md-flex aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <a href="blog-single.html" class="block-20 img order-lg-last" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/furnish/images/image_4.jpg.webp')" }}></a>
                <div class="text">
                <p class="meta">
                    <span>
                      <i class="fa fa-user me-1"><FaUser /></i>Admin
                    </span>{" "}
                    <span>
                      <i class="fa fa-calendar me-1"><FaCalendarAlt /></i>Jan. 27, 2021
                    </span>{" "}
                    <span>
                      <a href="#">
                        <i class="fa fa-comment me-1"><FaComment /></i> 3 Comments
                      </a>
                    </span>
                  </p>
                  <h3 class="heading mb-3">
                    <a href="#">Shop the Look Cottage Country Living Room</a>
                  </h3>
                  <p>A small river named Duden flows by their place.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentBlog;
