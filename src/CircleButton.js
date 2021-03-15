import React from "react"
function CircleButton(props){
    return(
        <button className="btn btn-default btn-circle">{props.size}</button>
    )
}

/* Import Component
    class CircleButton extends Component{
        constructor(props){
            super(props)
        }

        render(
             <button className="btn btn-default btn-circle">{this.props.size}</button>
        )
    }
*/  
export default CircleButton