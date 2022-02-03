import gsap from 'gsap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Experience from './Experience';
import duck from '../assets/test.jpg';
import './About.css';

export default function About() {
  useEffect(() => {
    gsap.fromTo('.about img',
    {
      opacity: 0
    },
    {
      opacity: 1
    }).delay(2.2);
    gsap.fromTo('.about-text',
    {
      opacity: 0,
      y: 200
    },
    {
      opacity: 1,
      y: 0
    }).delay(2.2);
  }, []);

  return (
    <div className='about'>
      <section>
        <div className='hello-container'>
          <h1 className='terminal-start'>&#62;</h1>
          <h1 className='hello'>Hi! I'm Daniel</h1>
          <h1 className='carret'>|</h1>
        </div>
        <div className='about-content'>
          <div className='about-text code-look'>
            <p>I've been developing software for more than 4 years, in many areas ranging from robotics to fullstack web development, where I am now.</p>
            <p>I have a strong passion for learning and developing new things.</p>
            <p>You can read my about my experience in specific fields by going to the <Link className='link' to={'/work'}>work</Link> page or just continue scrolling to see my work experience.</p>
          </div>
          <img src={duck} alt='myself'></img>
        </div>
      </section>
      <section className='cv code-look'>
        <h1>What do I know?</h1>
        <p><span className='know'>Languages: </span>Java 3 years, Python 3 years, Typescript/html/css 1 year, C/C++/C# 1 year</p>
        <p><span className='know'>Frameworks and libraries: </span>Angular 1 year, React 1 year, Express 1 year, NestJS 1 year, Pytorch 1 year</p>
        <p><span className='know'>DBs and technologies: </span>Linux 4 years, MongoDB 1 year, Redis 1 year, Node 1 year, Firebase 1 year</p>
        <h1>Where have I worked?</h1>
        <Experience company='israeli air force' title='fullstack developer' from={'April 2021'} to={'April 2022'} points={['Developed webapps in use by thousands of users', 'Integrate complex, multi interface and legacy programs', 'Used the MEAN stack with Azure for most projects']}/>
        <Experience company='israeli air force' title='fullstack developer' from={'April 2021'} to={'April 2022'} points={['Developed webapps in use by thousands of users', 'Integrate complex, multi interface and legacy programs', 'Used the MEAN stack with Azure for most projects']}/>
      </section>
    </div>
  );
}