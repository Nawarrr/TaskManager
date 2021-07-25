const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required : [true, 'You must provide a name'],
        trim : true,
        maxlength:[20 , 'Name must be less than 20']

    },
    completed: {
    type: Boolean,
    default :false
    }
})

module.exports = mongoose.model('Task' , TaskSchema)