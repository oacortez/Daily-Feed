import '../Styles/Article.css';
import { Link } from 'react-router-dom';

const Article = ({title, author, image, id}) => {
  return (
    <div className='cards'>
      {console.log(id)}
      <h1>{title}</h1>
      <img src={image} alt='News article image'/>
      <h2>{author}</h2>
      <Link to={`/${id}`}>
        <button>View article</button>
      </Link>
    </div>
  )
}

export default Article;