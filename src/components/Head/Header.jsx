import React from 'react';
import './Header.css';
import LogoHeader from "./LogoHeader";
import HeaderButtons from "./HeaderButtons";
import ButtonRedHead from "../UI/ButtonRedHead";
import ImgTeamWS from "./ImgTeamWS";


const Header = () => {
    return (
        <div>
            <div className="header">
                <LogoHeader/>
                <div className="blockBtn">
                    <HeaderButtons/>
                </div>
                <ButtonRedHead>ОСТАВИТЬ ЗАЯВКУ</ButtonRedHead>
            </div>
            <div className="imgTeamWS">

                <ImgTeamWS/>
                <div className="blackGradient"></div>
            </div>
        </div>
    );
};

export default Header;