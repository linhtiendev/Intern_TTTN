import React from "react";

import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import logoLopama from "../../assets/images/logolopama.png";
import facebookIcon from "../../assets/images/icons/facebook.png";
import instagramIcon from "../../assets/images/icons/instagram.png";
import twitterIcon from "../../assets/images/icons/twitter.png";

const quickLinkService = [
    {
        path: "/email-marketing",
        display: "Email Marketing Social",
    },
    {
        path: "/media-marketing",
        display: "Media Marketing Search",
    },
    {
        path: "/engine-optimization",
        display: "Engine Optimization",
    },
    {
        path: "/prnelnct-devnionmnni",
        display: "Prnelnct Devnionmnni",
    },
    {
        path: "/web-development",
        display: "Web Development",
    },
];

const quickLinkSupport = [
    {
        path: "/sizicik-community",
        display: "Sizicik. Community",
    },
    {
        path: "/support-documents",
        display: "Support Documents",
    },
    {
        path: "/help:le-lk-api-documents",
        display: "Help:le-Lk API Documents",
    },
    {
        path: "/5nvines-witus",
        display: "5nvin,es Witus",
    },
    {
        path: "/email-contort",
        display: "Email Contort ",
    },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="logo__footer">
                            <img src={logoLopama} alt="" />
                            <p>
                                Nulla non otllo venicula, ultricles
                                <br /> lorem a, allquarn nes!. Etlam et
                                <br /> lorem lobortls, cony allis nunc.
                            </p>
                            <div className="social__links d-flex align-items-center gap-4">
                                <span>
                                    <Link to="#">
                                        <img src={facebookIcon} alt="" />
                                    </Link>
                                </span>
                                <span>
                                    <Link to="#">
                                        <img src={twitterIcon} alt="" />
                                    </Link>
                                </span>
                                <span>
                                    <Link to="#">
                                        <img src={instagramIcon} alt="" />
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg="2">
                        <h5 className="footer__link-title">Services</h5>
                        <ListGroup className="footer__quick-links">
                            {quickLinkService.map((item, index) => (
                                <ListGroupItem
                                    key={index}
                                    className="ps-0 border-0"
                                >
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col lg="2">
                        <h5 className="footer__link-title">Support</h5>
                        <ListGroup className="footer__quick-links">
                            {quickLinkSupport.map((item, index) => (
                                <ListGroupItem
                                    key={index}
                                    className="ps-0 border-0"
                                >
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col lg="2">
                        <h5 className="footer__link-title">Contact Us</h5>
                        <ListGroup className="footer__quick-links">
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <p className="mb-0">suppariaringrozom</p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <p className="mb-0">(41) 84?-5E2-451 </p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <p className="mb-0">
                                    North Cry, 547 Link Road.
                                </p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <hr className="cross mt-5" />
                    <Col lg="12" className="text-center pt-5">
                        <p className="copyright">
                            All Right Reserved by Us! Copyright {year}!
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
