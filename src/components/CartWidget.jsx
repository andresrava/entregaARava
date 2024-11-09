import React from "react";
import Badge from 'react-bootstrap/Badge';
import {FaCartShopping} from "react-icons/fa6";
import "./navbar.css";

function CartWidget() {
return (
    <span className="carrito">
         <FaCartShopping size={50}/>
         <Badge bg="primary">5</Badge>
         {/* <span className="badge">
            5
         </span> */}
    </span>
   
)
}

export default CartWidget