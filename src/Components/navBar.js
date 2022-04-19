import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav>
      <NavLink to='/'>
        <button>
          You are in home
        </button>
      </NavLink>
    </nav>
  )
}

export default NavBar;


