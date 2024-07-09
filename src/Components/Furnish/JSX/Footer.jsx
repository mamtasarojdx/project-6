import React from "react";
import "../CSS/Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer class="ftco-footer">
        <div class="container-xl">
          <div class="row mb-5 pb-5 d-flex justify-content-between">
          <div class=" col-lg">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2 logo d-flex">
                  <a class="navbar-brand" href="index.html">
                    Furnish
                  </a>
                </h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <ul class="ftco-footer-social mt-4">
                  <li>
                    <a href="#" >
                      <span class="fa fa-twitter"><FaTwitter /></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mx-2">
                      <span class="fa fa-facebook"><FaFacebookF /></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mx-3">
                      <span class="fa fa-instagram"><FaInstagram /></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class=" col-lg">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Services</h2>
                <ul class="list-unstyled w-100">
                  <li>
                    <a href="#">
                      <span class="ion ion-ios-arrow-round-forward me-2"><FaArrowRightLong /></span>Amazing Deals
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="ion ion-ios-arrow-round-forward me-2"><FaArrowRightLong /></span>Quality Furniture
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="ion ion-ios-arrow-round-forward me-2"><FaArrowRightLong /></span>Modern Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="ion ion-ios-arrow-round-forward me-2"><FaArrowRightLong /></span>Best Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class=" col-lg">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Recent Posts</h2>
                <div class="block-21 mb-4 d-flex">
                  <a class="blog-img img rounded" style={{backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/image_1.jpg.webp)"}}></a>
                  <div class="text">
                    <div class="meta">
                      <div>
                        <a href="#">
                          <span class="fa fa-calendar"><FaCalendarAlt /></span> Mar. 05, 2021
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span class="fa fa-user"><FaUser /></span> Admin
                        </a>
                      </div>
                    </div>
                    <h3 class="heading">
                      <a href="#">Shop the Look Cottage Country Living Room</a>
                    </h3>
                  </div>
                </div>
                <div class="block-21 mb-4 d-flex">
                  <a class="blog-img img rounded" style={{backgroundImage: "url(https://preview.colorlib.com/theme/furnish/images/image_2.jpg.webp)"}} ></a>
                  <div class="text">
                  <div class="meta">
                      <div>
                        <a href="#">
                          <span class="fa fa-calendar"><FaCalendarAlt /></span> Mar. 05, 2021
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span class="fa fa-user"><FaUser /></span> Admin
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
            <div class=" col-lg">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Have a Questions?</h2>
                <div class="block-23 mb-3">
                  <ul>
                    <li>
                      <span class="icon fa fa-map marker"><FaMapMarked /></span>
                      <span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon fa fa-phone"><MdOutlinePhone /></span>
                        <span class="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon fa fa-paper-plane"><IoPaperPlaneOutline /></span>
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
              <div class="col-md-12 text-center">
                <p class="mb-0" style={{fontSize: "14px"}}>
                  Copyright ©2024 All rights reserved | This template is made with
                  <i class="fa fa-heart color-danger mx-1" aria-hidden="true"><FaHeart /></i> by
                  <a href="https://colorlib.com" target="_blank" rel="nofollow noopener" className="mx-1">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
