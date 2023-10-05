// importing required libraries
import React from "react";
import { Link } from "react-router-dom";

// importing css files
import Class from "./Navbar.module.css";

// creating a Navbar component
const Navbar = () => {
  return (
    <div className={Class.nav}>
      <h1><img src="https://cdn-icons-png.flaticon.com/128/5696/5696031.png" alt="habit-img" / >Habiter</h1>
      <div>
        <Link className={Class.link} to={"/"}>
          Home
        </Link>
        <Link className={Class.link} to={"/dashboard"}>
          Dashboard
        </Link>
      </div>
    </div>
  );
};

// exporiting Navbar component
export default Navbar;
