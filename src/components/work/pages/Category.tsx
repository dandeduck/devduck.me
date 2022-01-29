import LocationTeller from '../../general/LocationTeller';
import ScrollAnimation from 'react-animate-on-scroll';
import './Category.css';

export default function Category(props: {title: string, text: JSX.Element, projects: JSX.Element[]}) {
  return (
    <div id='game development' className='game-development code-look'>
      <div className='game-development-centered-container'>
        <ScrollAnimation animateIn="slideIn">
          <h1>{props.title}</h1>
        </ScrollAnimation>
          <div className='game-development-container'>
            <div className='game-development-main'>
              <div className='game-development-text'>
                {props.text}
              </div>
              <div className='game-development-projects'>
                {props.projects.map((project, i) => <div key={i}>{project}</div>)}
              </div>
            </div>
            <LocationTeller locations={['start', 'game development', 'web fullstack', 'robotics']} currentLocation='game development'/>
          </div>
      </div>
    </div>
  );
}