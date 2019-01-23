const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Post = new Schema({
    title: {
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId, // will store an id from category
        ref: 'category', //name of model given in Category file "mongoose.model" first parameter
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
});

mongoose.model("post", Post);