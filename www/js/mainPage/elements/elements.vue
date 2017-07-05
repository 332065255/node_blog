<template>
    <div class='element'>
        <div class="leftDiv">
            <div><span>{{time[0]}}</span><span>{{time[1]}}</span></div>
            <div><h2>{{time[2]}}</h2></div>
        </div>
        <div class="rightdiv">
            <div class="left"><h3><router-link :to="jump">{{title}}</router-link></h3></div>
            <div class="right">{{author}}</div>
            <div class="clears"></div>
            <div >{{text}}</div>
        </div>
        <div class="clears"></div>
        <!--<h1>111</h1>-->
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                id:this.detail.id,
                title:this.detail.title,
                author:this.detail.author,
                time:this.detail.time.split('-'),
                text:this.detail.text,
                jump:'/detail/'+this.detail.id
            }
        },
        methods:{
            jump:function(){
                console.log(this.$route.router)

                // this.$route.
                
            }
        },
        props: ['detail'],
    }
</script>
<style scoped>
    .element{
        width: 100%;
        padding: 15px 20px;
        box-sizing: border-box;
        position: relative;
        display: flex;
    }
     .rightdiv{
       flex: 1;
       height: 80px;
       padding: 0px 20px;
       box-sizing: border-box;
    }
    .leftDiv{
         width: 80px;
         height: 100px;
    }
    .detail_text{
        position: absolute;
        bottom: 0px;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .clears{
        clear: both;
    }
    .leftDiv div{
        /*line-height: 50px;*/
        box-sizing: border-box;
        height: 50%;
        width: 100%;
        border: 1px solid #6f6f6f;
        text-align: center;
        
    }
    .leftDiv div:last-child{
        line-height: 50px;
        border-top: none;
    }
    .leftDiv div span{
        display: block;
    }
    .rightdiv div:last-child{
        margin-top: 20px;
        width: 100%;
        overflow: hidden;
    }
</style>