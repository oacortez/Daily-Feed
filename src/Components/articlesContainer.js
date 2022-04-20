import Article from './Article'
import api from './apiCalls';
import {useState, useEffect} from 'react'; 
import '../Styles/articleContainer.css'

const ArticleContainer = () => {

const [results, setResults] = useState([]);

useEffect(() => {
  api()
  .then(data => setResults(data.results))
}, [])

const articleDetails = results.map((article, index) => {
  console.log(article);
  return (
    <Article 
      key={index + 1}
      id={article.created_date}
      title={article.title}
      author={article.byline}
      image={article.multimedia[0].url}
    />
  )
})

  return (
    <div className="articles-container">
      {articleDetails}
    </div>
  )
}

export default ArticleContainer;