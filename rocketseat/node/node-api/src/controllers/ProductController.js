const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){ //GET
        const products = await Product.find(); // buscar todos os produtos

        return res.json(products); //retorna um em estrutura json
    },

    async show(req, res){ //GET com id
        const product = await Product.findById(req.params.id); // pego o id definido na rota e retorno um json

        return res.json(product); 
    },

    async store(req, res){ //POST
        const product = await Product.create(req.body); // pego o body que passo e dai ele retorna todos os registros

        return res.json(product);
    },

    async update(req, res){
        const product =  await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
        //new = true significa que o mongoose tem que retornar o produto atualizado para a variavel product

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};