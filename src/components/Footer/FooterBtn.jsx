import React from 'react';
import './FooterBtn.css'

const FooterBtn = () => {
    return (
        <div>
            <ul className="footerBlockBtn">
                <li>
                    <button className="footBtn">О нас</button>
                </li>
                <li>
                    <button className="footBtn">Услуги</button>
                </li>
                <li>
                    <button className="footBtn">Проекты</button>
                </li>
                <li>
                    <button className="footBtn">Клиенты</button>
                </li>
                <li>
                    <button className="footBtn">Контакты</button>
                </li>
            </ul>
        </div>
    );
};

export default FooterBtn;