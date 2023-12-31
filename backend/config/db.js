const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        // console.log(process.env.MONGO_URI);
        const conn = await mongoose.connect( process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        
        })

        console.log('Mongodb connection successful');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB; 