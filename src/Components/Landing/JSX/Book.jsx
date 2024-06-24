import React from 'react'
import Style from "../CSS/BookStyle.module.css"

function Book() {
  return (
    <>
      <section class={`${Style.sectionPadding} `} id="book">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12">
                            <img src="https://templatemo.com/templates/templatemo_588_ebook_landing/images/tablet-screen-contents.jpg" class="img-fluid" alt=""/>
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class={` ${Style.bookSectionInfo}`}>
                                <h6 class={` ${Style.modern}`}>Modern &amp; Creative</h6>


                                <h2 class={`mb-4 ${Style.aboutBook}`}>About The Book</h2>

                                <p class={`mb-4 ${Style.creditGoes}`}>Credit goes to <a rel="nofollow" href="https://freepik.com" target="_blank" class={`mb-4 ${Style.freePik}`}>FreePik</a> for images used in this ebook landing page template. You may browse FreePik to download more free images for your website.</p>

                                <p class={`mb-4 ${Style.creditGoes}`}>TemplateMo is one of the best websites to download free CSS templates for any purpose. This is an ebook landing page template using Bootstrap 5 CSS layout.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    </>
  )
}

export default Book
