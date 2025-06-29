import React from 'react';
import classes from "./ButtonRedHead.module.css";

const ButtonRedHead = ({children}) => {
    return (
        <button className={classes.redBtnHead}>
            {children}
        </button>
    );
};

export default ButtonRedHead;