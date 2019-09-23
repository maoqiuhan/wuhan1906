<template>
    <div>
        <van-search
            @click="Jump"
            style="margin-bottom:.15rem;"
            v-model="keyword"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"
            :sticky="true"
            >
            <div slot="action"  @click="Jump">搜索</div>
        </van-search>

        <van-tabs  @click="onClick" :animated="true" 
        :sticky="true"	
        lazy-render
        :duration="0.6"
        title-active-color="red"
                >


        
        <van-tab title="衣服"  name="commodity" style="margin:.15rem 0 ;">
            <van-card
                v-for="(ts,i) in commodity" :key="i"
                num="99"
                currency=""
                :price="ts.CommodityPrice"
                :desc="ts.Specifications"  
                :title="ts.ProductTitle"
                :thumb="ts.ProductJpg"
                origin-price="10.00"
                @click="Details(ts.CommodityID)"
                />
        </van-tab>


        
        <van-tab title="饰品" name="accessorie" style="margin:.15rem 0 ;">
            <van-card
                currency=""
                v-for="(ts,i) in commodity" :key="i"
                num="99"
                :price="ts.CommodityPrice"
                :desc="ts.Specifications"  
                :title="ts.ProductTitle"
                :thumb="ts.ProductJpg"
                origin-price="10.00"
                @click="Details(ts.CommodityID)"
                />
        </van-tab>
        <van-tab title="鞋" name="shoe" style="margin:.15rem 0 ;">
            <van-card
                currency=""
                v-for="(ts,i) in commodity" :key="i"
                num="99"
                :price="ts.CommodityPrice"
                :desc="ts.Specifications"  
                :title="ts.ProductTitle"
                :thumb="ts.ProductJpg"
                origin-price="10.00"
                @click="Details(ts.CommodityID)"
                />
        </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return{
            commodity:[],
            color:"#f44",
            keyword:""
        }
    },
    methods: {
        onClick(name){
            
            this.$axios.get("vue/" + name).then(res=>{
            

            this.commodity = res.data.result
            this.commodity.forEach(function(result){
                // console.log(result)
                result.ProductJpg = result.ProductJpg.split("jpg")[0]
                result.ProductJpg = result.ProductJpg + "jpg"
                // console.log(result.ProductJpg)
                // console.log(result)
                // this.goodList.push(result)
            })
            })
        },
        onSearch(){
            // enter 键盘的回车 
            // console.log(this.keyword);
        },
        Jump(){
            this.$router.push({name:'search'});
        },
        Details(Goodid){
            this.$router.push({name:'Details',query:{Goodid}});
            // console.log(Goodid)
        }
    },
    mounted(){
        this.$axios.get("vue/commodity").then(res=>{
            

            this.commodity = res.data.result
            this.commodity.forEach(function(result){
                // console.log(result)
                result.ProductJpg = result.ProductJpg.split("jpg")[0]
                result.ProductJpg = result.ProductJpg + "jpg"
                // console.log(result.ProductJpg)
                // console.log(result)
                // this.goodList.push(result)
            })
        })


        // this.$axios.get("vue/accessorie").then(res=>{
            

        //     this.accessorie = res.data.result
        //     console.log(this.List)
        //     this.accessorie.forEach(function(result){
        //         // console.log(result)
        //         result.ProductJpg = result.ProductJpg.split("jpg")[0]
        //         result.ProductJpg = result.ProductJpg + "jpg"
        //         // console.log(result.ProductJpg)
        //         // console.log(result)
        //         // this.goodList.push(result)
        //     })
        //         console.log(this.accessorie)
        // })


        // this.$axios.get("vue/shoe").then(res=>{
            

        //     this.shoe = res.data.result
        //     console.log(this.List)
        //     this.shoe.forEach(function(result){
        //         // console.log(result)
        //         result.ProductJpg = result.ProductJpg.split("jpg")[0]
        //         result.ProductJpg = result.ProductJpg + "jpg"
        //         // console.log(result.ProductJpg)
        //         // console.log(result)
        //         // this.goodList.push(result)
        //     })
        //         console.log(this.shoe)
        // })
    },
}
</script>
<style  scoped>

</style>