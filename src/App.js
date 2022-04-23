import NavBar from './Components/navBar';
import ArticleContainer from './Components/articlesContainer';
import SingleArticle from './Components/SingleArticle'
import { Route, Routes} from 'react-router-dom';
import './Styles/App.css';
import api from './Components/apiCalls'
import {useState, useEffect} from 'react';

const App = () => {

// const [results, setResults] = useState([]);
// const [ currentArticles, setCurrentArticles ] = useState([]);

//   useEffect(() => {
//     api()
//     .then(data => {
//       setResults(data.results)
//       setCurrentArticles(data.results)
//     })
//   }, [])
  // console.log(results[0]);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route exact path='/' element={<ArticleContainer/>}/>
        <Route exact path='/:id' element={<SingleArticle />}/>
      </Routes>
    </div>
  )
}

export default App;
