if(process.env.NODE_ENV == "production"){ // verify if the aplication running in production or nor
    module.exports ={mongoURI: "mongodb://joberth:j123456@ds113765.mlab.com:13765/blogapp-prod"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}