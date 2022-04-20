import api from './apiCalls';
import {useState, useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import '../Styles/SingleArticle.css';

const SingleArticle = () => {
  const [ article, setArticle ] = useState({})
  const { id } = useParams()
  console.log(article);

  useEffect(() => {
    api()
    .then(data => {
      const currentArticle = data.results.find(post => {
        return post.title.includes(id)
      })
      setArticle(currentArticle)
    })
  }, [])

  return (
    <div className="single-card-container">
      <h1>{article.title}</h1>
      <img src={ article.multimedia && article.multimedia[0].url} alt={article.abstract}/>
      <h2>{article.abstract}</h2>
      <a href={article.url}>Go to NY Times article</a>
    </div>
  )
}

export default SingleArticle;