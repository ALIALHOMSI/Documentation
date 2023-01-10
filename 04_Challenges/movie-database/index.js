const express = require('express')
const app = express()
let port = 4000
app.listen(port,function(req,res){
    console.log(`Server started at ${port}`)
})
app.get('/ali',(req,res) =>{
    res.send('ok')
})