
var http=require ('http')
http.createserver (function(req,res){
    res.writehead(200,{'content-type':'text/plain'})
    res.end("Nodejs server")
}).listen(1234)

