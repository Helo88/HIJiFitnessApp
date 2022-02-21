import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style/NavCSS.css';
import mylogo from "../images/logo.jpg"

const Navbar = () => {

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg ">
        <div className="container">

          <div className="navbar-brand" >
            <Link className="navbar-item" to={""}>
               <img src={`${mylogo}`} id="logo" /> 
            </Link>
          </div>

        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-start">

              <li className="nav-item hoverable">
                <Link className="nav-link" aria-current="page" to={""}><strong>Home</strong></Link>
              </li>

              <li className="nav-item hoverable">
                <Link className="nav-link" to={""}> <strong>Gyms</strong></Link>
              </li>

              <li className="nav-item hoverable">
                <Link className="nav-link" to={""}> <strong>Shops</strong></Link>
              </li>

              <li className="nav-item dropdown" id="myDropdown">
                <Link className="nav-link dropdown-toggle" to={""} data-bs-toggle="dropdown"> <strong>Fitness Tracker</strong>  </Link>
                <ul className="dropdown-menu">
                  <li> <Link className="dropdown-item" to={""}> Plans </Link>
                    <ul className="submenu dropdown-menu">
                      <li><Link className="dropdown-item" to={"/workoutplans"}>Workout</Link></li>
                      <li><Link className="dropdown-item" to={"/yogaplans"}>Yoga</Link></li>
                    </ul>
                  </li>
                  <li> <Link className="dropdown-item" to={""}> Healthy Life </Link>
                    <ul className="submenu dropdown-menu">
                      <li><Link className="dropdown-item" to={""}> Water Tracker</Link></li>
                      <li><Link className="dropdown-item" to={""}>Weight Tracker</Link></li>
                      <hr className="navbar-divider" />
                      <li><Link className="dropdown-item" to={"/healthytips"}><strong>Healthy Tips</strong></Link></li>
                    </ul>
                  </li>
                  <hr className="navbar-divider" />
                  <li><Link className="dropdown-item important" to={""}> <strong>Report an issue </strong> </Link></li>
                </ul>
              </li>

              <li className="nav-item hoverable">
                <Link className="nav-link" to={""}> <strong>Contact Us</strong></Link>
              </li>

            </ul>


            <div className="d-grid gap-2 d-md-flex ">
              <button id="sign-btn" className="btn  hoverable" type="button"> <strong>Sign up</strong></button>
             <Link to={"/login"}><button className="btn btn-light hoverable" type="button"> <strong>Log In</strong></button>
             </Link> 
            </div>

          </div>
        </div>
      </nav>
    </>

  );
};
export default Navbar;