var http = require('http')
http.createServer(function(req,res) {

    res.write("welcome !")
    res.end()

    console.log('working');
}).listen(8080)