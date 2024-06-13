import React, { useEffect, useState } from "react";
import Style from "../CSS/PreviewStyle.module.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

function Preview() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(1);


  const sectionIds = ["item-1", "item-2", "item-3", "item-4", "item-5"];

  
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
  //   document.getElementById(sectionIds[itemNumber - 1]).scrollIntoView({ behavior: "smooth" });
  // };

  
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12 text-center">
            <h6 class={`${Style.inside} `}>What's inside?</h6>

            <h2 class={`mb-5 ${Style.PreviewGlance} `}>Preview at glance</h2>
          </div>

          {/* ----------------------navbar----------------- */}
          <div class="col-lg-4 col-12">
            <nav id="navbar-example3" class="h-100 flex-column align-items-stretch">
              <nav class={`nav flex-column ${Style.navPills} `}>
                <a
                  className={`nav-link smoothscroll ${active === 1 ? Style.active : Style.inactive} ${Style.smoothScrollLink}`}
                  onClick={() => setActive(1)}
                  href="#item-1"
                >
                  Introduction
                </a>

                <a
                  className={`nav-link smoothscroll ${active === 2 ? Style.active : Style.inactive} ${Style.smoothScrollLink}`}
                  onClick={() => setActive(2)}
                  href="#item-2"
                >
                  Chapter 1: <strong class={`${Style.smoothScrollContent} `}>Win back your time</strong>
                </a>

                <a
                  className={`nav-link smoothscroll ${active === 3 ? Style.active : Style.inactive} ${Style.smoothScrollLink}`}
                  onClick={() => setActive(3)}
                  href="#item-3"
                >
                  Chapter 2: <strong class={`${Style.smoothScrollContent} `}>Work less, do more</strong>
                </a>

                <a
                  className={`nav-link smoothscroll ${active === 4 ? Style.active : Style.inactive} ${Style.smoothScrollLink}`}
                  onClick={() => setActive(4)}
                  href="#item-4"
                >
                  Chapter 3: <strong class={`${Style.smoothScrollContent} `}>Delegate</strong>
                </a>

                <a
                  className={`nav-link smoothscroll ${active === 5 ? Style.active : Style.inactive} ${Style.smoothScrollLink}`}
                  onClick={() => setActive(5)}
                  href="#item-5"
                >
                  Chapter 4: <strong class={`${Style.smoothScrollContent} `}>Habits</strong>
                </a>
              </nav>
            </nav>
          </div>

          {/* --------------------  Introduction Content-------------- */}
          <div class="col-lg-8 col-12">
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class={`${Style.scrollspyExample2}`} tabindex="0">
              <div class="scrollspy-example-item" id="item-1">
                <h5 class={`${Style.introducingBook} `}>Introducing ebook</h5>

                <p class={`${Style.paraText} `}>This ebook landing page is good to use for any purpose. This layout is based on Bootstrap 5 CSS framework.</p>

                <p>
                  <span class={`${Style.spanText} `}>What is Content Marketing?</span>
                  <span class={`${Style.paraText} `}>If you are wondering what content marketing is all about, this is the place to start.</span>
                </p>

                <blockquote class={`${Style.blockQuote} `}>
                  <div class={`${Style.blockQuoteText} `}>
                    <BiSolidQuoteAltLeft />
                  </div>
                  Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito
                </blockquote>

                <p class={`${Style.paraText} `}>
                  When you need free HTML CSS templates, please visit Templatemo website which provides a variety of templates.
                </p>
              </div>

              {/* --------------------Chapter1 Content-------------- */}
              <div class={`scrollspy-example-item ${Style.dots}`} id="item-2">
                <h5 class={`${Style.introducingBook} `}>Win back your time</h5>

                <p class={`${Style.paraText} `}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p class={`${Style.paraText} `}>
                  Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci.
                </p>

                <p class={`${Style.paraText} `}>
                  You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more
                  information.
                </p>

                <div class="row">
                  <div class="col-lg-6 col-12 mb-3">
                    <img
                      src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/portrait-mature-smiling-authoress-sitting-desk.jpg"
                      class={`scrollspy-example-item-image  ${Style.imgFluid}`}
                      alt=""
                    />
                  </div>

                  <div class="col-lg-6 col-12 mb-3">
                    <img
                      src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/portrait-mature-smiling-authoress-sitting-desk.jpg"
                      class={`scrollspy-example-item-image  ${Style.imgFluid}`}
                      alt=""
                    />
                  </div>
                </div>

                <p class={`${Style.paraText} `}>
                  If you need some specific CSS templates, you can Google with keywords such as templatemo gallery, templatemo digital marketing, etc.
                </p>
              </div>

              {/* --------------------Chapter2 Content-------------- */}
              <div class={`scrollspy-example-item ${Style.dots}`} id="item-3">
                <h5 class={`${Style.introducingBook} `}>Work less, do more</h5>

                <p class={`${Style.paraText} `}>
                  Credit goes to{" "}
                  <a rel="nofollow" href="#" target="_blank" class={`mb-4 ${Style.freePik}`}>
                    FreePik
                  </a>{" "}
                  for images used in this ebook landing page template. You may browse FreePik to download more free images for your website.
                </p>
                <p class={`${Style.paraText} `}>
                  This is a second paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                </p>

                <p class={`${Style.paraText} `}>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.</p>

                <div class="row align-items-center">
                  <div class="col-lg-6 col-12">
                    <img src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/tablet-screen-contents.jpg" class="img-fluid" alt="" />
                  </div>

                  <div class="col-lg-6 col-12">
                    <p class={`${Style.paraText} `}>Modern ebook ever</p>

                    <p>
                      <strong class={`${Style.spanText} `}>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* ---------------------Chapter3 Content-------------- */}

              <div class={`scrollspy-example-item ${Style.dots}`} id="item-4">
                <h5 class={`${Style.introducingBook} `}>Delegate</h5>

                <p class={`${Style.paraText} `}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p class={`${Style.paraText} `}>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.</p>

                <p class={`${Style.paraText} `}>
                  You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more
                  information.
                </p>

                <img
                  src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/portrait-mature-smiling-authoress-sitting-desk.jpg"
                  class={`scrollspy-example-item-image img-fluid mb-3 ${Style.imgFluid2}`}
                  alt=""
                />

                <p class={`${Style.paraText} `}>You may want to contact us for more information about this template.</p>
              </div>

              {/* --------------------  Chapter4 Content-------------- */}

              <div class={`scrollspy-example-item ${Style.dots}`} id="item-5">
                <h5 class={`${Style.introducingBook} `}>Habits</h5>

                <p class={`${Style.paraText} `}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p class={`${Style.paraText} `}>
                  You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more
                  information.
                </p>

                <p>
                  <span class={`${Style.spanText} `}>What is Free CSS Templates?</span>
                  <span class={`${Style.paraText} `}>Free CSS Templates are a variety of ready-made web pages designed for different kinds of websites.</span>
                </p>

                <blockquote class={`${Style.blockQuote} `}>
                  <div class={`${Style.blockQuoteText} `}>
                    <BiSolidQuoteAltLeft />
                  </div>
                  Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito
                </blockquote>
                <p class={`${Style.paraText} `}>You may browse TemplateMo website for more CSS templates. Thank you for visiting our website.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
