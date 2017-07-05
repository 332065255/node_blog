<template>
    <div class="main_list">
        <span>我的博客文章</span>
       
        <elements v-for="detail in listArr" v-bind:detail="detail">
        </elements>
        <!--<elements ></elements>-->
        <!--1111-->
        <!--{{detail.title}}-->
    </div>
</template>
<script>
import elements from './elements/elements.vue';

export default  {
    data(){
        return {
            listArr:[],
        }
    },
    methods:{
       
        
    },
    activated:function(){
        console.log('被创建');
    },
    mounted:function(){
        this.$http.get('/list').then(function(res){
            console.log(res);
            this.listArr=res.body;
        },function(res){
            console.log(res);
        })
    },
    components:{
        elements
    }
}
</script>
<style scoped>
.main_list{
    height: 100%;
    overflow-y:scroll;
}
.main_list span{
    font-size: 18px;
    margin-left: 20px;
    margin-bottom: 20px;
    display: block
}
.main_list ul li{
    display: block;
}
</style>