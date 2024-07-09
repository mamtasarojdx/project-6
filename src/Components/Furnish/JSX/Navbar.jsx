import React from "react";
import HomePage from "./HomePage";
import AmazingDeals from "./AmazingDeals";
import AboutPage from "./AboutPage";
import FurnitureCollection from "./FurnitureCollection";
import TechnicalStatistics from "./TechnicalStatistics";
import HappyCustomers from "./HappyCustomers";
import ProductionFlow from "./ProductionFlow";
import RecentBlog from "./RecentBlog";
import Footer from "./Footer";
import "../CSS/Navbar.css"
import Customers from "./Customers";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ftco-navbar-light">
        <div class="container-xl">
          <a class="navbar-brand" href="index.html">
            Furnish<small></small>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fa fa-bars"></span> Menu
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="index.html">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="work.html">
                  Collection
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <HomePage/>
      <AmazingDeals/>
      <AboutPage/>
      <FurnitureCollection/>
      <TechnicalStatistics/>
      <HappyCustomers/>
      {/* <Customers/> */}
      <ProductionFlow/>
      <RecentBlog/>
      <Footer/>
    </>
  );
}

export default Navbar;
