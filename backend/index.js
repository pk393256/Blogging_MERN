const express = require('express');

const app = express();
const connectDatabase = require('./model/index')
const userRoute = require('./routes')
// const postRouter = require('./routes/user')
app.use(express.json())
app.use(userRoute)
connectDatabase().then(()=>{
    app.listen(8080,()=>{
        console.log('server running at port 8080')
    })
})

