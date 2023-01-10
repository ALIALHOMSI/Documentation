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
app.get(`/movies/read`,(req,res)=>{
    res.send({status:200, data:movies})
}
)
app.get(`/movies/read/by-date`,(req,res)=>{
   sortByDate = movies.sort((p1,p2)=>p1.year - p2.year)
    res.send({status:200, data:sortByDate})
}
)

app.get(`/movies/read/by-rating`,(req,res)=>{
    sortByRating = movies.sort((p1,p2)=>p1.rating - p2.rating)
     res.send({status:200, data:sortByRating })
 }
 )

 app.get(`/movies/read/by-title`,(req,res)=>{
    sortByTitle = movies.sort((p1,p2)=>p1.title - p2.title)
     res.send({status:200, data:sortByTitle })
 }
 )
 app.get(`/movies/read/id/:id`,(req,res)=>{
    const id=req.params.id;
    const movie= movies.find(x => x.title === id ) 
    if(typeof movie === 'undefined')
    {
        res.json({status:404, error:true, message:'the movie <ID> does not exist'})
    }
    else{
         res.json({satues:200, data:movie})
    }    
    });

 

