import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthProvider, { useAuth } from "../Context/AuthProvider";
import "../Styles/nav.css";
import Tick from "../Images/logo.png";

function NavBar() {
  // console.log(localStorage.getItem("user"));
  const { user, logout } = useAuth();
  //  console.log(user)
  useEffect(() => {
    let navBar = document.querySelector("nav");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 0) {
        navBar.setAttribute("class", "activeNavBar");
      } else if (window.pageYOffset === 0) {
        navBar.classList.remove("activeNavBar");
      }
    });
  }, []);

  return (
    <nav>
      <div class="logo">
      <Link to="/"><img src={Tick} alt='' className='image' /></Link>
      </div>
      <ul class="nav-links">
        <li>
        <Link to="/">Home</Link>
        </li>
        {/* <li>
          <a href="/contact">Contact Us</a>
        </li> */}
        <li>
        <Link to="/allPlans">Plans</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/profilePage">{user?.name}</Link>
            </li>
            <li>
              <Link to="" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
