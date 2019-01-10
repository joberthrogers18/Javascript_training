module.exports = application => {
    application.get('/', (req, res) => {
        application.app.controllers.home.exibeHome(application, req, res);
    });
} ;
