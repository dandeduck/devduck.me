import { useEffect } from 'react';
import LocationTeller from '../../general/LocationTeller';
import gsap from 'gsap';
import './Category.css';

export default function Category(props: {title: string, text: JSX.Element, projects: JSX.Element[]}) {
  useEffect(() => {
    setupAnimations();
  }, []);
  
  return (
    <div id='game development' className='game-development code-look'>
      <div>
        <h1>{props.title}</h1>
        <div className='game-development-container'>
          <div className='game-development-main'>
            <div className='game-development-text'>
              {props.text}
            </div>
          </div>
          <LocationTeller locations={['start', 'game development', 'web fullstack', 'robotics']} currentLocation='game development'/>
        </div>
        <div className='game-development-projects'>
          {props.projects.map((project, i) => <div key={i}>{project}</div>)}
        </div>
      </div>
    </div>
  );

  function setupAnimations() {
    gsap.fromTo('.game-development h1',
    {
      opacity: 0,
      x: -200
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.game-development',
        start: 'top 50%',
        end: 'top 20%',
        scrub: true
      }
    });
    gsap.fromTo('.game-development-text',
    {
      opacity: 0
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: '.game-development',
        start: 'top 50%',
        end: 'top 20%',
        scrub: true
      }
    });
    gsap.fromTo('.location-teller',
    {
      opacity: 0,
      x: 200
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.game-development',
        start: 'top 50%',
        end: 'top 20%',
        scrub: true
      }
    });

    gsap.to('.game-development',
    {
      opacity: 0,
      scrollTrigger: {
        trigger: '.game-development',
        start: 'top top',
        end: 'top top',
        scrub: true
      }
    });
  }
}
