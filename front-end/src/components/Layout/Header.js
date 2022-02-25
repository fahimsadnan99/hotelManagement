import React from "react";
import {Link} from "react-router-dom"



const Header = () => {
  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <div className="navbar-brand">
            <Link to="/">
              <img
                style={{ cursor: "pointer" }}
                src="./images/bookit_logo.png"
                alt="BookIT"
              />
            </Link>
          </div>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center">
          <a className="btn btn-danger px-4 text-white login-header-btn float-right" href="#">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;