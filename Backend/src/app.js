import express from "express"
import Cors from 'cors'
import cookieParser  from "cookie-parser"

import {UserRouter} from "./routes/User.routes"
import {CollectionRouter} from "./routes/Collection.routes"

import errorHandler from "./middleware/errors.middleware"




const app = express()

/* CONFIGURATION */ 
app.use(Cors({origin: process.env.CORS_ORIGIN}))
app.use(express.json()) // middleware so that server can only accept data in JSON format
app.use(express.urlencoded({extended: true})) // middleware so that data from url can be read in server correctly
app.use(express.static("public"))
app.use(cookieParser())


/* ROUTES */ 

app.use("/api/auth", UserRouter);
app.use("/api/collections", CollectionRouter);

// Error Handling Middleware
app.use(errorHandler);


export {app}