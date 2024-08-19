import React from "react";
import "../styles/home.css";

import baseImg from "../assets/images/base.png";
import maskGroupImg from "../assets/images/maskgroup.png";
import videoButtonImg from "../assets/images/videobutton.png";

import { Container, Row, Col, Button } from "reactstrap";
import Title from "../shared/Title";
import { Link } from "react-router-dom";
import ListLogo from "../components/ListLogo/ListLogo";

const Home = () => {
    return (
        <>
            {/* == hero section start == */}
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Title title={"AWARD WINNING COMPANY"} />
                                </div>
                                <h1 className="section__contenttitle">
                                    We Are The Best <br />
                                    Digital Marketing
                                </h1>
                                <p className="section__subtitle">
                                    You need to get positive results when you
                                    spend hard earned <br /> revenue and time on
                                    any marketing effort. Great returns on
                                    <br />
                                    marketing and promotions.
                                </p>
                                <div className="hero__subtitle-box">
                                    <Row>
                                        <Col lg="3">
                                            <Button className="btn primary__btn subtitle_btn-box">
                                                <Link to="/">Get Started</Link>
                                            </Button>
                                        </Col>
                                        <Col lg="2">
                                            <Button className="btn hero__content-btn">
                                                <img
                                                    src={videoButtonImg}
                                                    alt=""
                                                />
                                            </Button>
                                        </Col>
                                        <Col lg="7">
                                            <div className="subtitle_btn-text">
                                                Watch Video
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="hero__img">
                                <img
                                    className="hero__img-base"
                                    src={baseImg}
                                    alt=""
                                />
                                <img
                                    className="hero__img-markgroup"
                                    src={maskGroupImg}
                                    alt=""
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* == hero section end == */}
            <ListLogo />
        </>
    );
};

export default Home;
