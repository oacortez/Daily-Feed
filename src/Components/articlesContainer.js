import Article from './Article'
import api from './apiCalls';
import {useState, useEffect} from 'react'; 


const ArticleContainer = () => {

const [results, setResults] = useState([]);

useEffect(() => {
  api()
  .then(data => setResults(data.results))
}, [])

const articleDetails = results.map((article, index) => {
  return (
    <Article 
      key={index + 1}
      title={article.title}
    />
  )
})

  return (
    <div>
      {articleDetails}
    </div>
  )
}

export default ArticleContainer;