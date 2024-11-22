import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  {
    const [message, setMessage] = useState('');
  
    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);
  
    return (
        <div>
            <h1>React + Vite + Node.js</h1>
            <p>{message}</p>
        </div>
    );
  }
}



export default App;
