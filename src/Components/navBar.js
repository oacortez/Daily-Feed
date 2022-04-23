import { NavLink } from 'react-router-dom';
import '../Styles/navBar.css';
import React, { useState, useEffect } from 'react'

const NavBar = ({news, setFilter}) => {

const [dropdown, setDropdown] = useState([]);

useEffect(() => {
  const sections = [];
  news.forEach(article => {
    !sections.includes(article.section) && sections.push(article.section)
  })
  setDropdown(sections)
}, [news])

const options = () => {
  return dropdown.map(tag => {
    return (
      <option key={tag} value={tag}>{tag}</option>
    )
  })
}

const filterArticles = (event) => {
  if(event.target.value === "all") {
    setFilter(news)
  } else {
    setFilter(news.filter(article => {
      return article.section === event.target.value
    }))
  }
}

  return (
    <nav>
      <NavLink to='/' className='home-link'>
        <button className='home-title'>
          The Daily Feed 
        </button>
      </NavLink>
      <select
        className="section-select"
        defaultValue="all"
        onChange={event => filterArticles(event)
      }>
        <option value="all">All Stories</option>
        { options() }
      </select>
    </nav>
  )
}

export default NavBar;


