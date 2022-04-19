import logo from './logo.svg';
import './App.css';
import api from './apiCalls'
import {react, useState, useEffect} from "react"; 

function App() {
const [result, setResult] = useState()

useEffect(() => {
  api()
    .then(data => console.log(data.results))
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
