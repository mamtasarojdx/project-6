import React, { useEffect, useRef } from "react";
import { IoBookOutline } from "react-icons/io5";
import Style from "../CSS/HeaderStyle.module.css";
import { PiTreeDuotone } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Home from "./Home";
import Book from "./Book";
import Preview from "./Preview";
import Author from "./Author";
import Reviews from "./Reviews";
import Contact from "./Contact";

function LandingHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = ["home", "book", "author", "reviews", "contact"];

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the middle of the viewport
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollMiddle = scrollTop + windowHeight / 2;

      // Update active section based on scroll position
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollMiddle >= sectionTop && scrollMiddle < sectionTop + sectionHeight) {
            setActive(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleItemClick = (itemNumber) => {
  //   setActive(itemNumber);
  // Smooth scroll to the section
  //   document.getElementById(sectionIds[itemNumber - 1]).scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      {/* --------------Navbar(header)------------ */}
      <section>
        <div id="sticky-wrapper" class={` ${Style.stickyWrapper}`} style={{ height: "88px" }} >
          <nav className={`navbar navbar-expand-lg ${Style.NavBar} ${active === 1 ? Style.transparentBg : Style.blackBg}`}>
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
                className={`collapsed ${Style.navbarToggler}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={isOpen ? "true" : "false"}
                aria-label="Toggle navigation"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <span className={`${Style.menuIcon}`}>
                    <IoCloseSharp />
                  </span>
                ) : (
                  <span className={`${Style.menuIcon}`}>
                    <IoMdMenu />
                  </span>
                )}
              </div>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className={` ${Style.collapseNavbar} navbar-nav ms-lg-auto me-lg-4`}>
                  <li className="nav-item">
                    <a
                      className={`nav-link click-scroll ${active === 1 ? Style.active : Style.inactive} ${Style.navbarIcon}`}
                      onClick={() => setActive(1)}
                      href="#home"
                    >
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link click-scroll ${active === 2 ? Style.active : Style.inactive} ${Style.navbarIcon}`}
                      onClick={() => setActive(2)}
                      href="#book"
                    >
                      The Book
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link click-scroll ${active === 3 ? Style.active : Style.inactive} ${Style.navbarIcon}`}
                      onClick={() => setActive(3)}
                      href="#author"
                    >
                      Author
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link click-scroll ${active === 4 ? Style.active : Style.inactive} ${Style.navbarIcon}`}
                      onClick={() => setActive(4)}
                      href="#reviews"
                    >
                      Reviews
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link click-scroll ${active === 5 ? Style.active : Style.inactive} ${Style.navbarIcon}`}
                      onClick={() => setActive(5)}
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
      <Home />
      <Book />
      <Preview />
      <Author />
      <Reviews/>
      <Contact />
    </>
  );
}
export default LandingHeader;
