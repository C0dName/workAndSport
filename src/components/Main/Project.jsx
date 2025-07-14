import React from 'react';
import "./Project.css";

const Project = () => {
    return (
        <div className="ProjectMain">
            <div className="ProjectMainTopBlock">
                <div className="ProjectMainTopHead">Наши проекты</div>

            </div>
            <div className="ProjectMainImageBlock">
                <img src="/pics/image1.png"/>
                <img src="/pics/image2.png"/>
                <img src="/pics/image3.png"/>
                <img src="/pics/image4.png"/>
                <img src="/pics/image5.png"/>
                <img src="/pics/image6.png"/>
            </div>

        </div>
    );
};

export default Project;