const mongoose = require ('mongoose')

const postSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },

    name:{
        type: String,
        require: true,
    },
    author: {
        title: String,
        require: true
    },
    content:{
        type: String,
        require: true
    },
    date:{},

    upvote:{},
    
    downvotes:{}

})

module.exports = postSchema