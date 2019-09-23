<template>
        <van-nav-bar
            id="Head"
            :title="title"
            :left-text="show?'返回':''"
            :left-arrow="show"
            @click-left="onClickLeft"
            :fixed="false"
            
        >   
        <div slot="right" id="search" >
            <van-icon   @click="startScan" />
            <van-icon v-if="searchShow" name="search"  @click="goSearch" />
        </div>

        </van-nav-bar>
</template>

<script>
export default {
    data(){
        return {
            searchShow:true,
            false:false
        }
    },
    props:{
        title:{
            type:String,
            default:"xxxx"
        },
        show:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        startScan(){
            console.log("startScan")
        },
        goSearch(){
            this.$router.push({name:'search'})
        },
        onClickLeft(){
            this.$router.go(-1);
        },
        onClickRight(){

        }
    },
    mounted(){
        if(this.$route.name=="search"){
            this.searchShow = false;
        }
    }
}
</script>
<style scoped>
    #Head{
        background-color: #fff;
        /* background-image: linear-gradient(to top, #66b7f9,#1c82d4); */
    }
</style>