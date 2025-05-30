import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaElementor } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { FaTable } from "react-icons/fa6";
import { TbIconsOff } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import "../CSS/SideNavbar.css";

function SideNavbar({ isOpen }) {
  return (
    <>
      <nav className={isOpen ? "sidebar sidebar-offcanvas active" : "sidebar sidebar-offcanvas"} id="sidebar">
        <ul class="nav">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">
              <i class="mdi mdi-grid-large menu-icon">
                <RxDashboard />
              </i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item nav-category">UI Elements</li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="menu-icon mdi mdi-floor-plan">
                <FaElementor />
              </i>
              <span class="menu-title">UI Elements</span>
              <i class="menu-arrow">
                <FaAngleRight />
              </i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/ui-features/buttons.html">
                    Buttons
                  </a>
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/ui-features/dropdowns.html">
                    Dropdowns
                  </a>
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/ui-features/typography.html">
                    Typography
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item nav-category">Forms and Datas</li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
              <i class="menu-icon mdi mdi-card-text-outline">
                <FaWpforms />
              </i>
              <span class="menu-title">Form elements</span>
              <i class="menu-arrow">
                <FaAngleRight />
              </i>
            </a>
            <div class="collapse" id="form-elements">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <a class="nav-link" href="pages/forms/basic_elements.html">
                    Basic Elements
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i class="menu-icon mdi mdi-chart-line">
                <FaChartLine />
              </i>
              <span class="menu-title">Charts</span>
              <i class="menu-arrow">
                <FaAngleRight />
              </i>
            </a>
            <div class="collapse" id="charts">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/charts/chartjs.html">
                    ChartJs
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i class="menu-icon mdi mdi-table">
                <FaTable />
              </i>
              <span class="menu-title">Tables</span>
              <i class="menu-arrow">
                <FaAngleRight />
              </i>
            </a>
            <div class="collapse" id="tables">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/tables/basic-table.html">
                    Basic table
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
              <i class="menu-icon mdi mdi-layers-outline">
                <TbIconsOff />
              </i>
              <span class="menu-title">Icons</span>
              <i class="menu-arrow">
                <FaAngleRight />
              </i>
            </a>
            <div class="collapse" id="icons">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/icons/mdi.html">
                    Mdi icons
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item nav-category">pages</li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i class="menu-icon mdi mdi-account-circle-outline">
                <FaRegUserCircle />
              </i>
              <span class="menu-title">User Pages</span>
              <i class="menu-arrow">
                <FaAngleRight />
              </i>
            </a>
            <div class="collapse" id="auth">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="pages/samples/login.html">
                    {" "}
                    Login{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item nav-category">help</li>
          <li class="nav-item">
            <a class="nav-link" href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html">
              <i class="menu-icon mdi mdi-file-document">
                <IoDocumentText />
              </i>
              <span class="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideNavbar;
