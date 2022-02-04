import gsap from 'gsap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Experience from './Experience';
import duck from '../assets/test.jpg';
import arrow from '../assets/arrowDown.svg';
import './About.css';

export default function About() {
  useEffect(() => {
    introAnimations();

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
            <p>You can read about my experience in specific fields by going to the <Link className='link' to={'/work'}>work</Link> page or just continue scrolling.</p>
          </div>
          <img src={duck} alt='myself'></img>
        </div>
        <img src={arrow} alt='scroll' className='arrow'></img>
      </section>
      <section className='cv code-look'>
        <h1>Skills</h1>
        <p><span className='know'>Languages: </span>Java 3 years, Python 3 years, Typescript/html/css 1 year, C/C++/C# 1 year</p>
        <p><span className='know'>Frameworks and libraries: </span>Angular 1 year, React 1 year, Express 1 year, NestJS 1 year, Pytorch 1 year</p>
        <p><span className='know'>DBs and technologies: </span>Linux 4 years, MongoDB 1 year, Redis 1 year, Node 1 year, Firebase 1 year</p>
        <h1>Experience</h1>
        <Experience company='israeli air force' title='fullstack developer' from={'April 2021'} to={'April 2022'} points={['Developed webapps in use by thousands of users', 'Integrate complex, multi interface and legacy programs', 'Used the MEAN stack with Azure for most projects']}/>
        <Experience company='FRC team' title='lead programmer' from={'July 2017'} to={'July 2020'} points={['Led a team of 6 developers, from teaching and mentoring to reviewing and delegating tasks', 'Worked on complex systems as part of a large 60kg robot', 'Created and contributed to many open source projects in Java', 'Setup an efficient and organized workflow to maximise productivity']}/>
        <h1>Education</h1>
        <Experience company='ort rabin' title='computer science diploma' from={'September 2017'} to={'July 2020'} points={[]}/>
        <h1>Volunteering</h1>
        <Experience company='FRC teams' title='programming mentor' from={'July 2020'} to={'Present'} points={['Helping teams with automation and complex control loops, including vision processing', 'Contributing to some related open source projects in Java']}/>
        <h1>Projects</h1>
        <Experience company='Asteroids UNLIMITED' title='game developer' from={'December 2021'} to={'Present'} points={['Space themed RTS style game, developed in Unity using C#', 'Implemented all the main systems, such as combat, movement, capturing and so on']}/>
        <Experience company='This site' title='Front end developer' from={'January 2022'} to={'February 2022'} points={['Built using React, including Three.js, Firebase and gsap']}/>
        <Experience company='Flash 2020' title='Lead developer' from={'January 2020'} to={'March 2020'} points={['Code for the 2020 Flash FRC robot', 'Implemented autonomous movement with ball shooting using vision processing and speed interpolation', 'Collaborated with many other developers on the main systems of the robot']}/>
        <h2>To see more of my projects: go to</h2> <Link to={'/work'} className='link'>my work</Link> <h2>or</h2> <a href='https://github.com/dandeduck' className='link'>my github</a>
        <div><h2>For my CV: <Link to="/logo192.png" className='link' target="_blank" download>download</Link></h2></div>
      </section>
    </div>
  );

  function introAnimations() {
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
  }
}