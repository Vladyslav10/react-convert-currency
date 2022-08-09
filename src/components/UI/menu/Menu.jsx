import React from "react";
import { Route, Routes } from "react-router-dom";
import Link from "react-scroll/modules/components/Link";
import './Menu.css';

const Menu = ({header, items, active, setActive}) => {
    
    return(
       <div className={active ? 'menu active' : 'menu'}> 
            <div className="blur"></div>
            <div className="menu__content">
                <div className="menu__header">{header}</div>
                <ul className="menu__list">
                    {items.map(item =>
                        <li>
                            <Link onClick={() => setActive(false)} smooth={true} duration={500} key={item.value} to={item.id}>{item.value}</Link>
                        </li>   
                    )}
                </ul>
            </div>
       </div> 
    );
};

export default Menu;