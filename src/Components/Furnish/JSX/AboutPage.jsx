import React from "react";
import "../CSS/AboutPage.css";
import { FaPlay } from "react-icons/fa";

function AboutPage() {
  return (
    <>
      <section class="ftco-section1 ftco-image img" style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/bg_4.jpg.webp)" }}>
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-md-6 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <span class="subheading">About Furnish</span>
              <h2 class="mb-4">Quality Makes the Belief for Customers</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              <a href="https://www.youtube.com/watch?v=9ZZ7pq331Dc" class="d-flex glightbox pt-4 align-items-center">
                <div class="icon">
                  <span class="fa fa-play"><FaPlay /></span>
                </div>
                <div class="text ps-4">
                  <span>Watch Video</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
