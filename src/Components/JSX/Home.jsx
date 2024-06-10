import React from "react";
import Style from "../CSS/HomeStyle.module.css";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

function Home() {
  return (
    <>
      {/* --------------home page content--------------- */}
      <section class={` ${Style.heroSection} d-flex justify-content-center align-items-center`} id="home">
        <div class="container">
          <div class="row">
            <div class={`col-lg-6 col-12 mb-5 pb-5 pb-lg-0 mb-lg-0 ${Style.homeText}`}>
              <h6 class={` ${Style.ebookIntro}`}>Introducing ebook</h6>

              <h1 class={`text-white mb-4 ${Style.ebookLand}`}>ebook landing page for professionals</h1>

              <span class={` ${Style.DiscoverDiv}`}>
                {" "}
                <a href="#book" class={` ${Style.Discover}`}>
                  Discover More
                </a>
              </span>

              <span class={` ${Style.Author}`}>
                <a href="#author" class={` ${Style.MeetAuthor}`}>
                  Meet the Author
                </a>
              </span>
            </div>

            <div class="hero-image-wrap col-lg-6 col-12 mt-3 mt-lg-0">
              <img
                src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/education-online-books.png"
                class={` ${Style.imgFluid}`}
                alt="education online books"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------small cards------------------------*/}
      <section class={` ${Style.featuredSection}`}>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-12">
              <div class={` ${Style.avatarGroup} d-flex flex-wrap align-items-center`}>
                <img
                  src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
                  class={`${Style.avatarImage}`}
                  alt=""
                />

                <img
                  src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/avatar/portrait-young-redhead-bearded-male.jpg"
                  class={`${Style.avatarImageLeft}`}
                  alt=""
                />

                <img
                  src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/avatar/pretty-blonde-woman.jpg"
                  class={`${Style.avatarImageLeft2}`}
                  alt=""
                />

                <img
                  src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/avatar/studio-portrait-emotional-happy-funny-smiling-boyfriend.jpg"
                  class={`${Style.avatarImageLeft3}`}
                  alt=""
                />

                {/* ---------------review content-------- */}
                <div class={`mt-3 mt-lg-0 ${Style.reviewsGroup}`}>
                  <strong  class={` ${Style.rating}`}>4.5</strong>

                  <i class={`${Style.biStarFill}`}> <IoIosStar /></i>
                  <i class={`${Style.biStarFill}`}><IoIosStar /></i>
                  <i class={`${Style.biStarFill}`}><IoIosStar /></i>
                  <i class={`${Style.biStarFill}`}><IoIosStar /></i>
                  <i class={`${Style.biStarUnFill}`}> <IoIosStarOutline /></i>

                  <small  class={`ms-3 ${Style.review}`}>2,564 reviews</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;


// https://www.google.com/search?q=linear+gradient+css+on+hover+for+button++bottom+to+top+then+changed+in+underline+using+react+js&sca_esv=5b7618d9e88b0320&sca_upv=1&sxsrf=ADLYWILWQ-yFN0sRQ7gwBVKCJolamE-T2g%3A1718022297172&ei=mfBmZoiXCeKMseMPr52jwAQ&ved=0ahUKEwjIx_Plg9GGAxViRmwGHa_OCEgQ4dUDCBA&uact=5&oq=linear+gradient+css+on+hover+for+button++bottom+to+top+then+changed+in+underline+using+react+js&gs_lp=Egxnd3Mtd2l6LXNlcnAiX2xpbmVhciBncmFkaWVudCBjc3Mgb24gaG92ZXIgZm9yIGJ1dHRvbiAgYm90dG9tIHRvIHRvcCB0aGVuIGNoYW5nZWQgaW4gdW5kZXJsaW5lIHVzaW5nIHJlYWN0IGpzSMKSAVD9CFiLjAFwAXgBkAEAmAHbAqABmyqqAQgwLjE4LjcuMrgBA8gBAPgBAZgCDKACghLCAgQQABhHwgIHECMYsAIYJ8ICCBAAGIAEGKIEwgIIECEYoAEYwwTCAgoQIRigARjDBBgKwgIEECEYCpgDAIgGAZAGCJIHBzEuNy4zLjGgB_uUAQ&sclient=gws-wiz-serp#ip=1