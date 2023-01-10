const express = require('express')
const app = express()
let port = 5000
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
app.get('/hello/:id?',(req,res)=>{
   let id=req.params.id
   let obj
   obj={
    status:200,
    message:`Hello ,${id}`
   }
   res.send(obj)
})
app.get('/search',(req,res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
    
        const response = {
            status:200, message:"ok", data: search
        };

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: "you have to provide a search"
        };


        res.status(500);
        res.send(response);
    }
});
