import duck from './duck.svg';
import './Header.css';

export default function Header() {
  return (
    <div className='navContainer'>
      <nav className='navbar'>
        <div className='duck'>
          <img src={duck} className='neonDuck' alt="duck"/>
        </div>
        <a className='navbar-link underline' href='/'>about me</a>
        <a className='navbar-link underline' href='/'>daily</a>
        <a className='navbar-link underline' href='/'>my work</a>
        <a className='navbar-link underline' href='/'>contact</a>
      </nav>
    </div>
  );
}
