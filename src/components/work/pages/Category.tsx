import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import LocationTeller from '../../general/LocationTeller';
import './Category.css';

export default function Category(props: {title: string, text: JSX.Element, projects: JSX.Element[]}) {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    // const element = ref.current;

    gsap.fromTo(
      document.querySelector(".game-development h1"),
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: document.querySelector(".game-development"),
          start: "top 60%",
          end: "top 10%",
          markers: true,
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    // const element = ref.current;

    gsap.fromTo(
      document.querySelector(".game-development-text"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: document.querySelector(".game-development"),
          start: "top 60%",
          end: "top 10%",
          markers: true,
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    // const element = ref.current;

    gsap.fromTo(
      document.querySelector(".location-teller"),
      {
        opacity: 0,
        x: 200
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: document.querySelector(".game-development"),
          start: "top 60%",
          end: "top 10%",
          markers: true,
          scrub: true
        }
      }
    );
  }, []);
  
  return (
    <div id='game development' className='game-development code-look' ref={ref}>
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