import React from "react";
import "../styles/home.css";

import videoButtonImg from "../assets/images/videobutton.png";
import circleCheckImg from "../assets/images/circlecheck.png";
import rectangleFirstImg from "../assets/images/rectangle1.png";
import rectangleSecondImg from "../assets/images/rectangle2.png";
import rectangleThird from "../assets/images/rectangle3.png";
import contentImg from "../assets/images/content.png";
import marketingImg from "../assets/images/marketing.png";
import businessImg from "../assets/images/business.png";
import feedbackImg from "../assets/images/feedback.png";

import { Container, Row, Col, Button } from "reactstrap";
import Title from "../shared/Title";
import { Link } from "react-router-dom";

import ListLogo from "../components/ListLogo/ListLogo";
import ServiceList from "../services/ServiceList";
import Newletter from "../components/newletter/Newletter";

const Home = () => {
    return (
        <>
            {/* == hero section start == */}
            <section>
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
                                    <div className="d-flex gap-4">
                                        <span>
                                            <Button className="btn primary__btn subtitle_btn-box">
                                                <Link to="/">Get Started</Link>
                                            </Button>
                                        </span>
                                        <span>
                                            <Button className="btn hero__content-btn">
                                                <img
                                                    src={videoButtonImg}
                                                    alt=""
                                                />
                                            </Button>
                                        </span>
                                        <span className="subtitle_btn-text">
                                            Watch Video
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="hero__content-img">
                                <img src={contentImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* == hero section end == */}

            <ListLogo />

            {/* == service section start ==*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="service__section d-flex justify-content-center align-items-center">
                                <Title title={"WHAT WE DO"} />
                                <h1 className="section__contenttitle2 text-center mb-3">
                                    Grow Your Business <br /> With Ringo
                                </h1>
                                <p className="section__subtitle">
                                    tempus, lectus risus In' perdiel tellus, sed
                                    faucibus ipsum ipsurn nun neque.
                                </p>
                            </div>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>
            {/* == service section end ==*/}

            {/* == feature section start ==*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="marketing__img">
                                <img src={marketingImg} alt="" />
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="feature__content">
                                <Title title={"WHO WE ARE"} />
                                <h1 className="section__contenttitle2">
                                    Top #1 Marketing
                                    <br /> Agency in the World
                                </h1>
                                <p className="section__subtitle">
                                    Nunc venenalis Iorem sed risus trlstque sent
                                    per. Duls porta,
                                    <br /> rutruni tempus, lectus risus
                                    imDerdiet tellus, sed faucibus sum
                                    <br /> ipsum ncn neque. Curubilu r eleirend,
                                    erut ullamcorper porta.
                                    <br /> eras turpis.
                                </p>
                                <div>
                                    <Button className="btn primary__btn subtitle_btn-box">
                                        <Link to="/">Get In Touch</Link>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* == feature section end ==*/}

            {/* == business section start ==*/}
            <section className="business_section">
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="business__content">
                                {/* <div className="d-flex align-items-center"></div> */}
                                <Title title={"OUR MISSION & GOAL"} />
                                <h1 className="section__contenttitle2">
                                    Realize Your Business
                                    <br /> Goals For Profit
                                </h1>
                                <p className="section__subtitle">
                                    Nunc venenalis Iorem sed risus trlstque sent
                                    per. Duls porta,
                                    <br /> rutruni tempus, lectus risus
                                    imDerdiet tellus, sed faucibus sum
                                    <br />
                                    ipsum ncn neque. Curubilu r eleirend, erut
                                    ullamcorper porta.
                                    <br /> eras turpis.
                                </p>
                                <div>
                                    <Button className="btn primary__btn subtitle_btn-box">
                                        <Link to="/">Get In Touch</Link>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="business_img">
                                <img src={businessImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* == business section end ==*/}

            {/* == testmonials section start ==*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="feedback__img">
                                <img src={feedbackImg} alt="" />
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="testmonials__content">
                                <Title title={"TESTMONIALS"} />
                                <h1 className="section__contenttitle2">
                                    Client’s Fedback
                                </h1>
                                <p className="section__subtitle">
                                    Why I say okl chap that is. sprffing aff his
                                    rut car <br /> blimey valmor gooxo blaka
                                    krcus up bobby shed <br /> a-50 William cock
                                    Richard. Bloke fanny around <br /> cheseci
                                </p>
                                <div className="testmonials__client-feedback">
                                    <div className="testmonials__feedback-content">
                                        <img
                                            className="testmonials__feedback-img"
                                            src={circleCheckImg}
                                            alt=""
                                        />
                                        <span className="hightlight">
                                            450+{" "}
                                        </span>
                                        <span className="section__subtitle">
                                            Client's Feedback
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <Button className="btn primary__btn subtitle_btn-box">
                                        <Link to="/">Get In Touch</Link>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* == testmonials section end ==*/}

            {/* == blog section start ==*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="blog__content-text d-flex flex-column text-center mb-5">
                                <h1 className="section__contenttitle">
                                    Our Regular Updated
                                    <br /> Blog Posts
                                </h1>
                                <p className="section__subtitle mt-4">
                                    tempus, lectus risus In' perdiel tellus, sed
                                    faucibus ipsum ipsurn nun neque.{" "}
                                </p>
                            </div>
                        </Col>
                        <div className="d-flex justify-content-center">
                            <Row className="blog__card-container">
                                <Col lg="4" md="6" sm="12">
                                    <a href="/" className="blog__card-box">
                                        <div className="blog__card-img">
                                            <img
                                                src={rectangleFirstImg}
                                                alt=""
                                            />
                                        </div>
                                        <div className="blog__card-content p-3 mt-3">
                                            <h2 className="blog__card-title">
                                                SEO tips and tricks for new
                                            </h2>
                                            <p className="blog__card-subtitle">
                                                Curapitur eleifenc erat id
                                                ullarncorper porta,
                                                <br /> eras turpis tun pus
                                                just!, a porititar ju-to ode
                                                <br /> id oros. Proin lloborti*
                                            </p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <a href="/" className="blog__card-box">
                                        <div className="blog__card-img">
                                            <img
                                                src={rectangleSecondImg}
                                                alt=""
                                            />
                                        </div>
                                        <div className="blog__card-content p-3 mt-3">
                                            <h2 className="blog__card-title">
                                                A Guide to Google SEO
                                            </h2>
                                            <p className="blog__card-subtitle">
                                                Curapitur eleifenc erat id
                                                ullarncorper porta,
                                                <br /> eras turpis tun pus
                                                just!, a porititar ju-to ode
                                                <br /> id oros. Proin lloborti*
                                            </p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <a href="/" className="blog__card-box">
                                        <div className="blog__card-img">
                                            <img src={rectangleThird} alt="" />
                                        </div>
                                        <div className="blog__card-content p-3 mt-3">
                                            <h2 className="blog__card-title">
                                                Best Practices SEO Content
                                            </h2>
                                            <p className="blog__card-subtitle">
                                                Curapitur eleifenc erat id
                                                ullarncorper porta,
                                                <br /> eras turpis tun pus
                                                just!, a porititar ju-to ode
                                                <br /> id oros. Proin lloborti*
                                            </p>
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </section>
            {/* == blog section end ==*/}

            {/* == newsletter section start ==*/}
            <section>
                <Container>
                    <Newletter />
                </Container>
            </section>
            {/* == newsletter section end ==*/}
        </>
    );
};

export default Home;
