import Project from '../../general/Project';
import Category from './Category';

export default function FullstackWeb() {
  const projects = [(
    <Project name='asteroids UNLIMITED' link='https://github.com/dandeduck/asteroids-unlimited' description='A space themed RTS style game, with ship combat, building, movement and capturing mechanics. Developed with help in modeling and visual design by my friends.' technologies={['Unity', 'AI', 'Multiplayer']} />),
    (<Project name='savanna' link='https://github.com/dandeduck/savanna' description='Prototype project, developed to learn the ins and outs of the Unity game engine and different approaches to RPG mechanics. Like items, crafting, world generation and others.' technologies={['Unity', 'RPG Systems']} />)
  ];
    
  const text = (
    <div>
      <p>Initially I studied network communications, after which I wrote some simple socket servers in Python and Java for assignments and some small personal projects.</p>
      <p>Later on while working at the IAF, I transitioned into fullstack starting from <i><b>Django</b></i> and then by learning and using front end framework like <i><b>Angular and React</b></i> and back end frameworks like <i><b>Express and NestJS</b></i>.</p> 
      <p>All together I have 1+ years of professional development in full stack web development, and some smaller open source projects, including this very site.</p>
    </div>
  );

  return (
    <Category title='fullstack web' id='web' text={text} projects={projects}/>
  );
}