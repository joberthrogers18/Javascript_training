 //Load modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const fs =require("fs"); //this module is for manipulate files


//Load multiparty
const multiparty = require("connect-multiparty");

require("./models/Post");
const Post = mongoose.model("post");

 const app = express();

 //Config
    //Body Parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    app.use(multiparty());  // Now the api can interpret forms with files

    app.use(function(req, res, next){   // Configure the preflight response when is method put or delete in verb request

        //how i use this here in preflight reposnse, we don't need adding this in all routes
        res.setHeader("Access-Control-Allow-Origin", "*"); // able request cross domain, requests from domains diferents
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");  //indicate what is the method which this orign can request
        res.setHeader("Access-Control-Allow-Headers", "content-type"); //able the request execute by origin have header writtens (can rewrite any option from header from request)
        res.setHeader("Access-Control-Allow-Credentials", true); //

        next();
    });

    //mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/apiInsta", {useNewUrlParser: true})
    .then(() => {
        console.log("Connect to mongo!");
    }).catch(err => {
        console.log("Error to connect mongo: "+err);
    });
    
app.get("/", (req, res) => {
    res.status(200).send({msg: "Olá!"});
});


app.post("/api", (req,res) => {

    //res.setHeader("Access-Control-Allow-Origin", "*"); //reader for post comunicate with front end, because without it, it response only the browser

    var date = new Date();
    var time_stamp = date.getTime(); //time stamp of moment the function is running
    //this is use to make images diferentes even if the same name

    var url_image = time_stamp + "_" + req.files.image_url.originalFilename;

    var originPath = req.files.image_url.path; //take the path from file temporary for save in dictory uploads

    var destinyPath = './uploads/' + url_image;


    fs.rename(originPath, destinyPath , err => {
        if(err){
            res.status(500).json({error: err});
            return;
        }

        var dataPost = {
            title: req.body.title,
            url_image: url_image
        }
        
        new Post(dataPost).save()
        .then(() => {
            res.status(200).json({'status': 'included'});
        }).catch(err => {
            res.status(500).json({'status': 'Error in sign up'});
        })

    }); // move the file
});

app.get("/api", (req, res) => {

    //res.setHeader("Access-Control-Allow-Origin", "*"); //reader for post comunicate with front end, because without it, it response only the browser

    Post.find().then(posts =>{
        res.status(200).send(posts)
    }).catch(err => {
        res.status(500).json({"msg": "Error to find posts!"});
    })
});

app.get("/api/:id", (req, res) => {
    var id = req.params.id;
    
    Post.find({_id: {$eq: id}}).then(post => {
        res.status(200).send(post);
    }).catch(err => {
        res.status(404).json({"msg": "Occur an erro to find"});
    });

});

app.get("/imagens/:imagem", (req, res) => {
    var img = req.params.imagem;

    fs.readFile('./uploads/' + img, function(err, content){ // recover the binary from image in upload directory
        if(err){
            res.status(400).json(err);
            return;
        }

        res.writeHead(200, {'content-type': 'image/jpeg', 'content-type': 'image/png'}) // send in head response which the browser will handler with image  and need change content type
        res.end(content); //take determinate information and append to response
   });
});

app.put("/api/:id", (req, res) => {

    Post.update({_id: mongoose.Types.ObjectId(req.params.id)}, 
                {$push: 
                    {commentaries: {
                        id_commentarie: mongoose.Types.ObjectId(),
                        commentarie: req.body.commentarie

                    }}
                })
        .then((result) => {
            res.status(200).json({"msg": "Update post"});
            console.log(result)
        }).catch(err => {
            res.status(500).json({"msg": "Couldn't update post"});
        })

});

app.delete("/api/:id", (req, res) => {
    id = req.params.id;

    Post.remove({_id: {$eq: id}})
    .then(() => {
        res.status(200).json({"msg": "Remotion make with sucess!"});
    }).catch(err => {
        res.status(500).json({"msg": "Error in remotion!"});
    });
});


const PORT = 8081;
 app.listen(PORT, () => {
    console.log("The server is on!");
 })