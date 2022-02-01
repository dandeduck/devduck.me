import Project from '../../general/Project';
import Category from './Category';

export default function FullstackWeb() {
  const projects = [(
    <Project name='devduck.me' link='https://github.com/dandeduck/devduck.me' description='Personal portfolio and blog site, including blog creation and posting functionality and some cool scroll animation combined with three.js spice.' technologies={['React.js', 'Typescript', 'Three.js', 'Firebase']} />),
    (<Project name='IAF projects' link='https://github.com/Hupa-Baha-21' description="A collection of partially or fully open source projects we've worked on in the IAF." technologies={['Angular', 'Typescript', 'Express.js', 'Nest.js']} />),
    (<Project name='Package Tracking' link='https://github.com/dandeduck/package-tracking-web' description="A server rendered website built for a local shipping business, it was my first venture into front end development, using django, bootstrap and sql." technologies={['Django', 'Python', 'sqlite3', 'Bootstrap']} />)
  ];
    
  const text = (
    <div>
      <p>Initially I studied network communications, after which I wrote some simple socket servers in Python and Java for assignments and some small personal projects.</p>
      <p>Later on while working at the IAF, I transitioned into fullstack by learning and using front end frameworks like <i><b>Angular and React</b></i>, back end frameworks like <i><b>Express and NestJS</b></i>, databases like <i><b>MongoDB and Redis</b></i> and more.</p> 
      <p>All together I have 1+ years of professional development in full stack web development, and some smaller open source <a href='https://github.com/dandeduck' className='link'>projects</a>, including this very site.</p>
    </div>
  );

  return (
    <Category title='fullstack web' id='web' text={text} projects={projects}/>
  );
}