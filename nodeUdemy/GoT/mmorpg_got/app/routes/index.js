module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.getIndex(application, req, res);
	});
}