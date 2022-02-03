import gsap from 'gsap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      x: -300
    },
    {
      opacity: 1,
      x: 0
    }).delay(2.2);
  }, []);

  return (
    <div className='about'>
      <div className='hello-container'>
        <h1 className='terminal-start'>&#62;</h1>
        <h1 className='hello'>Hi! I'm Daniel</h1>
        <h1 className='carret'>|</h1>
      </div>
      <div className='about-content'>
        <div className='about-text code-look'>
          <p>I've been developing software for more than 4 years, in many areas ranging from robotics to fullstack web development, where I am now.</p>
          <p>I have a strong passion for learning and developing new things.</p>
          <p>You can read my detailed experience in specific fields by going to the <Link className='link' to={'/work'}>work</Link> page or just continue scrolling to see my work experience.</p>
        </div>
        <img src={duck} alt='my photo'></img>
      </div>
    </div>
  );
}