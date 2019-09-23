import React ,{Component} from "react";
import {Head} from "../../components/head"
import {Left} from "../../components/left"
import {Mask} from "../../components/mask"

// import {Personal} from "../../components/personal"
// import { Route,Switch ,Redirect } from "react-router-dom" 


export class Min extends Component{
    render(){
        return(
            <div>
                <Head></Head>
                <Left></Left>
                {/* <Mask></Mask> */}
                {/* <div>
                <Switch>
                    <Route path="/" exact render={()=>( <Redirect to="/personal" /> )} />
                    <Route path="/personal" component={Personal}/>
                </Switch>
                </div> */}
            </div>
        )
    }
}