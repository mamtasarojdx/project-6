import React from "react";
import { IoBookOutline } from "react-icons/io5";
import Style from "../CSS/HeaderStyle.module.css";
import { PiTreeDuotone } from "react-icons/pi";
import { useState } from "react";

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  
  return (
    <>
      {/* --------------Navbar(header)------------ */}
      <section>
        <div id="sticky-wrapper" class={` ${Style.stickyWrapper}`} style={{ height: "88px" }}>
          <nav class={`navbar navbar-expand-lg ${Style.NavBar}`}>
            <div class="container">
              <a class="navbar-brand" href="#">
                <i class={`bi-book me-2 ${Style.navbarBookIcon}`}>
                  <span>
                    <IoBookOutline />
                  </span>
                  <div class={`bi-book me-2 ${Style.squareTriangle}`}></div>{" "}
                </i>

                <span class={`bi-book me-2 ${Style.bookText}`}>ebook</span>
              </a>

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-lg-auto me-lg-4">
                  <li class="nav-item">
                    <a class={`nav-link click-scroll active ${Style.navbarIcon}`} href="#section_1">
                      Home
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class={`nav-link click-scroll inactive ${Style.navbarIcon}`} href="#section_2">
                      The Book
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class={`nav-link click-scroll inactive ${Style.navbarIcon}`} href="#section_3">
                      Author
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class={`nav-link click-scroll active ${Style.navbarIcon}`} href="#section_4">
                      Reviews
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class={`nav-link click-scroll active ${Style.navbarIcon}`} href="#section_5">
                      Contact
                    </a>
                  </li>
                </ul>

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
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
