import React, {useRef, useEffect, useState} from 'react';
import "./Carousel.css"

const Carousel = ({svgImages}) => {
    const [offset, setOffset] = useState(0);
    const requestRef = useRef();
    const carouselRef = useRef(null);
    const speed = 1; // Скорость движения (пикселей за кадр)
    const duplicatedImages = [...svgImages, ...svgImages, ...svgImages];
    const animate = () => {
        setOffset(prev => {
            const newOffset = prev + speed;
            return newOffset >= carouselRef.current?.scrollWidth / 2 ? 0 : newOffset;
        });
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);



    return (
        <div className="carousel-container">
            <div
                className="carousel-track"
                ref={carouselRef}
                style={{ transform: `translateX(-${offset}px)` }}
            >
                {duplicatedImages.map((svg, index) => (
                    <div key={`${index}-${svg}`} className="carousel-slide">
                        <img
                            src={svg}
                            alt=""
                            className="svg-item"
                            draggable="false"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Carousel;