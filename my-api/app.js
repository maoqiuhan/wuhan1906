

const express = require("express");
const port = 1906;
const hostname = "0.0.0.0";
const http = require("http");
const app  = express();
const server = http.createServer(app);

const connection = require("./utils/db");


const cors = require("cors"); 
app.use(cors());   // cors 解决跨域问题  jsonp 代理  

app.use(express.json());     // from-data 
app.use(express.urlencoded({ extended: false }));   // x-www-form-urlencoded  获取 POST 请求 获取 参数数据


app.get("/demo",(req,res)=>{
    res.send("这是一个 后台的接口 服务器地址 "+ req.query);
});

app.get("/index",(req,res)=>{
    res.json({
        code:200,
        msg:"查看 服务器信息",
        query:req.query,
        headers:req.headers,
    })
});

const session = require("express-session");
app.use(session({
    secret:"test",
    name:"appTest",
    cookie:{maxAge:60*60*1000},  // session 记录数据的时长 
    resave:false,
    saveUninitialized:true
  }))

// const {checkToken} = require("./utils");
// app.use(checkToken)

// const vue = require("./vue");
// app.use("/vue",vue);
const react = require("./react");
app.use("/react",react);

server.listen(port,hostname,()=>{
    console.log(`my api server is running  at http://${hostname}:${port}`)
})