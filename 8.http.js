const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to our home page")
    }
    if(req.url==='/about'){
        res.end("this is our story")
    }

    res.end("oops")

   
})

server.listen(5000)