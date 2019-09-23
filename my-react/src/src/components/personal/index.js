import React ,{Component} from "react";
import {Avatar} from "./sc"
import axios from "axios"
import './index.css'
import { promises } from "dns";
// console.log(123,GetRequest())
// const phonenumber = GetRequest()
// function GetRequest() { 
//         var url = window.location.href
//         var str = url.substr(1); //得到?后面的字符串
//         　　str = str.split("=")[1]
//       return str; 
//     }
export class Personal extends Component {
    constructor(porps){
        super(porps)
        this.state = {
          Introduction:"",
          Jobnumber:"",
          Name:"",
          Salary:"",
          position:"",
          url:"",
          phonenumber:""
        } 
        
    }
    componentDidMount(){
        new Promise(
            (resolve, reject)=> { 
                var url = window.location.href
                var str = url.substr(1); //得到?后面的字符串
                var phonenumber = str.split("=")[1]
                resolve (phonenumber) ; 
            }
        ).then(phonenumber =>{
                console.log(222,phonenumber)
                axios.post("react/information",{phonenumber}).then(res=>{
                    console.log(res.data)
                    var data = res.data.result
                        this.setState({
                        Introduction:data[0].Introduction,
                        Jobnumber:data[0].Jobnumber,
                        Name:data[0].Name,
                        phonenumber,
                        Salary:data[0].Salary,
                        position:data[0].position,
                        url:data[0].url,
                    })
                    console.log(234,this.state.Name)
                })
            }
        ) 
    }
    

    render(){
        return(
            <div>
                <div >
                    <div style={{width:'100%', height:'30px',lineHeight:'30px',borderBottom:'1px solid #666'}}>千峰后台>员工后台>个人中心><span style={{color:'red'}}>员工信息</span></div>
                    <div style={{widows:'90%',margin:'5%',backgroundColor:'#e8ebee'}}>
                        <Avatar url={this.state.url} style={{float:'left'}}></Avatar>
                        <div style={{float:'right',width:'70%',margin:'.2rem 0'}}>
                            <span style={{width:'100%',float:'left',height:'.2rem',lineHeight:'.2rem'}}>
                                姓名:<span > {this.state.Name}</span>
                            </span>
                            <span style={{width:'100%',float:'left',height:'.2rem',lineHeight:'.2rem'}}>
                                薪资:<span> {this.state.Salary}</span>
                            </span>
                            <span style={{width:'100%',float:'left',height:'.2rem',lineHeight:'.2rem'}}>
                                职位:<span> {this.state.position}</span>
                            </span>
                            <span style={{width:'100%',float:'left',height:'.2rem',lineHeight:'.2rem'}}>
                                介绍:<span> {this.state.Jobnumber}</span>
                            </span>
                            <span style={{width:'100%',float:'left',height:'.2rem',lineHeight:'.2rem'}}>
                                寄语:<span> {this.state.Introduction}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}