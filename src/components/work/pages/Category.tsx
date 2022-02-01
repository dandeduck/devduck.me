import { useEffect } from 'react';
import LocationTeller from '../../general/LocationTeller';
import gsap from 'gsap';
import './Category.css';

export default function Category(props: {title: string, id: string, text: JSX.Element, projects: JSX.Element[]}) {
  useEffect(() => {
    setupAnimations(props.id);
  }, [props.id]);
  
  return (
    <div id={props.id} className='category code-look'>
        <div className='category-container'>
          <div>
            <h1>{props.title}</h1>
            <div className='category-text'>{props.text}</div>
          </div>
          <LocationTeller locations={['start', 'game development', 'fullstack web', 'robotics']} ids={['start', 'game', 'web', 'robotics']} currentLocation='game development'/>
        </div>
        <div className='category-projects'>
          {props.projects.map((project, i) => <div key={i}>{project}</div>)}
        </div>
    </div>
  );

  function setupAnimations(id: string) {
    gsap.fromTo(`#${id} h1`,
    {
      opacity: 0,
      x: -200
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: `#${id}`,
        start: 'top 50%',
        end: 'top 20%',
        scrub: true
      }
    });
    gsap.fromTo(`#${id} .category-text`,
    {
      opacity: 0
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: `#${id}`,
        start: 'top 50%',
        end: 'top 20%',
        scrub: true
      }
    });
    gsap.fromTo(`#${id} .location-teller`,
    {
      opacity: 0,
      x: 200
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: `#${id}`,
        start: 'top 50%',
        end: 'top 20%',
        scrub: true
      }
    });

    gsap.to(`#${id}`,
    {
      opacity: 0,
      scrollTrigger: {
        trigger: `#${id}`,
        start: 'top top',
        end: 'top top',
        scrub: true
      }
    });
  }
}
