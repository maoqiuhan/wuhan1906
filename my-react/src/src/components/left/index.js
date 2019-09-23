import React ,{Component} from "react";
import { Menu, Icon } from 'antd';
import '../../utils/antd.css';
import {Personal} from "../personal"
import {Salary} from "../salary"
import {Management} from "../management"
import {Attendance} from "../attendance"
import {Suggestions} from "../suggestions"
import {Resignation} from "../resignation"
import {Leave} from "../leave"
import {Switch,Route,Redirect,Link} from "react-router-dom"

var url = window.location.href
var str = url.substr(1); //得到?后面的字符串
var phonenumber = str.split("=")[1]
console.log(222,phonenumber)


const { SubMenu } = Menu;

export class Left extends Component {
    constructor(){
        super()
        this.state = {
            path:"Personal",
            phonenumber:''
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
                  this.setState({
                      phonenumber,
                  })
                  console.log(this.state.phonenumber)
          }
      ) 
  }
  handleClick = e => {
    console.log('click ', e);
  };
  aaa = (e) =>{
    this.props.history.push('/salary')
  }
  render() {
    return (
      <div>
          <div style={{float:'left',width:'16%'}}>
           <Menu 
        onClick={this.handleClick}
        style={{ width: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>员工后台</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="个人中心">
            <Menu.Item key="1">
              <Link to={"/min/personal?phonenumber=" + this.state.phonenumber}>
                员工信息
              </Link>
            </Menu.Item>
            
              <Menu.Item key="2">
                <Link to={"/min/salary?phonenumber=" + this.state.phonenumber}>
                  员工薪资
                </Link>
              </Menu.Item>
            
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="员工管理">
            <Menu.Item key="3">
              <Link to={"/min/management?phonenumber=" + this.state.phonenumber}>
                员工管理
              </Link>
              </Menu.Item>
            <Menu.Item key="4">
              <Link to={"/min/attendance?phonenumber=" + this.state.phonenumber}>
                考勤管理
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="coffee" />
              <span>个人申请</span>
            </span>
          }
        >
            <Menu.Item key="5">
              <Link to={"/min/suggestions?phonenumber=" + this.state.phonenumber}>
                投诉建议
              </Link>
            </Menu.Item>
          <Menu.Item key="6">
            <Link to={"/min/leave?phonenumber=" + this.state.phonenumber}>
              请假申请
            </Link>
          </Menu.Item>
           <Menu.Item key="7">
             <Link to={"/min/resignation?phonenumber=" + this.state.phonenumber}>
              辞职申请
             </Link>
          </Menu.Item>
          {/* <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu> */} 
        </SubMenu>
        {/* <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu> */}
      </Menu>
      </div>
      <div style={{float:'left',width:'84%'}}>
        <Switch>
            <Route path="/min" exact render={()=>( <Redirect to="/min/personal" /> )} />
            <Route  path="/min/personal" component={Personal}/>
            <Route  path="/min/salary" component={Salary}/>
            <Route  path="/min/management" component={Management}/>
            <Route  path="/min/attendance" component={Attendance}/>
            <Route  path="/min/suggestions" component={Suggestions}/>
            <Route  path="/min/resignation" component={Resignation}/>
            <Route  path="/min/leave" component={Leave}/>
        </Switch>
        
      </div>
      </div>
    );
  }
}

