import React ,{Component} from "react";
import {Login} from "./login/"
import {Min} from "./min/"

import { Route,Switch ,Redirect } from "react-router-dom" 

export class Vpp extends Component{
    constructor(){
        super()
        this.state = {
        } 
    }
    render(){
        return(
            <div>
                {/* <Login></Login> */}
                <Switch>
                    <Route path="/" exact render={()=>( <Redirect to="/login" /> )} />
                    <Route path="/login" component={Login}/>
                    {/* <Route path="/registered" component={Registered}/> */}
                    <Route path="/min" component={Min}/>
                </Switch>
                
            </div>
        )
    }
}

