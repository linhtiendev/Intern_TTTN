import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./header.css";

const nav__link = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/whyus",
        display: "Why us?",
    },
    {
        path: "/freatures",
        display: "Freatures",
    },
    {
        path: "/Pricing",
        display: "Pricing",
    },
    {
        path: "/contact",
        display: "Contact",
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("sticky__header");
            } else {
                headerRef.current.classList.remove("sticky__header");
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();

        return window.removeEventListener("scroll", stickyHeaderFunc);
    });
    const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

    return (
        <header className="header sticky__header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                        {/* == logo == */}
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        {/* == logo end== */}

                        {/* == menu start == */}
                        <div
                            className="navigation"
                            ref={menuRef}
                            onClick={toggleMenu}
                        >
                            <ul className="menu d-flex align-items-center gap-5">
                                {nav__link.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            to={item.path}
                                            className={(navClass) =>
                                                navClass.isActive
                                                    ? "active__link"
                                                    : ""
                                            }
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* == menu end == */}

                        {/* == nav right ==  */}
                        <div className="nav__right d-flex align-items-center gap-4">
                            <div className="nav__btn d-flex align-items-center gap-4">
                                <Button className="btn secondary__btn">
                                    <Link to="/login">Login</Link>
                                </Button>
                                <Button className="btn primary__btn">
                                    <Link to="/signup">Sign Up</Link>
                                </Button>
                            </div>

                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                        {/* == nav right end ==  */}
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
