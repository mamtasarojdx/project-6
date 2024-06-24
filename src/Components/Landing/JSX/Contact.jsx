import React from "react";
import Style from "../CSS/ContactStyle.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { useState } from "react";

function Contact() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleHover1 = () => {
    setIsHovered1(!isHovered1);
  };
  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };
  return (
    <>
      <section class={` ${Style.contactSection} section-padding`} id="contact">
        <div class="container">
          <div class="row">
            {/* ---------------------User Form----------------------------- */}
            <div class="col-lg-5 col-12 mx-auto">
              <form class={` ${Style.customForm} ${Style.ebookDownloadForm} bg-white shadow`} action="#" method="post" role="form">
                <div class="text-center mb-5">
                  <h2 class={` ${Style.getEbook} mb-1`}>Get your free ebook</h2>
                </div>

                <div class="ebook-download-form-body">
                  <div class={` ${Style.inputGroup} mb-4`} onMouseEnter={handleHover1} onMouseLeave={handleHover1}>
                    {isHovered1 ? (
                      <>
                        <input
                          type="text"
                          name="ebook-form-name"
                          id="ebook-form-name"
                          class={` ${Style.formControl} `}
                          aria-label="ebook-form-name"
                          aria-describedby="basic-addon1"
                          placeholder="Your Name"
                          required=""
                        />

                        <span class={` ${Style.inputGroupText} `} id="basic-addon1">
                          <i class="custom-form-icon bi-envelope">
                            <IoPersonOutline />
                          </i>
                        </span>
                      </>
                    ) : (
                      <>
                        <input
                          type="text"
                          name="ebook-form-name"
                          id="ebook-form-name"
                          class={` ${Style.formControl} `}
                          aria-label="ebook-form-name"
                          aria-describedby="basic-addon1"
                          placeholder="Your Name"
                          required=""
                        />
                      </>
                    )}
                  </div>

                  <div class={` ${Style.inputGroup} mb-4`} onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
                    {isHovered2 ? (
                      <>
                        {" "}
                        <input
                          type="email"
                          name="ebook-email"
                          id="ebook-email"
                          pattern="[^ @]*@[^ @]*"
                          class={` ${Style.formControl} `}
                          placeholder="your@company.com"
                          aria-label="ebook-form-email"
                          aria-describedby="basic-addon2"
                          required=""
                        />
                        <span class={` ${Style.inputGroupText} `} id="basic-addon2">
                          <i class="custom-form-icon bi-envelope">
                            <CiMail />
                          </i>
                        </span>
                      </>
                    ) : (
                      <>
                        {" "}
                        <input
                          type="email"
                          name="ebook-email"
                          id="ebook-email"
                          pattern="[^ @]*@[^ @]*"
                          class={` ${Style.formControl} `}
                          placeholder="your@company.com"
                          aria-label="ebook-form-email"
                          aria-describedby="basic-addon2"
                          required=""
                        />
                      </>
                    )}
                  </div>

                  <div class="col-lg-8 col-md-10 col-8 mx-auto">
                    <button type="submit" class={` ${Style.submitBtn} `}>
                      Download ebook
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* ----------------------side text content----------------------- */}
            <div class="col-lg-6 col-12">
              <h6 class={` ${Style.sayHi} mt-5 `}>Say hi and talk to us</h6>

              <h2 class={` ${Style.Contact} mb-4 `}>Contact</h2>

              <p class={` ${Style.London} mb-3 `}>
                <i class="bi-geo-alt me-2">
                  <IoLocationOutline />
                </i>
                London, United Kingdom
              </p>

              <p class="mb-2">
                <a href="tel: 010-020-0340" class={` ${Style.London2} mx-1 contact-link`}>
                  010-020-0340
                </a>
              </p>

              <p>
                <a href="#" class={` ${Style.London2} mx-1 contact-link`}>
                  info@company.com
                </a>
              </p>

              <h6 class={` ${Style.sayHi} mt-5 mb-3 `}>Social</h6>

              <ul class={` ${Style.socialIcon} mb-4 `}>
                <li class={` ${Style.socialIconItem} `}>
                  <a href="#" class={`bi-instagram ${Style.socialIconLink} `}>
                    <FaInstagram />
                  </a>
                </li>

                <li class={` ${Style.socialIconItem} `}>
                  <a href="#" class={`bi-twitter ${Style.socialIconLink} `}>
                    <IoLogoTwitter />
                  </a>
                </li>

                <li class={` ${Style.socialIconItem} `}>
                  <a href="#" class={`bi-facebook ${Style.socialIconLink} `}>
                    <CiFacebook />
                  </a>
                </li>

                <li class={` ${Style.socialIconItem} `}>
                  <a href="#" class={`bi-whatsapp ${Style.socialIconLink} `}>
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>

              <p class={` ${Style.copyrightText}`}>
                Copyright © 2048 ebook company
                <p>
                  <a rel="nofollow" href="https://templatemo.com" target="_blank" class={`${Style.copyrightLink}`}>
                    designed by templatemo
                  </a>
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
