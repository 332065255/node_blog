var express = require('express');
var app = express();
console.log(__dirname)
app.use(express.static('www'));
app.get('/', function(req, res) {
    res.redirect(302, '/home');

})
app.get('/home', function(req, res) {
    res.sendfile("./www/index.html")
})
app.get('/login', function(req, res) {
    res.sendfile("./www/login.html")
})
var server = app.listen(3000, function() {
    console.log('正在监听', server.address().address + server.address().port);
})