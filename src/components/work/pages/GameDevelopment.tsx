import Project from '../../general/Project';
import LocationTeller from '../../general/LocationTeller';
import './GameDevelopment.css';

export default function GameDevelopment() {
  return (
    <div id='game development' className='game-development code-look'>
      <div className='game-development-centered-container'>
          <h1>game development</h1>
          <div className='game-development-container'>
            <div className='game-development-main'>
              <p className='game-development-text'>I first began my game development journey by learning Unity through the internet, by then I already had a number of years of experience in software development in general.</p>
              <p className='game-development-text'>I got my <i>professional</i> experience by working on simulations and educational tools for the IAF.</p> 
              <p className='game-development-text'>In total, I have 1 year of experience with one <a href='https://github.com/dandeduck/asteroids-unlimited' className='link' target="_blank" rel="noreferrer">indie game</a> under development and one prototype game.</p>
              <div className='game-development-projects'>
                <Project name='asteroids UNLIMITED' link='https://github.com/dandeduck/asteroids-unlimited' description='A space themed RTS style game, with ship combat, building, movement and capturing mechanics. Developed with help in modeling and visual design by my friends.' technologies={['Unity', 'AI', 'Multiplayer']} />
                <Project name='savanna' link='https://github.com/dandeduck/savanna' description='Prototype project, developed to learn the ins and outs of the Unity game engine and different approaches to RPG mechanics. Like items, crafting, world generation and others.' technologies={['Unity', 'RPG Systems']} />
              </div>
            </div>
            <LocationTeller locations={['start', 'game development', 'web fullstack', 'robotics']} currentLocation='game development'/>
          </div>
      </div>
    </div>
  );
}