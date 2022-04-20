import '../Styles/Article.css'

const Article = ({title, author, image}) => {
  return (
    <div className='cards'>
      <h1>{title}</h1>
      <img src={image} alt='News article image'/>
      <h2>{author}</h2>
    </div>
  )
}

export default Article;