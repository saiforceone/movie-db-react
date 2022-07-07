import {Link} from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__link" to={'/'}>Movies</Link>
      <Link className="navbar__link" to={'/liked'}>Liked Movies</Link>
    </div>
  );
};
