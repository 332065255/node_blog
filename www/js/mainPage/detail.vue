<template>
    <h1>
        this is detail{{this.$route.params.ids}}
    </h1>
</template>
<script>
export default  {
    data(){
        return {}
    },
    mounted:function(){
        // this.$http.get('/detail?id='+this.$route.params.id).then(function(res){
        //     console.log(res);
        //     this.listArr=res.body;
        // },function(res){
        //     console.log(res);
        // })
        console.log(this.$route.params.ids)
    },
}
</script>
<style>
</style>