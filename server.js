
const http = require('http')
const express = require('express')
const path = require("path")
const { response } = require('express')
const port = 3000
const app = express()
const fs = require('fs')
// Firebase 





app.use(express.static(__dirname + '/theme/'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/theme/index.html'))
})
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '/theme/404.html'))
})
app.listen(port, function(error){
    if (error){
        console.log('Something went wrong.')
    }else{
        console.log('Server is up at port 3000')
    }
});
