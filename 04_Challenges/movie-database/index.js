const express = require('express')
const app = express()
let port = 3000
app.listen(port,function(req,res){
    console.log(`Server started at ${port}`)
})
app.get('/',(req,res) =>{
    res.send('ok')
})
app.get('/test',(req,res)=>{
    res.send({status:200, message:"ok"})
}

)
app.get('/time',(req,res)=>{
    let date= new Date()
    const obj={
        status:200,
        message:`${date.getHours()}:${date.getMinutes()}`

    }
    res.send(obj)
})