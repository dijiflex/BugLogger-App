
const mongoose = require('mongoose');


const LogSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Log text is required']
    },
    priority: {
        type: String,
        trim: true,
        default: 'low',
        enum: ['low', 'moderate', 'high'],
        required: [true, 'Wrong Priority supplied']
    },
    created: {
        type: Date,
        trim: true,
        default: Date.now()
    }

})

module.exports = mongoose.model('Log', LogSchema)