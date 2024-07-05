import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="ui-part">
      <div className=" container  ">
        <div className="row">
          <div className="col-lg-12 ui-link">
            <li className="link-first">
              <Link to="/landing" className="text-head">
                Go to 1st UI
              </Link>
            </li>
            <li className="link-second">
              <Link to="/login" className="text-head">
                Go to 2nd UI
              </Link>
            </li>
            <li className="link-third">
              <Link to="/admin" className="text-head">
                {" "}
                Go to 3rd UI
              </Link>
            </li>
            <li className="link-fourth">
              <Link to="/furnish" className="text-head">
                {" "}
                Go to 4th UI
              </Link>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
