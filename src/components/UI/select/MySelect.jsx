import React from "react";
import classes from './MySelect.module.css';

const MySelect = ({defaultValue, options, setCurrency}) => {
    
    return(
        <select 
            value={defaultValue} 
            className={classes.MySlc}
            onChange={ev => setCurrency(ev.target.value)}
        >
            {options.map(option =>
                <option key={option} value={option}>
                    {option}
                </option>   
            )}
        </select>
    );
};

export default MySelect;