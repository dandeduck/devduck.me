import WorkIntro from './pages/WorkIntro';
import GameDevelopment from './pages/GameDevelopment';
import './Work.css'
import { useEffect } from 'react';

export default function Work() {
  localStorage.getItem('work-scrollPosition') ?? localStorage.setItem('work-scrollPosition', '0');

  useEffect(() => {
    window.scrollTo(0, parseInt(localStorage.getItem('work-scrollPosition') ?? '0'));
    
    return () =>{
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  window.addEventListener('scroll', onScroll);

  return (
    <div className='work'>
      <WorkIntro/>
      <GameDevelopment/>
    </div>
  );
}

function onScroll(e: Event) {
  if (window.location.pathname == '/work' && document.documentElement.scrollTop - parseInt(localStorage.getItem('work-scrollPosition') ?? '0') < 100)
      localStorage.setItem('work-scrollPosition', document.documentElement.scrollTop.toString());
}
