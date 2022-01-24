import duck from './duck.svg';
import './Header.css';

export default function Header() {
  return (
    <div className='navContainer'>
      <nav className='Header'>
        <a href='/'>
          <img src={duck} className='neonDuck' alt="duck"/>
        </a>
        <a className='Header-link underline' href='/'>about me</a>
        <a className='Header-link underline' href='/'>daily</a>
        <a className='Header-link underline' href='/'>my work</a>
        <a className='Header-link underline' href='/'>contact</a>
      </nav>
    </div>
  );
}
