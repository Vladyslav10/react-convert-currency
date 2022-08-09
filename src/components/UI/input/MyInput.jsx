import React from "react";
import classes from './MyInput.module.css';

const MyInput = (props) => {

    return(
        <input 
            type='number'
            className={classes.Myinp}
            value={props.amount}
            onChange={ev => props.setAmount(ev.target.value)}
        />
    );
};

export default MyInput;