const express = require('express');

const app = express();
const connectDatabase = require('./model/index')
const userRoute = require('./routes')
// const postRouter = require('./routes/user')
app.use(express.json())
app.use(setContext)
app.use(userRoute)

function setContext(req,res,next){
    req.context={}
    // res.send(req.context)
    // console.log('req.context',req.context)
    next();
}

connectDatabase().then(()=>{
    app.listen(8080,()=>{
        console.log('server running at port 8080')
    })
})

