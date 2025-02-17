const express = require('express');
const cors = require('cors');
const {server} = require('server');
const http = require('http');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config()

const app = express()
const io = new Server(server,{
    cors:{origin:'*'},
});

app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/v1/chat/completions';

app.post('/debug',async(requestAnimationFrame,res)=>{
    try{

    }
    catch(error){

    }
})