import React, { useEffect } from "react";
import { IoBookOutline } from "react-icons/io5";
import Style from "../CSS/HeaderStyle.module.css";
import { PiTreeDuotone } from "react-icons/pi";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, IsActive] = useState(1);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 0;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* --------------Navbar(header)------------ */}
      <section>
        <div id="sticky-wrapper" class={` ${Style.stickyWrapper}`} style={{ height: "88px" }}>
          <nav class={`navbar navbar-expand-lg ${isScrolled ? Style.NavBar : Style.NavBarScrolled}`}>
            <div class="container">
              <a class={` ${Style.btnNaira}`} href="#">
                <i class={`bi-book me-2 ${Style.navbarBookIcon}`}>
                  <span>
                    <IoBookOutline />
                  </span>
                  <div class={`bi-book me-2 ${Style.squareTriangle}`}></div>{" "}
                </i>

                <span class={`bi-book me-2 ${Style.bookText}`}>ebook</span>
              </a>

              {/* ----------------download button  --------- */}
              <div class={`${Style.DownBtnDiv}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <a href="#" class={` ${Style.downloadAnchor}`}>
                  <i class={`btn-icon bi-cloud-download} ${Style.DownloadBtn}`}></i>
                  {isHovered ? (
                    <i class={`${Style.treeIcon}`}>
                      <PiTreeDuotone />
                    </i>
                  ) : (
                    <span>Download</span>
                  )}
                </a>
              </div>

              {/* --------------navbar toggle button ------------- */}
              <div
                class={`collapsed ${Style.navbarToggler}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <div class={`collapsed ${Style.navbarTogglerIcon} ${Style.line1}`}></div>
                  <div class={`collapsed ${Style.navbarTogglerIcon} ${Style.line1}`}></div>
                </span>
              </div>

              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class={` ${Style.collapseNavbar} navbar-nav ms-lg-auto me-lg-4`}>
                  <li class="nav-item">
                    <a
                      class={`nav-link click-scroll  active ${Style.navbarIcon}`}
                      onClick={() => IsActive(1)}
                      style={active === 1 ? { color: "#e46e51" } : { color: "white" }}
                      href="#home"
                    >
                      Home
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class={`nav-link click-scroll  ${Style.navbarIcon}`}
                      onClick={() => IsActive(2)}
                      style={active === 2 ? { color: "#e46e51" } : { color: "white" }}
                      href="#book"
                    >
                      The Book
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class={`nav-link click-scroll  ${Style.navbarIcon}`}
                      onClick={() => IsActive(3)}
                      style={active === 3 ? { color: "#e46e51" } : { color: "white" }}
                      href="#author"
                    >
                      Author
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class={`nav-link click-scroll active ${Style.navbarIcon}`}
                      onClick={() => IsActive(4)}
                      style={active === 4 ? { color: "#e46e51" } : { color: "white" }}
                      href="#reviews"
                    >
                      Reviews
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class={`nav-link click-scroll  ${Style.navbarIcon}`}
                      onClick={() => IsActive(5)}
                      style={active === 5 ? { color: "#e46e51" } : { color: "white" }}
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
