import dotenv from "dotenv" 
import  connectDB  from "./config/db.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
});


connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log(`Server is runnig at port ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MongoDb connection failed ", err);
    
})