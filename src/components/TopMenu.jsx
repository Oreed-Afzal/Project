import React from 'react';
import { Link } from "react-router-dom";

const TopMenu = () => {
    return ( <div>
        <ul>
            <li style={{display: "inline", padding: "5px"}}><Link to="/">Home</Link></li>
            <li style={{display: "inline", padding: "5px"}}><Link to="/About">About</Link></li>
            
            <li style={{display: "inline", padding: "5px"}}><Link to="/Services">Services</Link></li>
            <li style={{display: "inline", padding: "5px"}}><Link to="/ContactUS">Contact Us</Link></li>
            <li style={{display: "inline", padding: "5px"}}><Link to="/NewProduct">New Product</Link></li>
            <li style={{display: "inline", padding: "5px"}}><Link to="/Products">Products</Link></li>
            <li style={{display: "inline", padding: "5px"}}><Link to="/Login">Login</Link></li>
        </ul>
    </div> );
}
 
export default TopMenu;