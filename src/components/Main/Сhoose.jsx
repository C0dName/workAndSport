import React from 'react';
import "./Choose.css"
import Carousel from "../CarouselChoose/Carousel";

const Choose = () => {
    const svgList = [
        '/pics/PETR.svg',
        '/pics/BSPB.svg',
        '/pics/NTPK.svg',
        '/pics/BBR.svg',
        '/pics/PULK.svg',
        // Добавьте свои SVG-файлы
    ];
    return (
        <div className="choose">
            <div className="chooseTop">Нас выбирают</div>
            <Carousel svgImages={svgList}/>
        </div>
    );
};

export default Choose;