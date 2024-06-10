import React from "react";
import Style from "../CSS/AuthorStyle.module.css"

function Author() {
  return (
    <>
      <section class={`${Style.authorSection} section-padding`} id="author">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12">
              <img
                src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/portrait-mature-smiling-authoress-sitting-desk.jpg"
                 class={`${Style.authorImage} img-fluid`}
                alt=""
              />
            </div>

            <div class="col-lg-6 col-12 mt-5 mt-lg-0">
              <h6 className={`${Style.meetAuthor}`}>Meet Author</h6>

              <h2  className={`mb-4 ${Style.professor}`}>Prof. Sophia</h2>

              <p class={`${Style.paraText} `}>This is an ebook landing page template with Bootstrap 5 CSS framework. It is easy to customize with the use of Bootstrap CSS classes.</p>

              <p class={`${Style.paraText} `}>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Author;
