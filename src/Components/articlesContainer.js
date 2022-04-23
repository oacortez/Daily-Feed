import Article from './Article'
import '../Styles/articleContainer.css'
import NavBar from './navBar';
import {useState, useEffect} from 'react';
import api from './apiCalls'


const ArticleContainer = () => {

const [results, setResults] = useState([]);
const [ currentArticles, setCurrentArticles ] = useState([]);

  useEffect(() => {
    api()
    .then(data => {
      setResults(data.results)
      setCurrentArticles(data.results)
    })
  }, [])

const articleDetails = results.map((article, index) => {
  return (
    <Article 
      key={index + 1}
      id={article.title}
      title={article.title}
      author={article.byline}
      image={article.multimedia[0].url}
    />
  )
})
console.log(results);
  return (
    <>
      <NavBar news={currentArticles} setFilter={setResults}/>
      <div className="articles-container">
        {articleDetails}
      </div>
    </>
  )
}

export default ArticleContainer;