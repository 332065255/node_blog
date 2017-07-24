var list=require('./list');
var express=require('express');
var app=express();
module.exports.mainApp=app;


app.get('/',function(req,res){
    console.log(req.cookies);
    res.send(JSON.stringify(list.getList()));
})
