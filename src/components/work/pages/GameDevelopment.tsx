import Project from '../../general/Project';
import Category from './Category';

export default function GameDevelopment() {
  const projects = [(
    <Project name='asteroids UNLIMITED' link='https://github.com/dandeduck/asteroids-unlimited' description='A space themed RTS style game, with ship combat, building, movement and capturing mechanics. Developed with help in modeling and visual design by my friends.' technologies={['Unity', 'AI', 'Multiplayer']} />),
    (<Project name='savanna' link='https://github.com/dandeduck/savanna' description='Prototype project, developed to learn the ins and outs of the Unity game engine and different approaches to RPG mechanics. Like items, crafting, world generation and others.' technologies={['Unity', 'RPG Systems']} />)
  ];
    
  const text = (
    <div>
      <p>I first began my game development journey by learning Unity through the internet, by then I already had a number of years of experience in software development in general.</p>
      <p>I got my <i>professional</i> experience by working on simulations and educational tools for the IAF.</p> 
      <p>In total, I have 1 year of experience with one <a href='https://github.com/dandeduck/asteroids-unlimited' className='link' target="_blank" rel="noreferrer">indie game</a> under development and one prototype game.</p>
    </div>
  );

  return (
    <Category title='game development' text={text} projects={projects}/>
  );
}