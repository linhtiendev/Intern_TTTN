import React from "react";

import "./newletter.css";
import { Row, Col } from "reactstrap";

const Newletter = () => {
    return (
        <div className="newletter__container">
            <Row className="newletter__section">
                <Col lg="6">
                    <div className="newletter__title">
                        <h1 className="section__contenttitle mb-4">
                            Sign up to Our
                            <br /> Newsletter
                        </h1>
                        <p className="section__subtitle">
                            You need to get positive results when you
                            <br /> spend hard earned revenue and time.
                        </p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__content">
                        <div className="newsletter__input">
                            <input type="email" placeholder="Email..." />
                            <button className="btn newsletter__btn">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Newletter;
