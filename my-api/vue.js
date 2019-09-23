

const express = require("express");
const router = express.Router();

const {Movie,User,commodity,shoe,accessorie,Usergood} = require("./utils/schema");

const Mock = require("mockjs");

const {keys,aesEncrypt,aesDecrypt} = require("./utils");

router.get("/index",(req,res)=>{
    res.send("这是一个 vue 项目的 路由接口")
});

router.post("/register",(req,res)=>{
    const body = req.body;
    console.log(req.body);
    User.findOne({
        $or:[
            {
                username:body.username,
            },
            {
                mobile:body.mobile
            }
        ]
    },{}).then(result=>{
        console.log(result)
        if(result){
            res.json({
                code:200,
                msg:"注册失败,用户名或者手机号已经存在",
                type:0
            })
        }else{
            User.insertMany(body).then(result=>{
                res.json({
                    code:200,
                    msg:"注册成功...",
                    type:1
                })
            })
        }
    })
})


router.post("/login",(req,res)=>{
    const body = req.body;
    console.log(body);
    User.findOne({
                username:body.username,
    },{}).then(result=>{
        if(result){
            if(result.password==body.password){
                // token    发送给前端  
                // session  后端                 
                const token = aesEncrypt(result.username,keys);
                req.session.token = token; 
                
                res.json({
                    code:200,
                    msg:"登录成功",
                    token,
                    type:1
                })
            }else{
                res.json({
                    code:200,
                    msg:"密码错误",
                    type:0
                })
            }
        }else{
            res.json({
                code:200,
                msg:"用户名或者手机号不存在",
                type:0
            })
        }
    })
    
})



router.get("/commodity",(req,res)=>{
    const {
        limit 
    } = req.query;
    commodity.find({},{}).limit(parseInt(limit)).sort({_id:-1}).then(result=>{
        res.json({
            code:200,
            msg:"获取商品数据成功",
            result
        })
    })  
})




router.get("/shoe",(req,res)=>{
    const {
        limit 
    } = req.query;
    shoe.find({},{}).limit(parseInt(limit)).sort({_id:-1}).then(result=>{
        res.json({
            code:200,
            msg:"获取商品数据成功",
            result
        })
    })  
})



router.get("/accessorie",(req,res)=>{
    const {
        limit 
    } = req.query;
    accessorie.find({},{}).limit(parseInt(limit)).sort({_id:-1}).then(result=>{
        res.json({
            code:200,
            msg:"获取商品数据成功",
            result
        })
    })  
})

router.get("/movie",(req,res)=>{
    // All.aggregate( [ { $sample: { size: N } } ] )
    function rnd(n, m){
        var random = Math.floor(Math.random()*(m-n+1)+n);
        return req.random = random
    }
    rnd(0,312)
    Movie.find({},{}).skip(req.random).limit(2).then(result=>{
        res.json({
            code:200,
            msg:"获取商品数据成功",
            result
        })
    })  
})

router.get("/getGoods",(req,res)=>{
    const {
        keyword 
    } = req.query;
    Movie.find({ProductTitle:{$regex:keyword, $options:''}}).limit(parseInt()).sort({_id:-1}).then(result=>{
        res.json({
            code:200,
            msg:"获取商品数据成功",
            result
        })
    })  
})



router.get("/DetailsGoods",(req,res)=>{
    const {
        ID 
    } = req.query;
    Movie.find({'CommodityID':ID}).limit(parseInt()).sort({_id:-1}).then(result=>{
        res.json({
            code:200,
            msg:"获取商品数据成功",
            result
        })
    })  
})

router.get("/movies",(req,res)=>{
    // All.aggregate( [ { $sample: { size: N } } ] )
    function rnd(n, m){
        var random = Math.floor(Math.random()*(m-n+1)+n);
        return req.random = random
    }
    rnd(0,312)
    Movie.find({},{}).skip(req.random).limit(10).then(result=>{
        res.json({
            code:200,
            msg:"获取商品数据成功",
            result
        })
    })  
})


router.get("/Usergoods",(req,res)=>{
    // console.log(req.query.Usergoods)
    var {
        CommodityID,
        username,
        count,
        ProductJpg,
        ProductTitle,
        CommodityPrice
    } = req.query
    // console.log({
    //     CommodityID,
    //     username,
    //     count
    // })
    Usergood.findOne({
        username,
        CommodityID
    }).then(result=>{
        if(result){
            // 数量累计 $inc   
            Usergood.update({
                username,
                CommodityID 
            },{
                $inc:{
                    count:count*1,
                }
            }).then(result=>{
                res.json({
                    code:200,
                    msg:'购物车数量更新完成',
                    result,
                })
            })
        }else{
            Usergood.insertMany({
                CommodityID,
                username,
                count,
                CommodityPrice,
                ProductTitle,
                ProductJpg
            }).then(result=>{
                res.json({
                    code:200,
                    msg:"加入购物车成功",
                    result
                })
            })  
        }
    })
})




    router.get("/cargoods",(req,res) => {
        var {
            username
        } = req.query
        Usergood.find({username}).then(result => {
            if(result){
                res.json({
                    code:200,
                    msg:'获取购物车信息成功',
                    result
                })
            }else{
                res.json({
                    code:200,
                    msg:'获取购物车信息成功',
                    result
                })
            }
        })
    })

    router.get("/Checkdelete",(req,res) => {
        var {
            data
        } = req.query
        console.log(req.query)
        Usergood.deleteOne({CommodityID:data}).then(result => {
            if(result){
                res.json({
                    code:200,
                    msg:'删除成功',
                    result
                })
            }else{
                res.json({
                    code:200,
                    msg:'删除失败',
                    result
                })
            }
        })
    })



    router.get("/Less",(req,res) => {
        var {
            data,
            data1
        } = req.query
        console.log(req.query)
        Usergood.updateOne(
            {
                CommodityID:data
            },
            {
                $set:{
                    count:data1
                }
            }
            ).then(result => {
            if(result){
                res.json({
                    code:200,
                    msg:'数据修改成功',
                    result
                })
            }else{
                res.json({
                    code:200,
                    msg:'数据修改失败',
                    result
                })
            }
        })
    })



    router.get("/plus",(req,res) => {
        var {
            data,
            data1
        } = req.query
        console.log(req.query)
        Usergood.updateOne(
            {
                CommodityID:data
            },
            {
                $set:{
                    count:data1
                }
            }
            ).then(result => {
            if(result){
                res.json({
                    code:200,
                    msg:'数据修改成功',
                    result
                })
            }else{
                res.json({
                    code:200,
                    msg:'数据修改失败',
                    result
                })
            }
        })
    })

module.exports = router;