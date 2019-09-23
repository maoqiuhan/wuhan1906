import React ,{Component} from "react";
import axios from 'axios'
import  "./index.css"
export class Salary extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
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
                console.log(345,phonenumber)
                axios.post("react/salary",{phonenumber}).then(res=>{
                    console.log(123,res.data.result)
                        var a = res.data.result
                        this.setState({
                            data:a
                        })
                    console.log(224,new Date().getDate()) 
                    console.log(225,this.state.data[0]) 
                })
                if(new Date().getDate()==19){
                    var today = new Date(),
                    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    console.log(date)
                    axios.post("react/Pay",{phonenumber,date}).then(res=>{
                        var a = res.data.result
                        this.setState({
                            data:a
                        })
                    })
                }

                
                    
            }
        )
    }
    render(){
        return(
            <div>
                <div >
                    <div style={{width:'100%', height:'30px',lineHeight:'30px',borderBottom:'1px solid #666'}}>千峰后台>员工后台>个人中心><span style={{color:'red'}}>员工薪资</span></div>
                    <div style={{widows:'90%',margin:'5%',backgroundColor:'#e8ebee'}}>
                        <ul style={{width:'100%',backgroundColor:'#e8ebee'}}>
                            <li style={{width:'100%',backgroundColor:'#e8ebee'}}>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',border:'1px solid #666'}}>姓名</span>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderTop:'1px solid #666',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>职位</span>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderTop:'1px solid #666',borderBottom:'1px solid #666'}}>日期</span>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',border:'1px solid #666'}}>薪资</span>
                            </li>
                            {/* <li style={{width:'100%',backgroundColor:'#e8ebee'}}>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderLeft:'1px solid #666',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>大左</span>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>金牌讲师</span>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666'}}>2019-09-19</span>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderLeft:'1px solid #666',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>10000000000</span>
                            </li> */}
                            {this.state.data.map((item,i) => {
                                return(
                                    <li style={{width:'100%',backgroundColor:'#e8ebee'}}
                                    key={i}>
                                        <span   style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderLeft:'1px solid #666',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>{item.Name}</span>
                                        <span   style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>{item.position}</span>
                                        <span   style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666'}}>{item.date}</span>
                                        <span  style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderLeft:'1px solid #666',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>{item.Salary}</span>
                                    </li>
                                    )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}