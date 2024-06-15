import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./layout.css";
const Layout = () => {
  let navigate = useNavigate();
  const [data, setData] = useState("");
  let searchFunction = () => {
    navigate(`/addlistings/searchresult/${data}`);
    //yourwebsite.com/pageB/[country_name]
  };
  return (
    <>
      <div className="main-container">
        <Navbar data-bs-theme="light" id="mynavbar">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link className="link" to="alllistings">
                All Shoes
              </Link>
            </Nav.Link>
            <Nav.Link href="#features">
              <Link className="link" to="addlistings">
                Add Your Shoes
              </Link>
            </Nav.Link>
          </Nav>
          
        
        </Navbar>

        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
