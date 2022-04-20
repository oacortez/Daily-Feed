import NavBar from './Components/navBar';
import ArticleContainer from './Components/articlesContainer';
import SingleArticle from './Components/SingleArticle'
import { Route, Routes} from 'react-router-dom';
import './Styles/App.css';

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ArticleContainer/>}/>
        <Route exact path='/:id' element={<SingleArticle />}/>
      </Routes>
    </div>
  )
}

export default App;
