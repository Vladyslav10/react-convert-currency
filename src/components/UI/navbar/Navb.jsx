import React from "react";
import './Navb.css';

const Navb = ({active, setActive}) => {

    return(
       <nav className="navbar">
           <div className={active ? 'burger__icon active' : 'burger__icon'} onClick={() => setActive(!active)}>
                <span></span>
                <span></span>
                <span></span>
           </div> 
       </nav> 
    );
};

export default Navb;