import React from 'react';
// import ButtonsHead from "./UI/ButtonsHead";
import './HeaderButtons.css';

const HeaderButtons = () => {
    return (
        <div  className="blockBtn">
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
        </div>
    );
};

export default HeaderButtons;