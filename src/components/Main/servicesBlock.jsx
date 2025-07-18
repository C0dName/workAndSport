import React from 'react';
import classes from "./servicesBlock.module.css";

const ServicesBlock = ({children}) => {
    return (
        <div className={classes.services_block}>
            <svg style={{
                marginTop: "26px",
                marginLeft: "24px",
                position: "absolute"
            }} width="4" height="65" viewBox="0 0 4 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="65" x2="2" y2="-1.12212e-09" stroke="#EE364A" strokeWidth="4"/>
            </svg>
            <svg style={{
                marginLeft: "24px",
                marginTop: "333",
                display: "flex",
                alignItems: "end",
                position: "absolute"
            }} width="41" height="24" viewBox="0 0 41 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M40.0607 13.0607C40.6464 12.4749 40.6464 11.5251 40.0607 10.9393L30.5147 1.3934C29.9289 0.807612 28.9792 0.807612 28.3934 1.3934C27.8076 1.97918 27.8076 2.92893 28.3934 3.51472L36.8787 12L28.3934 20.4853C27.8076 21.0711 27.8076 22.0208 28.3934 22.6066C28.9792 23.1924 29.9289 23.1924 30.5147 22.6066L40.0607 13.0607ZM0 12V13.5H39V12V10.5H0V12Z"
                    fill="#EE364A"/>
            </svg>
            {children}
        </div>
    );
};

export default ServicesBlock;