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
            <div className="list__logo-content d-flex align-items-center">
                <img className="list__logo-google" src={googleImg} alt="" />
                <img className="list__logo-slack" src={slackImg} alt="" />
                <img className="list__logo-discord" src={discordImg} alt="" />
                <img className="list__logo-riotinto" src={riotintoImg} alt="" />
                <img className="list__logo-heroku" src={herokuImg} alt="" />
            </div>
        </section>
    );
};

export default ListLogo;
