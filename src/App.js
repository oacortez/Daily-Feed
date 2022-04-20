import {useState, useEffect} from 'react'; 
import NavBar from './Components/navBar';
import ArticleContainer from './Components/articlesContainer';
import { Route, Routes} from 'react-router-dom';
import './Styles/App.css';

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ArticleContainer/>}/>
      </Routes>
    </div>
  )
}

export default App;
