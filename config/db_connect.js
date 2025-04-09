const mongoose = require("mongoose");
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        )
    }catch (error) {
        console.error("The error with connection is ", error);
    }
}

module.exports = connectDB;