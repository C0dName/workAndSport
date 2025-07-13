import React, {useState} from 'react';
import './Services.css'
import ServicesBlock from "./servicesBlock";


const Services = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    return (
        <div className="servicesBlock">
            <p className='services'>Услуги</p>
            <div className="BlockRectangle">
                <ServicesBlock>
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{position: 'absolute',
                                width: "373px",
                                height: "373px"}}
                    >
                    {isHovered && (
                        <img style={{ marginTop: "174px",
                                marginLeft: "137px"}}
                                src="/pics/kubokRedStarHover.svg"/>
                        )}
                    </div>
                    <div className="TopTextBox">Спартакиады и турниры</div>
                    <div className="TopTextBox1">Спортивный ивент для вашей компании</div>
                    <img style={{
                        marginTop: "28.3px",
                        marginLeft: "137px"
                    }}
                         src="/pics/KubokStar.svg"/>
                </ServicesBlock>
                <ServicesBlock>
                    <div
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                        style={{
                            position: 'absolute',
                            width: "373px",
                            height: "373px"
                        }}
                    >
                        {isHovered1 && (
                            <img style={{
                                position: "absolute",
                                marginTop: "175px",
                                marginLeft: "110px",
                            }}
                                 src="/pics/twoMansHover.svg"/>
                        )}
                    </div>
                    <div className="TopTextBox">Корпоративные ивенты</div>
                    <div className="TopTextBox1">Тимбилдинги, Familydays, Новогодние корпоративы и другие</div>
                    <img style={{
                        marginTop: "29.3px",
                        marginLeft: "110px"
                    }}
                         src="/pics/twoMans.svg"/>
                </ServicesBlock>
                <ServicesBlock>
                    <div
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                        style={{
                            position: 'absolute',
                            width: "373px",
                            height: "373px"
                        }}
                    >
                        {isHovered2 && (
                            <img style={{position: "absolute",
                                    marginTop: "200px",
                                    marginLeft: "96.62px"}}
                                 src="/pics/LeagueHover.svg" alt="League Logo"/>
                        )}
                    </div>
                    <div className="TopTextBox">Лига Ворк энд Спорт</div>
                    <div className="TopTextBox1">Корпоративные соревнования по различным видам спорта</div>
                    <img style={{
                        marginTop: "54.33px",
                        marginLeft: "97px"
                    }}
                         src="/pics/League.svg"/>
                </ServicesBlock>
                <ServicesBlock>
                    <div
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                        style={{
                            position: 'absolute',
                            width: "373px",
                            height: "373px"
                        }}
                    >
                        {isHovered3 && (
                            <img style={{position: "absolute",
                                        marginTop: "170px",
                                        marginLeft: "109px"}}
                                 src="/pics/SupportSportHover.svg"/>

                        )}
                    </div>
                    <div className="TopTextBox">Сопровождение по спорту</div>
                    <div className="TopTextBox1">Спортивный отдел внутри вашей компании</div>
                    <img style={{
                        marginTop: "24.3px",
                        marginLeft: "109px"
                    }}
                         src="/pics/Support.svg"/>
                </ServicesBlock>
                <ServicesBlock>
                    <div
                        onMouseEnter={() => setIsHovered4(true)}
                        onMouseLeave={() => setIsHovered4(false)}
                        style={{
                            position: 'absolute',
                            width: "373px",
                            height: "373px"
                        }}
                    >
                        {isHovered4 && (
                            <img style={{position: "absolute",
                                marginTop: "165px",
                                marginLeft: "135px"
                            }}
                                 src="/pics/TimerHover.svg"/>
                        )}
                    </div>
                    <div className="TopTextBox">Тренировки</div>
                    <div className="TopTextBox1">Подбор профессиональных тренеров и площадок</div>
                    <img style={{
                        marginTop: "51.3px",
                        marginLeft: "135px"
                    }} src="/pics/Timer.svg"/>
                </ServicesBlock>
                <ServicesBlock>
                    <div
                        onMouseEnter={() => setIsHovered5(true)}
                        onMouseLeave={() => setIsHovered5(false)}
                        style={{
                            position: 'absolute',
                            width: "373px",
                            height: "373px"
                        }}
                    >
                        {isHovered5 && (
                            <img style={{position: "absolute",
                                marginTop: "160px",
                                marginLeft: "97px"
                            }}
                                 src="/pics/MerchHover.svg"/>
                        )}
                    </div>
                    <div className="TopTextBox">Мерч и экипировка</div>
                    <div className="TopTextBox1">Яркий мерч для вашей команды</div>
                    <img style={{
                        marginTop: "14.3px",
                        marginLeft: "97px"
                    }} src="/pics/Merch.svg"/>
                </ServicesBlock>
            </div>
        </div>
    );
};

export default Services;