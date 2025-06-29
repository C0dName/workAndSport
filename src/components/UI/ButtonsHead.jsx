import React from 'react';
import classes from "./ButtonsHead.module.css";

const ButtonsHead = ({children, ...props}) => {
    return (
        <button {...props} className={classes.ButtonsHead1}>
            {children}
        </button>
    );
};

export default ButtonsHead;