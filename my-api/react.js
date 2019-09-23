const express = require("express");
const router = express.Router();

const { Code,Staff,Salary } = require("./utils/schema");

const {getResult} = require("./config");

const {createToken} = require("./utils/token");

router.get("/index",(req,res)=>{
    res.send("这是 react 项目的 接口 地址")
})


function getCode(){
    return 1000+Math.floor(Math.random()*(10000-1000));
}
// 获取发送验证码
router.post("/sendCode",(req,res)=>{
    const {
        mobile
    } = req.body;
    if(mobile==""){
        res.json({
            code:200,
            msg:"请输入手机号"
        })
    }

    const code = getCode();
    console.log(code,mobile)
    getResult(code,mobile).then(
        response=>{
            console.log(response.data.code)
            if(response.data.code=="000000"){
                Code.insertMany({
                    mobile,
                    code,
                    time:Date.now()
                }).then(result=>{
                    res.json({
                        code:200,
                        msg:"验证码发送成功",
                        param:code,
                        type:1,
                        mobile
                    })
                })
           
            }else{
                res.json({
                    code:200,
                    msg:"验证码请求失败",
                    param:code,
                    type:0
                })
            }
        }
    )
    .catch(err=>{
        res.json({
            code:200,
            msg:"服务器错误",
            type:0
        })
    })
})

// 校验验证码 
router.post("/checkCode",(req,res)=>{
    const {
        mobile,
        code
    } = req.body;

    Code.findOne({
        mobile,
        code
    }).then(result=>{
        if(result){
            const time = Date.now();
            if(time - result.time < 60 * 1000 * 60 * 24){
                const token = createToken(mobile);
                res.json({
                    code:200,
                    msg:"验证码-验证通过",
                    type:1,
                    token
                })
            }else{
                res.json({
                    code:200,
                    msg:"验证码过期-失效",
                    type:0
                })
            }
        }else{
            res.json({
                code:200,
                msg:"验证码无效",
                type:0
            })
        }
    })
})


router.post("/information",(req,res)=>{
    const {
        phonenumber
    } = req.body;
    console.log(req.body)
    Staff.find({
        phonenumber
    }).then(result=>{
        if(result){
            res.json({
                code:200,
                msg:"数据接收成功",
                result,
                type:1,
            })
        }else{
            res.json({
                code:200,
                msg:"数据接收失败",
                type:0
            })
        }     
    })
})


router.post("/salary",(req,res)=>{
    const {
        phonenumber
    } = req.body;
    console.log(req.body)
    Salary.find({
        phonenumber
    }).then(result=>{
        if(result){
            res.json({
                code:200,
                msg:"数据接收成功",
                result,
                type:1,
            })
        }else{
            res.json({
                code:200,
                msg:"数据接收失败",
                type:0
            })
        }     
    })
})

router.post("/informations",(req,res)=>{
    Staff.find({
    }).then(result=>{
        if(result){
            res.json({
                code:200,
                msg:"数据接收成功",
                result,
                type:1,
            })
        }else{
            res.json({
                code:200,
                msg:"数据接收失败",
                type:0
            })
        }     
    })
})


router.post("/modifydata",(req,res)=>{
    const {
        _id,
        Introduction,
        Jobnumber,
        Name,
        Salary,
        phonenumber,
        position,
        url
    } = req.body.data;
    console.log(_id)
    Staff.find({_id
    }).then(result=>{
        if(result){
            Staff.update({
                _id
            },{
                $set:{
                    Introduction:Introduction,
                    Jobnumber:Jobnumber,
                    Name:Name,
                    Salary:Salary,
                    phonenumber:phonenumber,
                    position:position,
                    url:url
                }
            }).then(result=>{
                Staff.find({
                }).then(result=>{
                    if(result){
                        res.json({
                            code:200,
                            msg:"数据更新成功",
                            result,
                            type:1,
                        })
                    }else{
                        res.json({
                            code:200,
                            msg:"数据更新失败",
                            type:0
                        })
                    }     
                })
            })
        }else{
            res.json({
                code:200,
                msg:"数据更新失败",
                type:0
            })
        }     
    })
})


router.post("/Newlyaddeddata",(req,res)=>{
    const {
        data
    } = req.body;
    console.log(data)
    Staff.create([data
    ]).then(result=>{
                Staff.find({
                }).then(result=>{
                    if(result){
                        res.json({
                            code:200,
                            msg:"数据更新成功",
                            result,
                            type:1,
                        })
                    }else{
                        res.json({
                            code:200,
                            msg:"数据更新失败",
                            type:0
                        })
                    }     
                })
            })
    })



    router.post("/delete",(req,res)=>{
        const 
            _id
         = req.body.e;
        console.log(234,_id)
        Staff.deleteMany({_id}).then(result=>{
                    Staff.find({
                    }).then(result=>{
                        if(result){
                            res.json({
                                code:200,
                                msg:"删除成功",
                                result,
                                type:1,
                            })
                        }else{
                            res.json({
                                code:200,
                                msg:"删除失败",
                                type:0
                            })
                        }     
                    })
                })
        })


        router.post("/show",(req,res)=>{
            const {
                Name
            }= req.body;
             console.log(123,Name)
                    Staff.find({"Name":{$regex:Name, $options:''}}).then(result=>{
                            if(result){
                                res.json({
                                    code:200,
                                    msg:"查询成功",
                                    result,
                                    type:1,
                                })
                            }else{
                                res.json({
                                    code:200,
                                    msg:"查询失败",
                                    type:0
                                })
                            }     
                        })
            })

            router.post("/Pay",(req,res)=>{
                const {
                    phonenumber,
                    date
                } = req.body;
                console.log(123,req.body)
                Staff.find({
                    phonenumber
                }).then(result=>{
                    Salary.create({
                        Name:result[0].Name,
                        position:result[0].position,
                        phonenumber:result[0].phonenumber,
                        Salary:result[0].Salary,
                        date
                    }).then(result=>{
                        Salary.find({
                            phonenumber
                        }).then(result=>{
                            if(result){
                                res.json({
                                    code:200,
                                    msg:"数据接收成功",
                                    result,
                                    type:1,
                                })
                            }else{
                                res.json({
                                    code:200,
                                    msg:"数据接收失败",
                                    type:0
                                })
                            }     
                        })
                    })
                })
            })
module.exports = router;