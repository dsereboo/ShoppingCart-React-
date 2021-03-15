import React from "react"
import Price from "./Price"
import AddCartBtn from "./AddCartBtn"
import ItemImage from "./ItemImage"
import ItemName from "./ItemName"

function CartItem(){
    return(
           <div className="col-md-2" >
					<ItemImage/>
					<ItemName/>
					<hr></hr>
					<Price/>
					<AddCartBtn/>
			</div> 
    )
}

/* Import Component
    class CartItem extends Component{
        render(
             <div className="col-md-2" >
					<ItemImage/>
					<ItemName/>
					<hr></hr>
					<Price/>
					<AddCartBtn/>
			</div>   
        )
    }
}
*/

export default CartItem