const express = require('express');

const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors=require('cors')
const connectDatabase = require('./model/index')
const userRoute = require('./routes')
// const postRouter = require('./routes/user')
app.use(cors())
app.use(express.json())
app.use(setContext)
app.use(userRoute)

function setContext(req,res,next){
    req.context={}
    // res.send(req.context)
    // console.log('req.context',req.context)
    next();
}
const PORT = process.env.PORT || 8080
connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server running at port ${PORT}`)
    })
})

