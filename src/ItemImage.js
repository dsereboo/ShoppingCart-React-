import React from "react"
import image from "./1.jpg"

function ItemImage(){
    return(
        <img src={image} alt="Item look" className="center-block"/>
    )
}

/* Import Component
    class ItemImage extends Component{
        render(
           <img src={image} alt="Item look" className="center-block"/> 
        )
    }
*/

export default ItemImage