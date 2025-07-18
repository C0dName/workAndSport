import React, {useState} from 'react';
import "./Contact.css"

const Contact = () => {
    const [isActiveTG, setIsActiveTG] = useState(false);
    const [isActiveVK, setIsActiveVK] = useState(false);
    const [isActiveSB, setIsActiveSB] = useState(false);
    return (

            <div className="ContactNumber">
                <div style={{width:'290px',
                height:'219px'}}>
                <p className="ContactText">Мы всегда с вами:</p>
                <p className="ContactTextNumber">+7 (812) 401 45 20</p>
                <p className="ContactTextNumber">+7 999 999 99 99</p>
                <p className="ContactTextNumber">info@worksport.ru</p>
                <p className="ContactText2">По вопросам сотрудничества:</p>
                <p className="ContactTextNumber">+7 911 925 98 05 </p>
                </div>
                <div className="Social">
                    <div className="SocialIconBlock"
                         onMouseDown={() => setIsActiveTG(true)}
                         onMouseUp={() => setIsActiveTG(false)}>
                        <img className="SocialIcon" src="/pics/TG.svg" alt="Теоеграм"/>
                        {isActiveTG && (
                            <img className="SocialIconRed" src="/pics/TGred.svg" alt="ТеоеграмRed"/>)}
                    </div>
                    <div className="SocialIconBlock"
                         onMouseDown={() => setIsActiveVK(true)}
                         onMouseUp={() => setIsActiveVK(false)}>
                        <img className="SocialIcon" src="/pics/VK.svg" alt="Вконтакте"/>
                        {isActiveVK && (
                            <img className="SocialIconRed" src="/pics/VKred.svg" alt="ВконтактеRed"/>)}
                    </div>
                    <div className="SocialIconBlock"
                         onMouseDown={() => setIsActiveSB(true)}
                         onMouseUp={() => setIsActiveSB(false)}>
                        <img className="SocialIcon" src="/pics/SB.svg" alt="Subtract"/>
                        {isActiveSB && (
                            <img className="SocialIconRed" src="/pics/SBred.svg" alt="SubtractRed"/>)}
                    </div>
                </div>
            </div>

    );
};

export default Contact;