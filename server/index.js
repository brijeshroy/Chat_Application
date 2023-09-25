const express = require('express');
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')



const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 7000



async function start ()
{
    try {

        await mongoose.connect(process.env.mongo_uri)
       
        app.listen(port,()=>{
            console.log(`We are activated on port ${port}`)
        })
    } catch (error) {
        console.log("We got the error",error)
    }
} 

start()


