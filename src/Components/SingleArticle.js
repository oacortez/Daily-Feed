import api from './apiCalls';
import {useState, useEffect} from 'react'; 
import { useParams, Link} from 'react-router-dom';
import '../Styles/SingleArticle.css';

const SingleArticle = () => {
  const [ article, setArticle ] = useState({})
  const { id } = useParams()

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
      <img src={ article.multimedia && article.multimedia[0].url}  className="single-card-image" alt={article.abstract}/>
      <h2>{article.abstract}</h2>
      <a href={article.url}>Click here to read full article</a>
      <Link className="link" to="/">Return Home</Link>
    </div>
  )
}

export default SingleArticle;