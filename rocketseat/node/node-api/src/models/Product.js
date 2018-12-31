const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//Descrição da tabela no mongoDb
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

//Registrar um model na aplicação 
mongoose.model('Product', ProductSchema); 