const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config()

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{origin:'*'},
});

app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';  // Updated URL

app.post('/debug',async(req,res)=>{
    try{
        const {code,language} = req.body;
        
        const prompt = `Debug the following ${language} code and suggest improvements:\n\n${code}`;
        const response = await axios.post(GROQ_API_URL,{
            model: 'llama3-8b-8192',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 300,
        },{
            headers: { Authorization: `Bearer ${GROQ_API_KEY}` },
        });
             
        res.json({ output: response.data.choices[0].message.content });
    }
    catch(error){
        console.error('Error details:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error processing request' });
    }
});

io.on('connection',(socket)=>{
    console.log('User connected:', socket.id);
    
    socket.on('debug_code',async({code,language})=>{
        try{
            const prompt = `Debug the following ${language} code:\n\n${code}`;
            
            const response = await axios.post(GROQ_API_URL, {
                model: 'llama3-8b-8192',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 300,
              }, {
                headers: { Authorization: `Bearer ${GROQ_API_KEY}` }
              });
                        
            socket.emit('debug_result', response.data.choices[0].message.content);
                       
        }
        catch(error){
            console.error('Error details:', error.response ? error.response.data : error.message);
            socket.emit('debug_result', 'Error processing request');
        }
    });
    
    socket.on('disconnect', () => console.log('User disconnected:', socket.id));
});

server.listen(5000, () => console.log('Server running on port 5000'));