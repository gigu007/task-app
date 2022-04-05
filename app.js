
const express = require('express');
require('dotenv').config();
// const createTasks  = require('./public/controllers/task');
const app = express();
const tasks = require('./public/routes/task')
const connectDB =require('./public/controllers/db/connect')
const notFound =require('./public/middleWare/notFound');
const errorHandlerMiddleware = require('./public/middleWare/error');
//middle
app.use(express.json())
//routes
app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})
app.use('/api/v1/tasks',tasks)
app.use(notFound);
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
      app.listen(port,console.log(`Server is listening on port ${port}...`))
    }catch (error){
      console.log(error);
    }
}
start()
