import React, { useState } from 'react';
import {
    FaTh,
    FaUserAlt,
    // FaRegChartBar,
    // FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/product",
            name:"AddProduct",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productdetail",
            name:"Product List",
            icon:<FaThList/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
       
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar" onMouseEnter={toggle} onMouseLeave={toggle}>
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Tools</h1>
                   <div style={{marginLeft: isOpen ? "20px" : "0px"}} className="bars">
                    
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;