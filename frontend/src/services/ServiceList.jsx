import React from "react";

import { Col } from "reactstrap";

import ServiceCard from "./ServiceCard";

import emailIcon from "../assets/images/icons/emailicon.png";
import marketingIcon from "../assets/images/icons/marketingicon.png";
import searchIcon from "../assets/images/icons/searchicon.png";

const servicesData = [
    {
        imgUrl: searchIcon,
        title: "Search Engine",
        desc: "Twit are excet  Frond, rnatie boy<br /> grub it's tell gone to pot MI Mrs nut<br /> butts horse play blow ",
    },
    {
        imgUrl: emailIcon,
        title: "Email Marketing",
        desc: "Twit are excet  Frond, rnatie boy<br /> grub it's tell gone to pot MI Mrs nut<br /> butts horse play blow ",
    },
    {
        imgUrl: marketingIcon,
        title: "Media Marketing",
        desc: "Twit are excet  Frond, rnatie boy<br /> grub it's tell gone to pot MI Mrs nut<br /> butts horse play blow ",
    },
];

const ServiceList = () => {
    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg="4" md="6" sm="12" className="mb-4" key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList;
