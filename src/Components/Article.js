const Article = ({title, author, image}) => {
  return (
    <div className='Cards'>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <img src={image} alt='News article image'/>
    </div>
  )
}

export default Article;