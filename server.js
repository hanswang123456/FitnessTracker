const express  = require("express")
const cors = require("cors");
const mongoose = require("mongoose")

require('dotenv').config();



const application = express()
const port  = process.env.PORT ||5000

application.use(cors())


application.use(express.json())




const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true})//useCreateIndex:true

mongoose.connection.once('open', ()=>{
    console.log("connected to mongoose")
})

const exerciseRoute = require('./routes/exercises');
const userRoute = require('./routes/users');

application.use('/exercises', exerciseRoute)
application.use('/users', userRoute)

application.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})