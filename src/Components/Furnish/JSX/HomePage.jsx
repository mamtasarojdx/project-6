import React from "react";
import "../CSS/HomePage.css";

function HomePage() {
  return (
    <>
      <section class="hero-wrap">
        <div class="overlay"></div>
        <div class="img" style={{ backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/bg_2.jpg.webp)" }}></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center align-items-stretch">
            <div class="col-md-6 col-lg-6 text d-flex align-items-center">
              <div class="desc">
                <h1 class="heading-1">
                  Best Design of 
                </h1>
                <h1 className="collection-text">Furniture Collections</h1>
                <h1 class="w-75">
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  <p class="d-flex align-items-center mt-4">
                    <a href="#" class="btn5 btn-white d-flex align-items-center py-3 px-4">
                      Discover
                    </a>
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
