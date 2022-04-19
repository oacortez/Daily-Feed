import './Styles/App.css';
import api from '../src/Components/apiCalls'
import {useState, useEffect} from 'react'; 
import NavBar from './Components/navBar'
import ArticleContainer from './Components/articlesContainer'

function App() {
const [result, setResult] = useState()

useEffect(() => {
  api()
    .then(data => console.log(data.results))
}, [])

  return (
    <div className="App">
      <NavBar />
      <ArticleContainer />
    </div>
  )
}

export default App;
