import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { API_URL } from './constants';

function App() {
  let [welcomeText, setWelcomeText] = useState("");

  async function getHelloText() {
    let res = await fetch(`${API_URL}/text`);
    let text = await res.text();
    setWelcomeText(text);
  }

  useEffect(() => {
    getHelloText()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{welcomeText}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}

export default App;
