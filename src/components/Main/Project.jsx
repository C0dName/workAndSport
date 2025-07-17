import React, {useState} from 'react';
import "./Project.css";

const Project = () => {
    const [isActive, setIsActive] = useState(false);
    const [isHover, setIsHover] = useState(false);
    return (
        <div className="ProjectMain">
            <div className="ProjectMainTopBlock">
                <div className="ProjectMainTopHead">Наши проекты</div>
                <div className="allProject"
                     onMouseDown={() => setIsActive(true)}
                     onMouseUp={() => setIsActive(false)}>
                    <div className="allProjectText">ВСЕ ПРОЕКТЫ</div>
                    <img className="StrelkaRight" src="/pics/StrelkaRight.svg" alt="Стрелка правая"/>
                    {isActive && (
                        <img className="StrelkaRight" src="/pics/StrelkaRightWhite.svg" alt="стрелка вправо белая"/>
                    )}
                </div>
            </div>
            <div className="ProjectMainImageBlock">
                <img src="/pics/image1.png"/>

                <img onMouseEnter={() => setIsHover(true)}
                     onMouseLeave={() => setIsHover(false)}
                     src="/pics/image2.png"/>
                {isHover && (
                <div className="image2"
                     onMouseEnter={() => setIsHover(true)}
                     onMouseLeave={() => setIsHover(false)}>
                    <div className="DayCityBalash">День Города - Балашиха</div>
                    <div className="familyDay">Family Day</div>
                    <img className="imageStrelka" src="/pics/StrelkaRightWhite.svg"/>
                </div>
                    )}
                <img src="/pics/image3.png"/>
                <img src="/pics/image4.png"/>
                <img src="/pics/image5.png"/>
                <img src="/pics/image6.png"/>
            </div>

        </div>
    );
};

export default Project;