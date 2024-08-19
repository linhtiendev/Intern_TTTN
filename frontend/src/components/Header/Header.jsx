import React from "react";
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
    return (
        <header className="header sticky__header">
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                        {/* == logo == */}
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        {/* == logo end== */}

                        {/* == menu start == */}
                        <div className="navigation">
                            <ul className="menu d-flex align-items-center gap-5">
                                {nav__link.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink to={item.path}>
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
                        </div>
                        {/* == nav right end ==  */}
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
