var express = require('express');
var app = express();
var mainpage=require('./mainpage/index');
var cookieParser = require('cookie-parser')
console.log(__dirname)


app.use(express.static('www'));
app.use(cookieParser())
app.use('/list',mainpage.mainApp);   //路由
app.get('/', function(req, res) {
    res.cookie('name','gaoyiyi');
    res.redirect(302, '/home');

})
app.get('/home', function(req, res) {
    res.cookie('name','gaoyiyi',{'maxAge':90000});
    res.sendfile("./www/index.html")
})
app.get('/login', function(req, res) {
    res.sendfile("./www/login.html")
})

var server = app.listen(3000, function() {
    console.log('正在监听', server.address().address + server.address().port);
})