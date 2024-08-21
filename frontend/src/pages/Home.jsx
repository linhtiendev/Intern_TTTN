import React from "react";
import "../styles/home.css";

import baseImg from "../assets/images/base.png";
import backkgroundImg from "../assets/images/background.png";
import maskGroupImg from "../assets/images/maskgroup.png";
import videoButtonImg from "../assets/images/videobutton.png";
import marketingManImg from "../assets/images/marketingman.png";
import businessManImg from "../assets/images/businessman.png";
import markImg from "../assets/images/mark.png";
import PaisImg from "../assets/images/pais.png";
import alinaImg from "../assets/images/alina.png";
import starImg from "../assets/images/star.png";
import doubleComma from "../assets/images/doublecomma.png";
import circleCheckImg from "../assets/images/circlecheck.png";
import rectangleFirstImg from "../assets/images/rectangle1.png";
import rectangleSecondImg from "../assets/images/rectangle2.png";
import rectangleThird from "../assets/images/rectangle3.png";

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
                                        <Col lg="4">
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
                                        <Col lg="6">
                                            <div className="subtitle_btn-text">
                                                Watch Video
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="hero__content-img">
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
                                <h1 className="section__contenttitle text-center">
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
            <section className="feature__section">
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="feature__content-img">
                                <div className="feature__img">
                                    <img
                                        className="feature__img-base"
                                        src={baseImg}
                                        alt=""
                                    />
                                    <img
                                        className="feature__img-marketingman"
                                        src={marketingManImg}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="feature__content">
                                <div className="hero__subtitle">
                                    <Title title={"WHO WE ARE"} />
                                </div>
                                <h1 className="section__contenttitle">
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
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Title title={"OUR MISSION & GOAL"} />
                                </div>
                                <h1 className="section__contenttitle">
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
                            <div className="business_content-img">
                                <div className="business__img">
                                    <img
                                        className="business__img-base"
                                        src={baseImg}
                                        alt=""
                                    />
                                    <img
                                        className="business__img-businessman"
                                        src={businessManImg}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* == business section end ==*/}

            {/* == testmonials section start ==*/}
            <section className="testmonials__section">
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="testmonials__content-img">
                                <div className="testmonials__img">
                                    <img
                                        className="testmonials__img-base"
                                        src={backkgroundImg}
                                        alt=""
                                    />

                                    <div className="testmonials__img-mark">
                                        <div className="testmonials__img-content">
                                            <div className="testmonials__img">
                                                <img src={markImg} alt="" />
                                            </div>
                                            <div className="testmonials__text">
                                                <h5 className="testmonials__name">
                                                    Mark Parker
                                                </h5>
                                                <p className="testmonials__subtitle">
                                                    CEO of Fiverr
                                                </p>
                                                <p className="testmonials__title">
                                                    Cura bitur susci pit nequeut
                                                    lacus
                                                    <br /> interd sit amet
                                                    dictum nunc eleifend
                                                    <br />. Mauris pulvinar odio
                                                    at nunc labortis.
                                                </p>
                                            </div>
                                            <div className="testmonials__vote">
                                                <img src={starImg} alt="" />
                                                <p>4.5</p>
                                            </div>
                                            <div className="testmonials__comma">
                                                <img src={doubleComma} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testmonials__img-pais">
                                        <div className="testmonials__img-content">
                                            <div className="testmonials__img">
                                                <img src={PaisImg} alt="" />
                                            </div>
                                            <div className="testmonials__text">
                                                <h5 className="testmonials__name">
                                                    Pais Gold
                                                </h5>
                                                <p className="testmonials__subtitle">
                                                    CEO of Fiverr
                                                </p>
                                                <p className="testmonials__title">
                                                    Cura bitur susci pit nequeut
                                                    lacus
                                                    <br /> interd sit amet
                                                    dictum nunc eleifend
                                                    <br />. Mauris pulvinar odio
                                                    at nunc labortis.
                                                </p>
                                            </div>
                                            <div className="testmonials__vote">
                                                <img src={starImg} alt="" />
                                                <p>4.5</p>
                                            </div>
                                            <div className="testmonials__comma">
                                                <img src={doubleComma} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testmonials__img-alina">
                                        <div className="testmonials__img-content">
                                            <div className="testmonials__img">
                                                <img src={alinaImg} alt="" />
                                            </div>
                                            <div className="testmonials__text">
                                                <h5 className="testmonials__name">
                                                    Alina doly
                                                </h5>
                                                <p className="testmonials__subtitle">
                                                    CEO of Fiverr
                                                </p>
                                                <p className="testmonials__title">
                                                    Cura bitur susci pit nequeut
                                                    lacus
                                                    <br /> interd sit amet
                                                    dictum nunc eleifend
                                                    <br />. Mauris pulvinar odio
                                                    at nunc labortis.
                                                </p>
                                            </div>
                                            <div className="testmonials__vote">
                                                <img src={starImg} alt="" />
                                                <p>4.5</p>
                                            </div>
                                            <div className="testmonials__comma">
                                                <img src={doubleComma} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="testmonials__content">
                                <div className="hero__subtitle">
                                    <Title title={"TESTMONIALS"} />
                                </div>
                                <h1 className="section__contenttitle">
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
                            <div className="blog__content-text d-flex flex-column text-center">
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
                        <Row className="blog__card-container gx-4">
                            <Col lg="4" md="6" sm="12">
                                <div className="blog__card-box">
                                    <div className="blog__card-img">
                                        <img src={rectangleFirstImg} alt="" />
                                    </div>
                                    <div className="blog__card-content p-3 mt-3">
                                        <a
                                            href="/"
                                            className="blog__card-title"
                                        >
                                            SEO tips and tricks for new
                                        </a>
                                        <p className="blog__card-subtitle">
                                            Curapitur eleifenc erat id
                                            ullarncorper porta,
                                            <br /> eras turpis tun pus just!, a
                                            porititar ju-to ode
                                            <br /> id oros. Proin lloborti*
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <div className="blog__card-box">
                                    <div className="blog__card-img">
                                        <img src={rectangleSecondImg} alt="" />
                                    </div>
                                    <div className="blog__card-content p-3 mt-3">
                                        <a
                                            href="/"
                                            className="blog__card-title"
                                        >
                                            A Guide to Google SEO
                                        </a>
                                        <p className="blog__card-subtitle">
                                            Curapitur eleifenc erat id
                                            ullarncorper porta,
                                            <br /> eras turpis tun pus just!, a
                                            porititar ju-to ode
                                            <br /> id oros. Proin lloborti*
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <div className="blog__card-box">
                                    <div className="blog__card-img">
                                        <img src={rectangleThird} alt="" />
                                    </div>
                                    <div className="blog__card-content p-3 mt-3">
                                        <a
                                            href="/"
                                            className="blog__card-title"
                                        >
                                            Best Practices SEO Content
                                        </a>
                                        <p className="blog__card-subtitle">
                                            Curapitur eleifenc erat id
                                            ullarncorper porta,
                                            <br /> eras turpis tun pus just!, a
                                            porititar ju-to ode
                                            <br /> id oros. Proin lloborti*
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </section>
            {/* == blog section end ==*/}
            <section>
                <Container>
                    <Newletter />
                </Container>
            </section>
            {/* == newsletter section start ==*/}
        </>
    );
};

export default Home;
