<template>
    <div>
        <van-tabs  style=" margin:.15rem ;"
        title-active-color="red"  id="label" animated swipeable
        >
            <van-tab title="网购天地" >
                <van-grid :column-num="zhi5" :gutter="5" id="categorys">
                <van-grid-item
                    v-for="value in Resources"
                    :key="value.text"
                    :icon="value.imgs"
                    :text="value.text"
                />
                </van-grid>
            </van-tab>
            <van-tab title="合作伙伴">
                <van-grid :column-num="zhi5" :gutter="5" id="Resourcex">
                <van-grid-item
                    v-for="value in Resourcex"
                    :key="value.text"
                    :icon="value.imgs"
                    :text="value.text"
                />
                </van-grid>
            </van-tab>
        </van-tabs>



    <Timing></Timing>

    <van-grid :column-num="zhi2" :gutter="10" id="category">
        <van-grid-item
            v-for="value in Resource"
            :key="value.text"
            :icon="value.imgs"
            :text="value.text"
        />
    </van-grid>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                zhi2:2,
                zhi5:5,
                Resource:[
                    {
                        text:"男装",
                        imgs:require("@/assets/imgs/4.jpg")
                    },
                    {
                        text:"女装",
                        imgs:require("@/assets/imgs/5.jpg")
                    },
                    {
                        text:"饰品",
                        imgs:require("@/assets/imgs/6.jpg")
                    },
                    {
                        text:"鞋子",
                        imgs:require("@/assets/imgs/7.jpg")
                    },
                    {
                        text:"内衣",
                        imgs:require("@/assets/imgs/2.jpg")
                    },
                    {
                        text:"童装",
                        imgs:require("@/assets/imgs/3.jpg")
                    },
                ],
                Resources:[
                    {
                        text:"超市选购",
                        imgs:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png"
                    },
                    {
                        text:"数码电器",
                        imgs:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png"
                    },
                    {
                        text:"潮流服饰",
                        imgs:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png"
                    },
                    {
                        text:"海鲜海产",
                        imgs:"//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png"
                    },
                    {
                        text:"9.9元拼",
                        imgs:"//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png"
                    },
                    {
                        text:"领劵",
                        imgs:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png"
                    },
                    {
                        text:"赚钱",
                        imgs:"//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png"
                    },
                    {
                        text:"会员",
                        imgs:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png"
                    },
                    {
                        text:"充值缴费",
                        imgs:"//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png"
                    },
                    {
                        text:"送货到家",
                        imgs:"//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png"
                    },
                ],
                gutter:".15rem",
                Resourcex:[
                    {
                        text:"淘宝",
                        imgs:require('@/assets/imgs/taobao.jpg'),
                    },
                    {
                        text:"京东",
                        imgs:require('@/assets/imgs/jingdong.jpg')
                    },
                    {
                        text:"平多多",
                        imgs:require('@/assets/imgs/pingduoduo.jpg')
                    },
                    {
                        text:"天猫商城",
                        imgs:require('@/assets/imgs/tianmao.jpg')
                    },
                    {
                        text:"唯品会",
                        imgs:require('@/assets/imgs/weipinhui.jpg')
                    },
                    {
                        text:"国美",
                        imgs:require('@/assets/imgs/guomei.jpg')
                    },
                    {
                        text:"苏宁",
                        imgs:require('@/assets/imgs/suning.jpg')
                    },
                    {
                        text:"美团",
                        imgs:require('@/assets/imgs/meituan.jpg')
                    },
                    {
                        text:"饿了么",
                        imgs:require('@/assets/imgs/eleme.jpg')
                    },
                    {
                        text:"全部",
                        imgs:require('@/assets/imgs/quanbu.jpg')
                    },
                ],
            }
        }
    }
</script>
<style  scoped>
    #category,#categorys,#Resourcex{
        margin-top: .15rem;
        
    }
    
</style>