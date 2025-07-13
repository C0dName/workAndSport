import React from 'react';
import "./GlobalInfo.css";

const GlobalInfo = () => {
    return (
        <div className="GlobalInfo">
            <div>
            <div className="number12">12</div>
            <div className="dopInfo">лет на рынке</div>
            </div>
            <div>
            <div className="number12">700+</div>
            <div className="dopInfo">проектов</div>
            </div>
            <div>
            <div className="number12">500+</div>
            <div className="dopInfo">компаний</div>
            </div>
            <button className="BtnInfo">ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
    );
};

export default GlobalInfo;