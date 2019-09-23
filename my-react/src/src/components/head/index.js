import React ,{Component} from "react";


export class Head extends Component{
    constructor(){
        super()
        this.state = {
            imgs:require("../../assets/1.png")
        }
    }
    render(){
        return(
            <div>
                <div style={{width:"100%",height:"50px",backgroundColor:"#428bca"}}>
                    <img src={this.state.imgs} style={{width:"190px",height:"50px"}}></img>
                    </div>
            </div>
        )
    }
}