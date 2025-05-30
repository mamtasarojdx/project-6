import React from "react";
import "../CSS/FurnitureCollection.css";
import { CiSearch } from "react-icons/ci";

function FurnitureCollection() {
  return (
    <>
      <section class="ftco-gallery ftco-no-pb ftco-section4">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-5 heading-section text-center mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <span class="subheading">Our Finish Projects</span>
              <h2 class="mb-4">Furniture Collection</h2>
            </div>
          </div>
          <div class="row g-2">
            <div class="col-md-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <a
                href="images/gallery-1.jpg.webp"
                class="gallery-wrap img d-flex align-items-end justify-content-center glightbox"
                style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/gallery-1.jpg.webp)" }}
              >
                <div class="text">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-search">
                      <CiSearch />
                    </span>
                  </div>
                  <h2 class="mb-0">Business Finance Consulting</h2>
                </div>
              </a>
            </div>
            <div class="col-md-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <a
                href="images/gallery-1.jpg"
                class="gallery-wrap img d-flex align-items-end justify-content-center glightbox"
                style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/gallery-2.jpg.webp)" }}
              >
                <div class="text">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-search">
                      <CiSearch />
                    </span>
                  </div>
                  <h2 class="mb-0">Business Finance Consulting</h2>
                </div>
              </a>
            </div>
            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <a
                href="images/gallery-3.jpg"
                class="gallery-wrap img d-flex align-items-end justify-content-center glightbox"
                style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/gallery-3.jpg.webp)" }}
              >
                <div class="text">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-search">
                      <CiSearch />
                    </span>
                  </div>
                  <h2 class="mb-0">Business Finance Consulting</h2>
                </div>
              </a>
            </div>
            <div class="col-md-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <a
                href="images/gallery-4.jpg"
                class="gallery-wrap img d-flex align-items-end justify-content-center glightbox"
                style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/gallery-4.jpg.webp)" }}
              >
                <div class="text">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-search">
                      <CiSearch />
                    </span>
                  </div>
                  <h2 class="mb-0">Business Finance Consulting</h2>
                </div>
              </a>
            </div>
            <div class="col-md-3 aos-init aos-animate " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <a
                href="images/gallery-5.jpg"
                class="gallery-wrap img d-flex align-items-end justify-content-center glightbox"
                style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/gallery-5.jpg.webp)" }}
              >
                <div class="text">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-search">
                      <CiSearch />
                    </span>
                  </div>
                  <h2 class="mb-0">Business Finance Consulting</h2>
                </div>
              </a>
            </div>
            <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <a
                href="images/gallery-6.jpg"
                class="gallery-wrap img d-flex align-items-end justify-content-center glightbox"
                style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/gallery-6.jpg.webp)" }}
              >
                <div class="text">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-search">
                      <CiSearch />
                    </span>
                  </div>
                  <h2 class="mb-0">Business Finance Consulting</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FurnitureCollection;
