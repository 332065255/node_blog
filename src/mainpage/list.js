var db={
    listarr:[],
    getList:function(){
        if(db.listarr.length==0){
            for(var i=0;i<Math.random()*20+20;i++){
                listarr.push({id:i,title:'这是第'+i+'篇测试文章',time:'2007-19-20',author:'高大魔王',text:'qfqwjninqwncinqqnwicnqiwbcnyeuwbchuywbyvhbwyebvyuwbebvewv'});
            }
        }
        return db.listarr;
    },
    getSomeOne:function(id){
        return db.getList()[id];
    }
}

module.exports=db;