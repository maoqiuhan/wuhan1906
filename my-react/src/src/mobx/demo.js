

import {observable,action,computed,autorun }  from "mobx"


class Demo{
    @observable num = 2019;  // 可被观察数据
    @observable msg = "Are you OK";
}


export default new Demo();


