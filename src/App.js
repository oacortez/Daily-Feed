import {useState, useEffect} from 'react'; 
import api from '../src/Components/apiCalls';
import NavBar from './Components/navBar';
import ArticleContainer from './Components/articlesContainer';
import { Route, Routes} from 'react-router-dom';
import './Styles/App.css';


function App() {
const [result, setResult] = useState()

useEffect(() => {
  api()
    .then(data => console.log(data.results))
}, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ArticleContainer />}/>
      </Routes>
    </div>
  )
}

export default App;
