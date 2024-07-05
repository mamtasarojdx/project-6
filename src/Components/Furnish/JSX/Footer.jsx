import React from "react";

function Footer() {
  return (
    <>
      <footer class="ftco-footer">
        <div class="container-xl">
          <div class="row mb-5 pb-5 justify-content-between">
            <div class="col-md-6 col-lg">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2 logo d-flex">
                  <a class="navbar-brand" href="index.html">
                    Furnish
                  </a>
                </h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <ul class="ftco-footer-social mt-4">
                  <li>
                    <a href="#">
                      <span class="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Services</h2>
                <ul class="list-unstyled w-100">
                  <li>
                    <a href="#">
                      <span class="ion ion-ios-arrow-round-forward me-2"></span>Amazing Deals
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="ion ion-ios-arrow-round-forward me-2"></span>Quality Furniture
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="ion ion-ios-arrow-round-forward me-2"></span>Modern Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="ion ion-ios-arrow-round-forward me-2"></span>Best Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Recent Posts</h2>
                <div class="block-21 mb-4 d-flex">
                  <a class="blog-img img rounded" style={{backgroundImage: "url(images/image_1.jpg)"}}></a>
                  <div class="text">
                    <div class="meta">
                      <div>
                        <a href="#">
                          <span class="fa fa-calendar"></span> Mar. 05, 2021
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span class="fa fa-user"></span> Admin
                        </a>
                      </div>
                    </div>
                    <h3 class="heading">
                      <a href="#">Shop the Look Cottage Country Living Room</a>
                    </h3>
                  </div>
                </div>
                <div class="block-21 mb-4 d-flex">
                  <a class="blog-img img rounded" style={{backgroundImage: "url(images/image_2.jpg)"}} ></a>
                  <div class="text">
                    <div class="meta">
                      <div>
                        <a href="#">
                          <span class="fa fa-calendar"></span> Mar. 05, 2021
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span class="fa fa-user"></span> Admin
                        </a>
                      </div>
                    </div>
                    <h3 class="heading">
                      <a href="#">Shop the Look Cottage Country Living Room</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Have a Questions?</h2>
                <div class="block-23 mb-3">
                  <ul>
                    <li>
                      <span class="icon fa fa-map marker"></span>
                      <span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon fa fa-phone"></span>
                        <span class="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon fa fa-paper-plane"></span>
                        <span class="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid px-0 py-5 bg-secondary">
          <div class="container-xl">
            <div class="row">
              {/* <div class="col-md-12 text-center">
                <p class="mb-0" style="font-size: 14px;">
                  Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
                  <script>document.write(new Date().getFullYear());</script>2024 All rights reserved | This template is made with{" "}
                  <i class="fa fa-heart color-danger" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank" rel="nofollow noopener">
                    Colorlib
                  </a>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
