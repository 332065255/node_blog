<template>
    <div class='element'>
        <div class="leftDiv">
            <div>{{time}}</div>
        </div>
        <div class="rightdiv">
            <div class="left">{{title}}</div>
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
                title:this.detail.title,
                author:this.detail.author,
                time:this.detail.time,
                text:this.detail.text,
            }
        },
        props: ['detail'],
    }
</script>
<style scoped>
    .element{
        width: 100%;
        /*height: 80px;*/
        padding: 15px 20px;
        box-sizing: border-box;
        position: relative;
        display: flex;
    }
     .rightdiv{
       /*margin-left: 80px;*/
       flex: 1;
       height: 80px;
    }
    .leftDiv{
         width: 80px;
         height: 80px;
         /*float: left;*/
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
</style>