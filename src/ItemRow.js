import React from "react"
import CartItem from "./CartItem"

function ItemRow(){
    return(
        <div className="row">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>

    )
}
export default ItemRow