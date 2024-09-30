import mongoose from "mongoose";

const dbconnection = async()=>{
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(`database connection successfull`, res.connection.host)
    } catch (error) {
        console.log('connection cancelled', error )
    }
}

export default dbconnection