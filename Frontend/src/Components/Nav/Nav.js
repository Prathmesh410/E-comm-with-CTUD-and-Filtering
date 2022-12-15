import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"
const Nav = () => {
 return(
    <div className="Nav_Container">
        <ul className="Nav_List">
            <li className="Nav_List_item"> <Link to ="/">Products</Link></li>
            <li className="Nav_List_item"><Link to ="/addproduct">Add Products</Link></li>
            <li className="Nav_List_item"><Link to ="/updateproduct">Update Products</Link></li>
            <li className="Nav_List_item"><Link to ="/deleteproduct">Delete Products</Link></li>
            <li className="Nav_List_item"><Link to ="/logout">LogOut</Link></li>
            <li className="Nav_List_item"><Link to ="/profile">Profile</Link></li>
            <li className="Nav_List_item"><Link to ="/signup">Sign Up</Link></li>
        </ul>
       
    </div>
 )
    
}

export default Nav;