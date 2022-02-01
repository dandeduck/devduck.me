import { useEffect } from 'react';
import LocationTeller from '../../general/LocationTeller';
import gsap from 'gsap';
import './Category.css';

export default function Category(props: {title: string, text: JSX.Element, projects: JSX.Element[]}) {
  useEffect(() => {
    setupAnimations();
  }, []);
  
  return (
    <div className='category code-look'>
        <div className='category-container'>
          <div>
            <h1>{props.title}</h1>
            <div className='category-text'>{props.text}</div>
          </div>
          <LocationTeller locations={['start', 'game development', 'fullstack web', 'robotics']} currentLocation='game development'/>
        </div>
        <div className='category-projects'>
          {props.projects.map((project, i) => <div key={i}>{project}</div>)}
        </div>
    </div>
  );

  function setupAnimations() {
    gsap.fromTo('.category h1',
    {
      opacity: 0,
      x: -200
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.category',
        start: 'top 50%',
        end: 'top 20%',
        scrub: true
      }
    });
    gsap.fromTo('.category-text',
    {
      opacity: 0
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: '.category',
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
        trigger: '.category',
        start: 'top 50%',
        end: 'top 20%',
        scrub: true
      }
    });

    gsap.to('.category',
    {
      opacity: 0,
      scrollTrigger: {
        trigger: '.category',
        start: 'top top',
        end: 'top top',
        scrub: true
      }
    });
  }
}
