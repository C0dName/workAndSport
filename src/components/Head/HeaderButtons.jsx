import React from 'react';
// import ButtonsHead from "./UI/ButtonsHead";
import './HeaderButtons.css';

const HeaderButtons = () => {
    return (
            <ul className="zeroUl">
                <li>
                    <button  className="headBtn">О нас</button>
                </li>
                <li>
                    <button className="headBtn">Услуги▼</button>
                </li>
                <li>
                    <button className="headBtn">Проекты</button>
                </li>
                <li>
                    <button className="headBtn">Клиенты</button>
                </li>
                <li>
                    <button className="headBtn">Контакты</button>
                </li>
            </ul>
    );
};

export default HeaderButtons;