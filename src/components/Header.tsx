import duck from './duck.svg';
import './Header.css';

export default function Header() {
  return (
    <header className='Header'>
      <a href='/'>
        <img src={duck} className='neonDuck' alt="duck"/>
      </a>
      <div className='heading'>
        <a className='Header-link' href='/'>about me</a>
        <span className='underline'></span>
      </div>
      <div className='heading'>
        <a className='Header-link' href='/'>daily</a>
        <span className='underline'></span>
      </div>
      <div className='heading'>
        <a className='Header-link' href='/'>my work</a>
        <span className='underline'></span>
      </div>
      <div className='heading'>
        <a className='Header-link' href='/'>contact</a>
        <span className='underline'></span>
      </div>
    </header>
  );
}
