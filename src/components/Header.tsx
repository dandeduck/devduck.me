import duck from './duck.svg';
import './Header.css';

export default function Header() {
  return (
    <header className='Header'>
      <a className='Header-link yelloNeon' href='/'>about me</a>
      <a href='/'>
        <img src={duck} className='neonDuck' alt="duck"/>
      </a>
      <a className='Header-link purpleNeon' href='/'>my work</a>
      <a className='Header-link brokenNeon' href='/'>contact</a>
    </header>
  );
}
