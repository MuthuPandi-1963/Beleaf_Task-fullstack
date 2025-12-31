import {connect} from "mongoose"
import { envLoader } from "../utils/envLoader.js"

export const dbConfig = async()=>{
    try {
        const dbURL = envLoader("DB_URL")
       const res =  await connect(dbURL)
        console.log("Database Connected Successfully",res.connections[0].host);
        
    } catch (error) {
        console.log("Database Connection Failed"
            ,error.message
        );
        process.exit(1);
        
    }
}