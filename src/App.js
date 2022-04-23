import { Route, Routes} from 'react-router-dom';
import './Styles/App.css';
import ArticleContainer from './Components/articlesContainer';
import SingleArticle from './Components/SingleArticle'

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<ArticleContainer/>}/>
        <Route exact path='/:id' element={<SingleArticle />}/>
      </Routes>
    </div>
  )
}

export default App;
