// var http = require('http');

// http.createServer(function(request, response) {
//     response.writeHead(200,{
//         'Content-type':'text/plain'
//     });

//     response.end("Hello1");
// }).listen(3000, console.log("Server is running on port: 3000"));


const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require('./config/db');

const app = express();
app.use(morgan('dev'));

app.use(express.json({}));
app.use(express.json({
  extended: true
}))

dotenv.config({
    path: './config/config.env'
});

app.get('/todo', (req, res)=> {
    res.status(200).json({
        "name": "Gyan"
    });
});

connectDB();

app.use('/api/todo/auth', require('./routes/user'));
app.use('/api/material/master', require('./routes/materialmaster'));
//app.use('/api/todo', require('./routes/todo'));
const PORT = process.env.PORT || 3000;
app.listen(PORT,
  console.log(`Server running mode on port ${PORT}`.red.underline.bold)

);

