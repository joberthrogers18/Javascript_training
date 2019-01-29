if(process.env.NODE_ENV == "production"){
    module.exports = {mongoUri: "mongodb://joberth:j123456@ds113765.mlab.com:13765/blogapp-prod"}
}else{
    module.exports =  {mongoUri: "mongodb://localhost/blogapp"}
}