const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});


//Post.sync({ force: true}) // usa apena quando for criar a tabela pela primeira vez no banco depois comenta

module.exports = Post;