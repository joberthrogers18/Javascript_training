const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
const routes = require("./routes/index");

const PORT = process.env.PORT || 4001;
//const index

const app = express();

app.use(routes);

const server = http.createServer(app);

const io = socketIo(server);

const getApiAndEmit = async socket => {
    try{    
        const res = await axios.get(
            "https://api.darksky.net/forecast/bbe3f6c1d6d19ab12cd359be7ea40599/37.8267,-122.4233"
        );

        socket.emit("FromAPI", res.data.currently.temperature);
    }catch(error){  
        console.log(`ERROR: ${error.code}`);
    }
};

io.on("connectio", socket => {
    console.log("Connection established");
    setInterval(() => {
        getApiAndEmit(socket),
        20000
    });
    socket.on("disconnect", () => console.log("Client disconnect"));
});

server.listen(PORT, () => {
    console.log(`Listen in port: ${PORT}`);
});