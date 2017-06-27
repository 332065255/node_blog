var config = require('./webpack.config');
var webpack = require('webpack');
var compiler = webpack(config);
compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
        // pass a number to set the polling interval
}, function(err, stats) {
    // console.log(err);
    if (err == null) {
        console.log('\x1B[33m%s\x1b[0m:', '重新编译成功');
    }
});

// compiler.run(function(err, stats) {
//     console.log(err);
//     if (err == null) {

//     }
// });
require('./src/index');