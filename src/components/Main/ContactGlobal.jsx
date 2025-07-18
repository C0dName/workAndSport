import React from 'react';
import "./ContactGlobal.css"
import Contact from "./Contact";

const ContactGlobal = () => {
    return (
        <div className="ContactGlobal">
            <Contact/>
            <div className="writeToUs">
                <p className="writeToUsTop">НАПИШИТЕ НАМ, ЧТОБЫ ОБСУДИТЬ ПРОЕКТ</p>
                <div className="inputWriteToUs">
                    <input className="inputName" type="text" placeholder="   Имя"/>
                    <input className="inputNumber" type="number" placeholder="    Телефон"/>
                    <input className="inputMessage" type="text" placeholder="Сообщение"/>
                </div>
                <div className="send">
                    <button className="redButton">ОТПРАВИТЬ</button>
                    <p className="sendInfo">Оставляя данные, вы соглашаетесь c&nbsp;
                        <a className="sendInfoPolitics" href="https://developer.mozilla.org">
                            политикой конфиденциальности
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactGlobal;