const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]
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
app.get(`/movies/create`,(req,res)=>{
    res.send({status:200, message:"ok"})
}
)

app.get(`/movies/read`,(req,res)=>{
    res.send({status:200, data:movies})
}
)
app.get(`/movies/update`,(req,res)=>{
    res.send({status:200, message:"ok"})
}
)
app.get(`/movies/delete`,(req,res)=>{
    res.send({status:200, message:"ok"})
}
)

