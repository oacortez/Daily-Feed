import Article from './Article'
import '../Styles/articleContainer.css'
import NavBar from './navBar';
import {useState, useEffect} from 'react';
import api from './apiCalls'

const ArticleContainer = () => {

const [allArticles, setAllArticles] = useState([]);
const [ filterArticles, setFilterArticles ] = useState([]);

  useEffect(() => {
    api()
    .then(data => {
      setAllArticles(data.results);
      setFilterArticles(data.results);
    })
  }, []);

const articleDetails = allArticles.map((article, index) => {
  return (
    <Article 
      key={index + 1}
      id={article.title}
      title={article.title}
      author={article.byline}
      image={article.multimedia[0].url}
    />
  );
});

  return (
    <>
      <NavBar news={filterArticles} setFilter={setAllArticles}/>
      <div className="articles-container">
        {articleDetails}
      </div>
    </>
  )
}

export default ArticleContainer;