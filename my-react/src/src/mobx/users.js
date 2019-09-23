
import {observable,action,computed,autorun }  from "mobx"

class User{
    @observable userInfo = {}

    @action changeUserInfo=obj=>{
        this.userInfo = {...this.userInfo,...obj};
    }
}

export default new User()