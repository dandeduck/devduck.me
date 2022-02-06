import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <a href='https://github.com/dandeduck' target="_blank" rel="noreferrer" className='link'>my github</a>
        <span>© 2022 dandeduck</span>
        <a href='https://github.com/dandeduck/devduck.me' target="_blank" rel="noreferrer" className='link'>this site's project</a>
      </div>
    </footer>
  );
}