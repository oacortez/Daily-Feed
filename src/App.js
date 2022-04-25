import { Route, Routes} from 'react-router-dom';
import './Styles/App.css';
import ArticleContainer from './Components/articlesContainer';
import SingleArticle from './Components/SingleArticle'
import NotFound from './Components/NotFound';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<ArticleContainer/>}/>
        <Route exact path='/:id' element={<SingleArticle />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App;
