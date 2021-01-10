
const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        const conn = mongoose.connect('mongodb+srv://dijiflex:evfVfbGubP1daiyZ@cluster0.5f28l.mongodb.net/buglogger?retryWrites=true&w=majority', 
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true 
        })
        console.log('Mongodb connected');
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB;