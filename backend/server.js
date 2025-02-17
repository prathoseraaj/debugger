const express = require('express');
const cors = require('cors');
const {server} = require('server');
const http = require('http');
const dotenv = require('dotenv');
const axios = require('axios');
const { header } = require('server/reply');
const { socket } = require('server/router');

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
        const {code,language} = req.body;

        const prompt = `Debug the following ${language} code and suggest improvements:\n\n${code}`;
        const response = await axios.post(GROQ_API_URL,{
            model: 'llama3-8b-8192',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 300,
        },{
            header: {Autorization: `Bearer ${GROQ_API_KEY}`}
        });
        
        res.json({output: response.data.choices[0].messages.content});

    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error processing request' });
    }
});

io.on('connection',(socket)=>{
    console.log('User connected:', socket.id);

    socket.on('debug_code',async({code,language})=>{
        try{

        }
        catch(error){

        }
    })
})