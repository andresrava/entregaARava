import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./navbar.css";

function CartWidget() {
return (
    <div className="carrito">
         <FaCartShopping size={100}/>
         <span className="badge">
            5
         </span>
    </div>
   
)
}

export default CartWidget