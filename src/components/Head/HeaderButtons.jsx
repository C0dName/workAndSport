import React from 'react';
// import ButtonsHead from "./UI/ButtonsHead";
import './HeaderButtons.css';

const HeaderButtons = () => {
    return (
        <div  className="blockBtn">
            <ul className="zeroUl">
                <li>
                    <button  className="headBtn1">О нас</button>
                </li>
                <li>
                    <button className="headBtn2">Услуги▼</button>
                </li>
                <li>
                    <button className="headBtn3">Проекты</button>
                </li>
                <li>
                    <button className="headBtn4">Клиенты</button>
                </li>
                <li>
                    <button className="headBtn5">Контакты</button>
                </li>
            </ul>
        </div>
    );
};

export default HeaderButtons;