import express from "express"
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from './routes/user.routes.js'
import bodyParser from "body-parser";


connectDB();

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true,
}))

app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});


export { app }
