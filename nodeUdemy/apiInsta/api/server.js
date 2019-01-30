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

    //mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/apiInsta", {useNewUrlParser: true})
    .then(() => {
        console.log("Connect to mongo!");
    }).catch(err => {
        console.log("Error to connect mongo: "+err);
    });
    
app.get("/", (req, res) => {
    res.send({msg: "Olá!"});
});


app.post("/api", (req,res) => {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001"); //reader for post comunicate with front end, because without it, it response only the browser

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
            res.json({'status': 'included'});
        }).catch(err => {
            res.json({'status': 'Error in sign up'});
        })

    }); // move the file
});

app.get("/api", (req, res) => {
    Post.find().then(posts =>{
        res.send(posts)
    }).catch(err => {
        res.json({"msg": "Error to find posts!"});
    })
});

app.get("/api/:id", (req, res) => {
    var id = req.params.id;
    
    Post.find({_id: {$eq: id}}).then(post => {
        res.send(post);
    }).catch(err => {
        res.json({"msg": "Occur an erro to find"});
    });

});

app.put("/api/:id", (req, res) => {
    dataPost = req.params;

    Post.update({_id: dataPost.id},
        {$set: {title: req.body.title, url_image: req.body.url_image}})
        .then(() => {
            res.json({"msg": "Update post"});
        }).catch(err => {
            res.json({"msg": "Couldn't update post"});
        })
});

app.delete("/api/:id", (req, res) => {
    id = req.params.id;

    Post.remove({_id: {$eq: id}})
    .then(() => {
        res.json({"msg": "Remotion make with sucess!"});
    }).catch(err => {
        res.json({"msg": "Error in remotion!"});
    });
});


const PORT = 8081;
 app.listen(PORT, () => {
    console.log("The server is on!");
 })