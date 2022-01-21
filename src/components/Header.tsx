import duck from './duck.svg';
import './Header.css';

export default function Header() {
  return (
    <header className='Header'>
      <a className='Header-link yelloNeon disabled' aria-disabled>about me</a>
      <a aria-disabled className='disabled'>
        <img src={duck} className='neonDuck' alt="duck"/>
      </a>
      <a className='Header-link purpleNeon' href='\'>daily</a>
      <a className='Header-link brokenNeon disabled' aria-disabled>my work</a>
    </header>
  );
}
