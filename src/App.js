import {useState, useEffect} from 'react'; 
import api from '../src/Components/apiCalls';
import NavBar from './Components/navBar';
import ArticleContainer from './Components/articlesContainer';
import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path='/'>
          <ArticleContainer />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
