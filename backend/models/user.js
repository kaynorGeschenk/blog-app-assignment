const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
},

FullName: {
    type: String,
    required:true
},
Username: {
    type: String,
    required:true
},

Email: {
    type: String,
    required: true,
},

PasswordHash: {
    type: String,
    required: true,
},

})  

module.exports = ("user" ,userSchema)