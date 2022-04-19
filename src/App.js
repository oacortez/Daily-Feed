import './App.css';
import api from '../src/Components/apiCalls'
import {useState, useEffect} from "react"; 
import NavBar from './Components/navBar'

function App() {
const [result, setResult] = useState()

useEffect(() => {
  api()
    .then(data => console.log(data.results))
}, [])

  return (
    <div className="App">
      <NavBar />
    </div>
  )
}

export default App;
