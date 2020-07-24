const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name:{
        type: String,
        required: [true, 'name field is required']
    },

    email: {
        type: String,
        required: [true, 'email is required']
    },

    contact: {
        type : String,
    },

    date : {
        type: Date
        
    },

    products : {
        type:String

    },

    budget : {
        type: String
    },

});

const schema = mongoose.model('schema',UserSchema);

module.exports = schema;