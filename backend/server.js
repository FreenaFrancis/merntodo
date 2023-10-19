const express = require('express')
 const mongoose = require('mongoose')
const app = express();
const env = require('dotenv').config()
const cors = require('cors')
app.use(express.json())
const routes = require('./route/ToDoRoute')
const port = 2000;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('mongodb is connected'))
.catch((error)=>console.log(error))

app.use(cors());
app.use(express.json())

app.use(routes)


app.listen(port,()=>{
    console.log('server is running');
})