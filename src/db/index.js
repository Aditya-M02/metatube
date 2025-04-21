import mongoose, { connect } from "mongoose";
import { DB_NAME} from "../constants.js";

const connectDB = async () =>{
    try {
        const Connection_Instance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected !! DB_Host:${Connection_Instance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection Error",error)
        process.exit(1)
    }
}

export default connectDB