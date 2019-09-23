import React ,{Component} from "react";
import axios from 'axios'
import { Button } from 'antd';
import "./index.css"
import { Input } from 'antd';

export class Management extends Component {
constructor(){
        super()
        this.state = {
            data:[],
            show:false,
            showx:false,
            modifydata:"" ,
            Newlyadded:{
                Name:"",
                position:"",
                Jobnumber:"",
                Introduction:"",
                Salary:"",
                phonenumber:"",
                url:"" 
            },
            query:""


        } 
    }
    componentDidMount(){
       
                axios.post("react/informations").then(res=>{
                    console.log(123,res.data.result)
                        var a = res.data.result
                        this.setState({
                            data:a
                    })
                    console.log(224,this.state.data) 
                    console.log(225,this.state.data[0]) 
                })
    }
    modify=(e)=>{
        console.log(999,e)
        this.setState({
            show:true,
            modifydata:e
        })
        console.log(888,)          
    }
    cancel=()=>{
        this.setState({
            show:false
        })  
    }
    cancelx=()=>{
        this.setState({
            showx:false,
            Newlyadded:{
                Name:"",
                position:"",
                Jobnumber:"",
                Introduction:"",
                Salary:"",
                phonenumber:"", 
            }
        })  
    }
    modifydata=()=>{
        var data = this.state.modifydata
        axios.post("react/modifydata",{data}).then(res=>{
            var a = res.data.result
            this.setState({
                show:false,
                data:a
            })
            // this.props.history.push('/') 
        })
    }


    Name=(event)=> {
        let data = Object.assign({}, this.state.modifydata, {
            Name: event.target.value
        })
        this.setState({
            modifydata:data,
        })        
    }
    position=(event)=> {
        let data = Object.assign({}, this.state.modifydata, {
            position: event.target.value
        })
        this.setState({
            modifydata:data
            })        
    }
    Jobnumber=(event)=> {
        let data = Object.assign({}, this.state.modifydata, {
            Jobnumber: event.target.value
        })
        this.setState({
            modifydata:data
            })        
    }
    Introduction=(event)=> {
        let data = Object.assign({}, this.state.modifydata, {
            Introduction: event.target.value
        })
        this.setState({
            modifydata:data
            })        
    }
    Salary=(event)=> {
        let data = Object.assign({}, this.state.modifydata, {
            Salary: event.target.value
        })
        this.setState({
            modifydata:data
            })        
    }
    phonenumber=(event)=> {
        let data = Object.assign({}, this.state.modifydata, {
            phonenumber: event.target.value
        })
        this.setState({
            modifydata:data
            })        
    }
    url=(event)=> {
        let data = Object.assign({}, this.state.modifydata, {
            url: event.target.value
        })
        this.setState({
            modifydata:data
            })        
    }


    Namex=(event)=> {
        let data = Object.assign({}, this.state.Newlyadded, {
            Name: event.target.value
        })
        this.setState({
            Newlyadded:data,
        })        
    }
    positionx=(event)=> {
        let data = Object.assign({}, this.state.Newlyadded, {
            position: event.target.value
        })
        this.setState({
            Newlyadded:data
            })        
    }
    Jobnumberx=(event)=> {
        let data = Object.assign({}, this.state.Newlyadded, {
            Jobnumber: event.target.value
        })
        this.setState({
            Newlyadded:data
            })        
    }
    Introductionx=(event)=> {
        let data = Object.assign({}, this.state.Newlyadded, {
            Introduction: event.target.value
        })
        this.setState({
            Newlyadded:data
            })        
    }
    Salaryx=(event)=> {
        let data = Object.assign({}, this.state.Newlyadded, {
            Salary: event.target.value
        })
        this.setState({
            Newlyadded:data
            })        
    }
    phonenumberx=(event)=> {
        let data = Object.assign({}, this.state.Newlyadded, {
            phonenumber: event.target.value
        })
        this.setState({
            Newlyadded:data
            })        
    }
    urlx=(event)=> {
        let data = Object.assign({}, this.state.modifydata, {
            url: event.target.value
        })
        this.setState({
            modifydata:data
            })        
    }
    Newlyadded=()=>{
        this.setState({
            showx:true
            })
    }
    Newlyaddeddata=()=>{
        var data = this.state.Newlyadded
        if(data.Name&&data.position&&data.Salary&&data.phonenumber){
            axios.post("react/Newlyaddeddata",{data}).then(res=>{
                var a = res.data.result
                this.setState({
                    showx:false,
                    data:a,
                    Newlyadded:{
                        Name:"",
                        position:"",
                        Jobnumber:"",
                        Introduction:"",
                        Salary:"",
                        phonenumber:"",
                        url:"" 
                    }
                })
                // this.props.history.push('/') 
            })
        }else{
            alert("必填项不能为空")
        }

    }

