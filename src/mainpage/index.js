var list=require('./list');

module.exports=function(app){
    app.get('/list',function(req,res){
        res.send(JSON.stringify(list.getList()));
    })
}