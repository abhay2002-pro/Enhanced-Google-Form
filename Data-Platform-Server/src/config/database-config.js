const mongoose = require('mongoose');
const serverConfig = require('./server-config');

const connectDB = async () => {
    try{
        mongoose.set("strictQuery", false);
        const { connection } = await mongoose.connect(serverConfig.MONGODB_URI);
        console.log(`MongoDB connected with ${connection.host}`);
    } catch(err){
        console.log(`Some error occured. Error message: ${err}`);
    }
};

module.exports = connectDB