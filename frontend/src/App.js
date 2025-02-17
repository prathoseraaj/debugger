import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import './App.css'; // Make sure to import the CSS file

const socket = io('http://localhost:5000'); // Connect to backend server

const App = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('');
  const [debugResult, setDebugResult] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    socket.on('debug_result', (result) => {
      setDebugResult(result);
      setLoading(false);
    });

    return () => {
      socket.off('debug_result');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDebugResult('');

    try {
      // Send via WebSocket
      socket.emit('debug_code', { code, language });

      // Send via HTTP request as a fallback
      const response = await axios.post('http://localhost:5000/debug', { code, language });
      setDebugResult(response.data.output);
    } catch (error) {
      setDebugResult('Error processing request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="debugger-container">
      <h1>Code Debugger</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="language-input">Language:</label>
          <input
            id="language-input"
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="e.g., JavaScript, Python"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="code-input">Code:</label>
          <textarea
            id="code-input"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here"
            required
          />
        </div>
        <button 
          type="submit" 
          className="submit-button" 
          disabled={loading}
        >
          {loading ? "Debugging..." : "Submit"}
        </button>
      </form>

      <div className="result-container">
        <h2>Debug Result:</h2>
        {loading ? 
          <p className="loading-indicator">Analyzing your code...</p> : 
          debugResult && <pre>{debugResult}</pre>
        }
      </div>
    </div>
  );
};

export default App;