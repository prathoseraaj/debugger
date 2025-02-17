import './App.css';
import React from 'react';
import {io} from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:5000');

const App = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('');
  const [debugResult, setDebugResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send the code to backend via Socket.io
    socket.emit('debug_code', { code, language });

    // Optional: Send via HTTP request to check if both work
    axios.post('http://localhost:5000/debug', { code, language })
      .then(response => setDebugResult(response.data.output))
      .catch(error => setDebugResult('Error processing request'));
  };  
  
  socket.on('debug_result', (result) => {
    setDebugResult(result); 
  });
}

function App() {
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
