import React ,{Component} from "react";
import '../../utils/antd.css';
import "./index.css"
import {axios} from "../../utils/axios"
import { Button } from 'antd';
import { Input} from 'antd';


// import ReactDOM from 'react-dom';
// import { Button } from 'element-react';
// import 'element-theme-default';

export class Login extends Component{
    constructor(){
        super()
        this.state = {
            userName:'',
            verificationCode:'',
            status:'',
            text:'获取验证码',
            countdown:60
        } 
    }
    getVerificationCode = (e) => {
        // console.log(123)
        // this.setState({
        //     status:'disabled'
        // })
        
        var Timer = () => {
            // console.log(this.state.countdown)

            if (this.state.countdown == 0) { 
                this.setState({
                    status:'',
                    text:'获取验证码',
                    countdown:60
                })
                
            } else { 
                // console.log(this.state.countdown)
                this.setState({
                    status:'disabled',
                    text:'重新发送(' + this.state.countdown + ')',
                    countdown:--this.state.countdown
                })
                // this.state.countdown--;
                setTimeout(()=> { 
                    Timer()
                },1000)  
            } 
        }
        Timer()

        axios.post("/react/sendCode",{
            mobile:this.state.userName,
        }).then(res=>{
            console.log(res)
        })
        
          
    }
    userNameChange = (e) => {
        const { value } = e.target;
        // console.log(value)
        const reg = /^1([0-9]*)?$/;		// 以数字1开头，任意数字结尾，且中间出现零个或多个数字
        if ((reg.test(value) && value.length < 12) || value === '') {
          this.setState({
          userName: value
          })
        }
        // console.log(this.state.userName)
      }
      vCodeChange = (e) => {
        const { value } = e.target;
        const reg = /^\d*?$/;	// 以任意数字开头和结尾，且中间出现零个或多个数字
        if ((reg.test(value) && value.length < 5) || value === '') {
          this.setState({
            verificationCode: value
          })
        }
      }
      gotoLogin=()=>{
        axios.post("/react/checkCode",{
            mobile:this.state.userName,
            code:this.state.verificationCode
        }).then(res=>{
            console.log(res)

            if(!!res.data.type){
                // history.push("/index/mine");
                sessionStorage.token = res.data.token;
                this.props.history.push('/min/personal?phonenumber='+this.state.userName)
                console.log("登录成功")
            }else{
                sessionStorage.token = "";
                alert(res.data.msg)
            }
        })
    }
    render(){
        return(
            <div className="Login">
                {/* <div className="head">
                    <span>登录/</span>
                    <span>注册</span>
                </div> */}
                <div className="box" id="box">
                    <p style={{fontSize:26,lineHeight:2.4,}} className="boxp">千锋教育后台</p>
                    {/* <input type='text' style={{marginTop:20,width:'80%',height:24}}  placeholder="请输入手机号" onChange={this.userNameChange} value = {this.state.userName}></input> */}
                    <Input placeholder="请输入手机号" style={{width:'80%'}}
                    value = {this.state.userName} onChange={this.userNameChange}/>
                    {/* <input type='text' style={{marginTop:20,width:'50%',height:24,float:'left',marginLeft:32}}  placeholder="请输入验证码" onChange={this.vCodeChange} value = {this.state.verificationCode}></input> */}
                    <Input placeholder="请输入验证码" style={{width:'50%'}}
                    value = {this.state.verificationCode} onChange={this.vCodeChange}/>
                    <Button style={{marginTop:24,marginLeft:0}} onClick={this.getVerificationCode} disabled={this.state.status}>{this.state.text}</Button>
                    <Button type="primary" style={{width:'80%',height:30,color:'#fff',margin:'30px auto 0',fontSize:18,lineHeight:'30px'}} onClick={this.gotoLogin}>点击登录</Button>
                    {/* <Button></Button> */}
                    
                        {/* <div style={{backgroundColor:'#428bca',width:'100%',height:30,color:'#fff',margin:'30px auto 0',fontSize:18,lineHeight:'30px'}} onClick={()=>this.props.history.push('/registered')} >注册入口</div> */}
                    {/* <li>
                        <link to="../registered/">
                            aaa
                        </link>  
                    </li> */}
                    
                </div>
            </div>
        )
    }
}
