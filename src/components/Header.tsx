import duck from './duck.svg';
import './Header.css';

export default function Header() {
  return (
    <header className='Header'>
      <a href='/'>
        <img src={duck} className='neonDuck' alt="duck"/>
      </a>
      <a className='Header-link' href='/'>about me</a>
      <a className='Header-link' href='/'>daily</a>
      <a className='Header-link' href='/'>my work</a>
      <a className='Header-link' href='/'>contact</a>
    </header>
  );
}
