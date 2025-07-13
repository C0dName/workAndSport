import React, {useState} from 'react';
import "./RussiaMap.css"

const RussiaMap = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHoveredMSK, setIsHoveredMSK] = useState(false);
    const [isHoveredSPB, setIsHoveredSPB] = useState(false);
    return (
        <div className="RussiaMapGlobal">
            <div className="TopMap">География наших ивентов</div>
            <div style={{
                position: 'absolute',
                width: "944.33px",
                height: "490.84px",
                marginTop: "75.48px",
                marginLeft: "126px"
            }}>
                <img style={{position: "absolute"}} src="/pics/RussiaMap.svg" alt="карта россии"/>
            </div>
            <div className="SPB"
                 onMouseEnter={() => setIsHoveredSPB(true)}
                 onMouseLeave={() => setIsHoveredSPB(false)}>
                <button className="MapBtn">Санкт-Петербург</button>
                {isHoveredSPB && (
                    <img style={{
                        position: "absolute",
                        marginTop: "8px",
                        marginLeft: "75.5px"}} src="/pics/RedPointCircleHover.svg"/>
                )}
                <img style={{
                    marginTop: "8px",
                    marginLeft: "75.5px"
                }} src="/pics/RedPointCircle.svg" alt="красный круг под питером"/>
            </div>
            <div className="Luga"
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>
                {isHovered && (
                    <button className="MapBtn">Луга</button>
                )}

                <img style={{
                    position: "absolute",
                    marginLeft: "112px",
                    marginTop: "3px",
                }} src="/pics/RedPointCircleMini.svg" alt="красный круг справа от луги"/>
                {isHovered && (
                    <img style={{
                        position: "absolute",
                        marginLeft: "112px",
                        marginTop: "3px",
                    }} src="/pics/RedPointCircleMiniHover.svg"/>
                )}
            </div>
            <div className="SrgPsd"
                 onMouseEnter={() => setIsHovered1(true)}
                 onMouseLeave={() => setIsHovered1(false)}>
                <img style={{
                    marginTop: "3px",
                    marginRight: "8px",
                    marginBottom: "2px"
                }} src="/pics/RedPointCircleMini.svg" alt="красный круг слева от сергиева пасада"/>
                {isHovered1 && (
                    <img style={{
                        position: "absolute",
                        marginTop: "3px",
                        marginRight: "8px"
                    }} src="/pics/RedPointCircleMiniHover.svg"/>
                )}
                {isHovered1 && (
                    <button className="MapBtn">Сергиев Пасад</button>
                )}
            </div>
            <div className="Pskov"
                 onMouseEnter={() => setIsHovered2(true)}
                 onMouseLeave={() => setIsHovered2(false)}>
                <img style={{
                    position: "absolute",
                    marginTop: "3px",
                    marginLeft: "112px"
                }} src="/pics/RedPointCircleMini.svg" alt="красный круг слева от сергиева пасада"/>
                {isHovered2 && (
                    <img style={{
                        position: "absolute",
                        marginTop: "3px",
                        marginLeft: "112px"
                    }} src="/pics/RedPointCircleMiniHover.svg"/>
                )}
                {isHovered2 && (
                    <button className="MapBtn">Псков</button>
                )}
            </div>
            <div className="MSK"
                 onMouseEnter={() => setIsHoveredMSK(true)}
                 onMouseLeave={() => setIsHoveredMSK(false)}>
                {isHoveredMSK && (
                    <img style={{
                        position: "absolute",
                        marginLeft: "35px",
                        marginBottom: "8px"}} src="/pics/RedPointCircleHover.svg"/>
                )}
                <img style={{
                    marginLeft: "35px",
                    marginBottom: "8px"
                }} src="/pics/RedPointCircle.svg" alt="красный круг над мск"/>
                <button className="MapBtn">Москва</button>
            </div>
            <div className="Vladivostok"
                 onMouseEnter={() => setIsHovered3(true)}
                 onMouseLeave={() => setIsHovered3(false)}>
                {isHovered3 && (
                    <button className="MapBtn">Владивосток</button>
                )}
                <img style={{
                    position: "absolute",
                    marginTop: "41px",
                    marginLeft: "63px"
                }} src="/pics/RedPointCircleMini.svg" alt="красный круг слева от сергиева пасада"/>
                {isHovered3 && (
                    <img style={{
                        position: "absolute",
                        marginTop: "41px",
                        marginLeft: "63px"
                    }} src="/pics/RedPointCircleMiniHover.svg"/>
                )}
            </div>
        </div>
    );
};

export default RussiaMap;