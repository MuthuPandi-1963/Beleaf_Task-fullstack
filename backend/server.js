import express from 'express'
import {config} from 'dotenv'
import { envLoader } from './utils/envLoader.js'
import { dbConfig } from './config/db.config.js'
import productsRouter from './routes/product.routes.js'

config()
const app = express()
app.use(express.json())
app.get("/health",(req,res)=>{
    res.json({
        message : "API is Running Successfully"
    }).status(200)
})
app.use("/api/products", productsRouter);
const port = envLoader("PORT") ?? 3000
app.listen(port,async()=>{
    try {
        await dbConfig()
    console.log("Server is Running on port : ",port)
    } catch (error) {
     console.log(error);
        
    }
})