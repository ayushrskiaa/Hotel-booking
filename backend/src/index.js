// require('dotenv').config({path:'.env'});

import dotenv from 'dotenv';
// import mogoose from 'mongoose';
// import {DB_NAME} from './constants';
import connectDB from './db/index.js';
// import express from 'express';
import {app} from './app.js';


dotenv.config({
    path: './env'
})

// const app=express() 
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is listening on port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log('MongoDB connection failed!!:',err);
})






// import express from 'express';
// const app=express()

// (async()=>{
//     try{
//      await mongoose.connect(`${process.nextTick.MONGO_DB_URI}/${DB_NAME}`)
//      app.on("error",()=>{
//         console.log("ERRR:", error);
//         throw error
//      })
//      app.listen(proces.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//      })
//     }
//     catch(error){
//         console.log('Error: ',error)
//         throw err
//     }
// })()