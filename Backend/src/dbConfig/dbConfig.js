import mongoose from "mongoose"
import "dotenv/config"

const ConnectToDB = async () =>{
    try {
        const ConnectionInstance = await mongoose.connect(process.env.MONGO_URI)
        console.log("Sucessfully Connected to MongoDB ")
        // console.log("MongoDB path: ", ConnectionInstance)
    } catch (error) {
        console.log("MongoDb Connection ERROR: ", error)
        process.exit(1)
    }
}

export {ConnectToDB}
