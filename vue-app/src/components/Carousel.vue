<template>
    <div style="margin-bottom:1rem;">
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" >
            <h2 class="text">每日精选</h2>
        </van-divider>
        <van-swipe :autoplay="3000" indicator-color="white" 
        class="Swipe-box" >
            <van-swipe-item 
            v-for="(Vimg,i) in img" :key="i"
            class="Swipe-wh">
            <img :src="Vimg" alt="">
            </van-swipe-item>
        </van-swipe>
        <van-card
                currency=""
                v-for="(ts,i) in resultA" :key="i"
                num="99"
                :price="ts.CommodityPrice"
                :desc="ts.Specifications"  
                :title="ts.ProductTitle"
                :thumb="ts.ProductJpg"
                origin-price="10.00"
                @click="Details(ts.CommodityID)"
                />
    </div>
</template>
<script>
export default {
    data (){
        return {
            img:[
                require('../assets/imgs/21.jpg'),
                require('../assets/imgs/22.jpg'),
                require('../assets/imgs/23.jpg'),
                require('../assets/imgs/24.jpg'),
            ],
            resultA:[],
        }
    },
    methods: {
        Details(Goodid){
            this.$router.push({name:'Details',query:{Goodid}});
            console.log(Goodid)
        }
    },
     mounted() {
        this.$axios.get("vue/movies").then(res=>{
            this.resultA = res.data.result
            // console.log(res.data.result)
            this.resultA.forEach(function(result){
                // console.log(result)
                result.ProductJpg = result.ProductJpg.split("jpg")[0]
                result.ProductJpg = result.ProductJpg + "jpg"
                // console.log(result.ProductJpg)
                // console.log(result)
                // this.goodList.push(result)
            })
        })
     }
}
</script>
<style  scoped>
.text{
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
}
.Swipe-box{
        width: 90%;
        height: 3.5rem;
        margin: 5%;
        box-shadow: 10px 10px 10px rgba(0,0,0,.5);

                 /*考虑浏览器兼容性*/

        -moz-box-shadow: 10px 10px 10px rgba(0,0,0,.5);

        -webkit-box-shadow: 10px 10px 10px rgba(0,0,0,.5);
        
    }
    .Swipe-wh{
        width: 100%;
        height: 100%;
        margin-top: .1rem;
        
    }
    img{
        width: 100%;
        height: 100%;
        
    }
</style>