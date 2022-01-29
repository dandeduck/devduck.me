import Project from '../../general/Project';
import LocationTeller from '../../general/LocationTeller';
import './GameDevelopment.css';

export default function GameDevelopment() {
  return (
    <div id='game development' className='game-development code-look'>
      <h1>game development</h1>
      <div className='game-development-container'>
        <div className='game-development-main'>
          <p className='game-development-text'>I first began my game development journey by learning Unity through the internet, by then I already had a number of years of experience in software development in general.</p>
          <p className='game-development-text'>I got my <i>professional</i> experience by working on simulations and educational tools for the IAF.</p> 
          <p className='game-development-text'>In total, I have 1 year of experience with one <a href='https://github.com/dandeduck/asteroids-unlimited' className='link' target="_blank" rel="noreferrer">indie game</a> under development and one prototype game.</p>
          <div className='game-development-projects'>
            <Project name='asteroids UNLIMITED' link='https://github.com/dandeduck/asteroids-unlimited' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis dictum magna ut mattis. Nulla facilisi. Morbi ut neque orci. Suspendisse tortor metus, su' technologies={['Unity', 'AI', 'Multiplayer']} />
            <Project name='savanna' link='https://github.com/dandeduck/savanna' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis dictum magna ut mattis. Nulla facilisi. Morbi ut neque orci. Suspendisse tortor metus, su' technologies={['Unity', 'RPG Systems']} />
          </div>
        </div>
        <LocationTeller locations={['start', 'game development', 'web development', 'robotics']} currentLocation='game development'/>
      </div>
    </div>
  );
}