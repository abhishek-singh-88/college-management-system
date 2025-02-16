import express from "express";
import { config } from "dotenv";
import connectDB from "./configs/db.js";
import parser from 'cookie-parser'
import fileupload from 'express-fileupload'
import cors from 'cors'
import adminRoutes from './routes/admin.route.js'
import studentRoutes from './routes/student.route.js'
import teacherRoutes from './routes/teacher.route.js'
import principalRoutes from './routes/principal.route.js'
import forgetRoutes from './routes/forget.password.routes.js'

// express app 
const app = express();
config();




// middlewares 
app.use(cors({

}))
app.use(express.json())
app.use(parser())
app.use(fileupload())


// Routes  
app.use(adminRoutes)
app.use(studentRoutes)
app.use(teacherRoutes)
app.use(principalRoutes)
app.use(forgetRoutes)




// server listening 
app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
  connectDB();
});












