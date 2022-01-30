import { useEffect } from 'react';
import animateElement from '../../general/Animation';
import LocationTeller from '../../general/LocationTeller';
import './Category.css';

export default function Category(props: {title: string, text: JSX.Element, projects: JSX.Element[]}) {
  useEffect(() => {
    animateElement('.game-development h1', ".game-development",
    {
      opacity: 0,
      x: -200
    },
    {
      opacity: 1,
      x: 0
    });
    animateElement('.game-development-text', ".game-development",
    {
      opacity: 0
    },
    {
      opacity: 1
    });
    animateElement('.location-teller', ".game-development",
    {
      opacity: 0,
      x: 200
    },
    {
      opacity: 1,
      x: 0
    });
    animateElement('.game-development', ".game-development",
    {
      opacity: 1
    },
    {
      opacity: 0
    }, "top top", "top top");
  }, []);
  
  return (
    <div id='game development' className='game-development code-look'>
      <div className='game-development-centered-container'>
          <h1>{props.title}</h1>
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
