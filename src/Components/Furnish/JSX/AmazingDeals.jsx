import React from "react";
import "../CSS/AmazingDeals.css";
import { FaRegHandshake } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { GiFurnace } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";

function AmazingDeals() {
  return (
    <>
      <section class="ftco-section2 ftco-no-pt ftco-no-pb">
        <div class="container-fluid">
          <div class="row g-2 py-2">
            <div class="col-md-3 services-wrap d-flex">
              <div class="services color-1">
                <div class="icon">
                  <span class="flaticon-handshake">
                    <FaRegHandshake />
                  </span>
                </div>
                <div class="text">
                  <h2>Amazing Deals</h2>
                  <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 services-wrap d-flex">
              <div class="services color-2">
                <div class="icon">
                  <span class="flaticon-kitchen">
                    <FaKitchenSet />
                  </span>
                </div>
                <div class="text">
                  <h2>Quality Furniture</h2>
                  <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 services-wrap d-flex">
              <div class="services color-3">
                <div class="icon">
                  <span class="flaticon-furniture">
                    <GiFurnace />
                  </span>
                </div>
                <div class="text">
                  <h2>Modern Design</h2>
                  <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 services-wrap">
              <div class="services color-4">
                <div class="icon">
                  <span class="flaticon-support">
                    <MdSupportAgent />
                  </span>
                </div>
                <div class="text">
                  <h2>Best Support</h2>
                  <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AmazingDeals;
