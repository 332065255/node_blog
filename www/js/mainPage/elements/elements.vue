<template>
    <div>
        <div>
            <div>{{time}}</div>
        </div>
        <div>
            <div>{{title}}</div>
            <div>{{author}}</div>
            <div>{{text}}</div>
        </div>
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
<style>
</style>