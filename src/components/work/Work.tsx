import WorkIntro from './pages/WorkIntro';
import GameDevelopment from './pages/GameDevelopment';
import './Work.css'

export default function Work() {
  return (
    <div className='work'>
      <WorkIntro/>
      <GameDevelopment/>
    </div>
  );
}
