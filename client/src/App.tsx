import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");


  useEffect(() => {
    const fetchMessage = async () => {
        const res = await fetch("./helloreactmessage");
        const json = await res.json();
        setMessage(json.message);
    };
    fetchMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p onClick={handleClick}>
          {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  function handleClick(){
    console.log("Clicked!");
  }
}

export default App;
