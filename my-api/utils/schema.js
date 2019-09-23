

const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const movie_schema = new Schema({
    comment : String,
    FavorAblerate : String,
    ProductTitle : String,
    CommodityID : String,
    CommodityPrice : String,
    ProductColour : String,
    ProductSize : String,
    Specifications : String,
    ProductJpg : String,
    type:String
});

exports.Movie = mongoose.model("movie",movie_schema);


const users_schema = new Schema({
    username:String,
    nickname:String,
    mobile:String,
    password:String,
    dbpwd:String,
    avatar:String
});

exports.User = mongoose.model("users",users_schema);

const commoditys_schema = new Schema({
    comment : String,
    FavorAblerate : String,
    ProductTitle : String,
    CommodityID : String,
    CommodityPrice : String,
    ProductColour : String,
    ProductSize : String,
    Specifications : String,
    ProductJpg : String
});

exports.commodity = mongoose.model("commoditys",commoditys_schema);

const shoes_schema = new Schema({
    comment : String,
    FavorAblerate : String,
    ProductTitle : String,
    CommodityID : String,
    CommodityPrice : String,
    ProductColour : String,
    ProductSize : String,
    Specifications : String,
    ProductJpg : String
});

exports.shoe = mongoose.model("shoes",shoes_schema);

const accessories_schema = new Schema({
    comment : String,
    FavorAblerate : String,
    ProductTitle : String,
    CommodityID : String,
    CommodityPrice : String,
    ProductColour : String,
    ProductSize : String,
    Specifications : String,
    ProductJpg : String
});

exports.accessorie = mongoose.model("accessories",accessories_schema);

const Usergoods_schema = new Schema({
    count : Number,
    username : String,
    CommodityID : String,
    ProductTitle:String,
    CommodityPrice:String,
    ProductJpg:String
});

exports.Usergood = mongoose.model("Usergoods",Usergoods_schema);

const code_schema = new Schema({
    mobile:Number,
    code:Number,
    time:Date
})

exports.Code = mongoose.model("code",code_schema);


const staff_schema = new Schema({
    phonenumber:String,
    Name:String,
    position:String,
    Jobnumber:String,
    Introduction:String,
    Salary:String,
    url:String
})

exports.Staff = mongoose.model("staff",staff_schema)

const salarys_schema = new Schema({
    phonenumber:String,
    Name:String,
    position:String,
    date:String,
    Salary:String,
})

exports.Salary = mongoose.model("salarys",salarys_schema)