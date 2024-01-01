
const express = require('express');
const cors =require('cors');
const dotenv =require('dotenv');
const app = express();
const db =require('./config/config.js');
const PORT =8000;

dotenv.config();


const JWTKEY = process.env.JWT_KEY;

app.use(express.json());
app.use(cors());

app.use('/',require('./routes'));

app.listen(PORT,(err)=>{
    if(err){
        console.log("error:",err);
    }
    console.log("Server running on Port: 8000");
})