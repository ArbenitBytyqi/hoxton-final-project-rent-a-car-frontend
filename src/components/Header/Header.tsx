import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { User } from "../../types";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/displayreviews",
    display: "Reviews",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

type Props = {
  currentUser: User;
  signOut: () => void;
};

function Header({ signOut, currentUser }: Props) {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const navigate = useNavigate();
  return (
    <header className="header">
      {/* Header Top */}

      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +383 49 123 456
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {currentUser === null ? (
                  <>
                    <button
                      onClick={() => {
                        navigate("/signin");
                      }}
                      className=" d-flex align-items-center gap-1 login-button"
                    >
                      <i className="ri-login-circle-line"></i> Sign In
                    </button>
                  </>
                ) : (
                  <>
                    User Name: {currentUser.name}
                    <button
                      className="signout-btn"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Sign out
                    </button>
                    <button className="create-review-button">
                      <NavLink to="/reviews">Create a new review</NavLink>
                    </button>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Header Middle */}

      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Prishtinë</h4>
                  <h6>Kosovo, Prishtinë</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Monday to Friday</h4>
                  <h6>9am - 6pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="text-end d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Navigation */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;
