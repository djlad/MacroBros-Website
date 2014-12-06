
var http = require('http');

var exp = require("express");
app = exp()


server = http.createServer(app)


server.listen(80)

app.get("/",function(req,resp){
	resp.sendfile("index.html")
})

app.get("/styles.css",function(req,resp){
	resp.sendfile("styles.css")
})

app.get("/logic.js",function(req,resp){
	resp.sendfile("logic.js")
})

app.get("/leftarrow.png",function(req,resp){
	resp.sendfile("leftarrow.png")
})

app.get("/rightarrow.png",function(req,resp){
	resp.sendfile("rightarrow.png")
})

app.get("/displaymenu.js",function(req,resp){
	resp.sendfile("displaymenu.js")
})

app.get("/dispmenu.css",function(req,resp){
	resp.sendfile("dispMenu.css")
})
