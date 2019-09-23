const jwt = require("jsonwebtoken");

// 秘钥
const secret = "wuhan1906daydayup";

// 生成token 

exports.createToken = function(data){
    return jwt.sign(data,secret);
}


// 解密 
const checkToken = function(token){
    return new Promise(function(resolve,reject){
        jwt.verify(token,secret,(err,data)=>{
            if(err){
                throw err;
                reject("token 解密失败");
            }else{
                resolve(data);
            }
        })
    })
}



exports.getMobile = function(req,res,callback){
    const {token} = req.headers;
    checkToken(token).then(mobile=>{
        callback(mobile);  // 异步回调 
    }).catch(err=>{
        res.json({
            code:500,
            err:err,
            type:0,
            msg:"解密失败,token 不存在或者无效 "
        })
    })
}

exports.tokenMiddleware = function(req,res,next){

}
