import { Link } from 'react-router-dom';
import duck from './duck.svg';
import './Header.css';

export default function Header() {
  return (
    <div className='navContainer'>
      <nav className='navbar'>
        <div className='duck'>
          <img src={duck} className='neonDuck' alt="duck"/>
        </div>
        <Link to={'/'} className='navbar-link underline'>about me</Link>
        <Link to={'/'} className='navbar-link underline'>daily</Link>
        <Link to={'/'} className='navbar-link underline'>my work</Link>
        <Link to={'/'} className='navbar-link underline'>contact</Link>
      </nav>
    </div>
  );
}
