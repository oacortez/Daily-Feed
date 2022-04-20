import { NavLink } from 'react-router-dom';
import '../Styles/navBar.css';

const NavBar = () => {

  return (
    <nav>
      <NavLink to='/' className='home-link'>
        <button className='home-title'>
          The Daily Feed 
        </button>
      </NavLink>
    </nav>
  )
}

export default NavBar;