    delete=(e)=>{
        console.log(223,e)
        axios.post("react/delete",{e}).then(res=>{
            var a = res.data.result
            this.setState({
                data:a
            })
            console.log(456,this.state.modifydata)
        })
    }


    query=()=>{
        console.log(333,this.state.query)
        var Name = this.state.query
        axios.post("react/show",{Name}).then(res=>{
            var a = res.data.result
            this.setState({
                data:a
            })
        })
    }
    queryx=(e)=>{
        console.log(e.target.value)
        this.setState({
            query:e.target.value
            })
    }
    render(){
        return(
            <div>
                <div >
                    <div style={{width:'100%', height:'30px',lineHeight:'30px',borderBottom:'1px solid #666'}}>千峰后台>员工后台>员工管理><span style={{color:'red'}}>员工管理</span></div>
                    
                    <div style={{widows:'90%',margin:'5%',}}>
                    <div style={{height:".2rem"}}><Button style={{height:12}}   style={{margin:"5px"}} onClick={this.Newlyadded}>新增员工</Button>
                    <Input placeholder="请输入员工姓名"  value={this.state.query}  onChange={this.queryx} style={{width:"20%"}}></Input >
                    <Button style={{height:12}}   style={{margin:"5px"}} onClick={this.query}>搜索</Button></div>
                        <ul style={{width:'100%',height:"24px",}}>
                            <li style={{width:'100%',backgroundColor:'#e8ebee'}}>
                                <span style={{width:'14%',height:"24px",float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',border:'1px solid #666'}}>姓名</span>
                                <span style={{width:'14%',height:"24px",float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',height:"24px",borderTop:'1px solid #666',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>职位</span>
                                <span style={{width:'14%',float:'left',backgroundColor:'#e8ebee',height:"24px",paddingLeft:'.1rem',borderTop:'1px solid #666',borderBottom:'1px solid #666'}}>介绍</span>
                                <span style={{width:'14%',float:'left',backgroundColor:'#e8ebee',height:"24px",paddingLeft:'.1rem',borderTop:'1px solid #666',borderBottom:'1px solid #666',borderLeft:'1px solid #666'}}>寄语</span>
                                <span style={{width:'14%',float:'left',backgroundColor:'#e8ebee',height:"24px",paddingLeft:'.1rem',borderTop:'1px solid #666',borderBottom:'1px solid #666',borderLeft:'1px solid #666'}}>薪资</span>
                                <span style={{width:'14%',float:'left',backgroundColor:'#e8ebee',height:"24px",paddingLeft:'.1rem',borderTop:'1px solid #666',borderBottom:'1px solid #666',borderLeft:'1px solid #666'}}>电话号码</span>
                                <span style={{width:'14%',float:'left',backgroundColor:'#e8ebee',height:"24px",paddingLeft:'.1rem',border:'1px solid #666'}}>操作</span>
                            </li>
                            {/* <li style={{width:'100%',backgroundColor:'#e8ebee'}}>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderLeft:'1px solid #666',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>大左</span>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>金牌讲师</span>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666'}}>2019-09-19</span>
                                <span style={{width:'25%',float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderLeft:'1px solid #666',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>10000000000</span>
                            </li> */}
                            {this.state.data.map((item,i) => {
                                return(
                                    
                                    <li key={i} style={{width:'100%',backgroundColor:'#e8ebee'}}>
                                        <span style={{width:'14%',height:"24px",float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666',borderRight:'1px solid #666',
                                        borderLeft:'1px solid #666'}}>{item.Name}</span>
                                        <span style={{width:'14%',height:"24px",float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666',borderRight:'1px solid #666'}}>{item.position}</span>
                                        <span style={{width:'14%',height:"24px",float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666'}}>{item.Jobnumber}</span>
                                        <span style={{width:'14%',height:"24px",float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666',borderLeft:'1px solid #666'}}>{item.Introduction}</span>
                                        <span style={{width:'14%',height:"24px",float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666',
                                        borderLeft:'1px solid #666'}}>{item.Salary}</span>
                                        <span style={{width:'14%',height:"24px",float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666',
                                        borderLeft:'1px solid #666'}}>{item.phonenumber}</span>
                                        <span style={{width:'14%',height:"24px",float:'left',backgroundColor:'#e8ebee',paddingLeft:'.1rem',borderBottom:'1px solid #666',borderRight:'1px solid #666',
                                        borderLeft:'1px solid #666'}}>
                                            <Button style={{height:12}} type="link" ghost onClick={this.modify.bind(this,item)}>修改</Button>/
                                            <Button type="link" ghost
                                            onClick={this.delete.bind(this,item)}>删除</Button>
                                        </span>
                                    </li>
                                    )
                            })}
                        </ul>
                    </div>
                </div>
                {this.state.show ? (
                    <div className="mask" >
                    <div className="boxS">
                        <h3 style={{marginTop:"20px"}}>修改</h3>
                        <p>姓名:<input  value={this.state.modifydata.Name}  onChange={this.Name}></input></p>
                        <p>职位:<input value={this.state.modifydata.position}  onChange={this.position}
                        ></input></p>
                        <p>介绍:<input value={this.state.modifydata.Jobnumber}  onChange={this.Jobnumber}></input></p>
                        <p>寄语:<input value={this.state.modifydata.Introduction}  onChange={this.Introduction}></input></p>
                        <p>薪资:<input value={this.state.modifydata.Salary}  onChange={this.Salary}></input></p>
                        <p>电话:<input value={this.state.modifydata.phonenumber}  onChange={this.phonenumber}></input></p>
                        <p>图片:<input value={this.state.modifydata.url}  onChange={this.url}></input></p>
                        <Button style={{margin:"10px"}} onClick={this.modifydata} >确定</Button>
                        <Button style={{margin:"10px"}} onClick={this.cancel}>取消</Button>
                    </div>
                    </div>
                ):null}
                
                {this.state.showx ? (
                    <div className="mask" >
                    <div className="boxS">
                        <h3 style={{marginTop:"20px"}}>新增</h3>
                        <p>姓名:<input  value={this.state.Newlyadded.Name}  onChange={this.Namex}></input><span>*必填</span></p>
                        <p>职位:<input value={this.state.Newlyadded.position}  onChange={this.positionx}
                        ></input><span>*必填</span></p>
                        <p>介绍:<input value={this.state.Newlyadded.Jobnumber}  onChange={this.Jobnumberx}></input><span>*选填</span></p>
                        <p>寄语:<input value={this.state.Newlyadded.Introduction}  onChange={this.Introductionx}></input><span>*选填</span></p>
                        <p>薪资:<input value={this.state.Newlyadded.Salary}  onChange={this.Salaryx}></input><span>*必填</span></p>
                        <p>电话:<input value={this.state.Newlyadded.phonenumber}  onChange={this.phonenumberx}></input><span>*必填</span></p>
                        <p>图片:<input value={this.state.Newlyadded.url}  onChange={this.urlx}></input><span>*选填</span></p>

                        <Button style={{margin:"10px"}} onClick={this.Newlyaddeddata} >确定</Button>
                        <Button style={{margin:"10px"}} onClick={this.cancelx}>取消</Button>
                    </div>
                    </div>
                ):null}
            </div>
        )
    }
}