var express=require('express');
var server=express();
var port=process.env.port||3200;

var fs= require('fs')

server.get('/',(req,res)=>{
    res.send('Welcome to the server !')
});

server.get('/getData',(req,res)=>{
    fs.readFile('data.json',(err,content)=>{
        if(err) throw err;
        res.send(JSON.parse(content))
    })
});

server.listen(port,(err)=>{
    if(err) throw err;
    console.log('server is running on the port'+port)
});