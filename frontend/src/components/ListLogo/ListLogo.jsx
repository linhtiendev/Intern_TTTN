import React from "react";
import "./listlogo.css";

import googleImg from "../../assets/images/google.png";
import herokuImg from "../../assets/images/heroku.png";
import riotintoImg from "../../assets/images/riotinto.png";
import slackImg from "../../assets/images/slack.png";
import discordImg from "../../assets/images/discord.png";

const ListLogo = () => {
    return (
        <section className="list__logo-section">
            <div className="list__logo-content d-flex gap-5 align-items-center">
                <img className="list__logo-box" src={googleImg} alt="" />
                <img className="list__logo-box" src={herokuImg} alt="" />
                <img className="list__logo-box" src={riotintoImg} alt="" />
                <img className="list__logo-box" src={slackImg} alt="" />
                <img className="list__logo-box" src={discordImg} alt="" />
            </div>
        </section>
    );
};

export default ListLogo;
