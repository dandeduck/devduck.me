import { Link } from 'react-router-dom';
import duck from '../assets/duck1.png';

import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navContainer code-look'>
      <nav className='navbar'>
        <div className='duck'>
          <img src={duck} className='neonDuck' alt="duck"/>
        </div>
        <Link to={'/'} className='navbar-link underline'>about-me.txt</Link>
        <Link to={'/'} className='navbar-link underline'>daily.sh</Link>
        <Link to={'/work'} className='navbar-link underline'>"my work".exe</Link>
        <Link to={'/contact'} className='navbar-link underline'>contact.html</Link>
      </nav>
    </div>
  );
}
