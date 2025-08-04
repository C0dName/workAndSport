import React from 'react';
import "./Footer.css"
import FooterBtn from "./FooterBtn";

const Footer = () => {
    return (
        <div className="footerBlock">
            <div className="footBlockLogoAddressBtn">
                <img src="/pics/WorkAndSport.svg"/>
                <div className="footAddressPosition">
                    <address className="footAddress">ООО «Корпоративный Петербург»
                    <br/>
                    Юридический адрес: 192012, г. Санкт-Петербург,
                    <br/>
                    пр. Обуховской обороны, д. 271, лит. А, пом. 419
                    <br/>
                    ИНН: 7810471307
                    <br/>
                    КПП: 781101001</address>
                </div>
                <div className="footerBtnPosition">
                    <FooterBtn/>
                </div>
            </div>
            <div className="footPrivacyPolicyPosition">
                <a className="footPrivacyPolicy" href="">политика конфиденциальности</a>
                <a className="footPrivacyPolicy" href="">Разработано Sportsoft. 2025</a>
            </div>
            <img className="footRacketBall" src="/pics/footRacketBall.svg" alt=""/>

        </div>
    );
};

export default Footer;