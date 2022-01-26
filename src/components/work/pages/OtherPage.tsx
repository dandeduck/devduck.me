import Project from './Project';
import './OtherPage.css';

export default function OtherPage() {
  return (
    <div id='other'>
      <h1 className='other-heading'>Other random things I've worked on</h1>
      <div className='projects'>
        <Project name='Asteroids UNLIMITED' link='https://github.com/dandeduck/asteroids-unlimited' description='Space themed RTS, initially developed for a game jam.' technologies={['Unity', 'firebase', 'test']}/>
        <Project name='Asteroids UNLIMITED' link='https://github.com/dandeduck/asteroids-unlimited' description='Space themed RTS, initially developed for a game jam.' technologies={['Unreal', 'react', 'Next.js']}/>
        <Project name='Asteroids UNLIMITED' link='https://github.com/dandeduck/asteroids-unlimited' description='Space themed RTS, initially developed for a game jam.' technologies={['Angular', 'firebase']}/>
        <Project name='Asteroids UNLIMITED' link='https://github.com/dandeduck/asteroids-unlimited' description='Space themed RTS, initially developed for a game jam.' technologies={['Vue']}/>
      </div>
    </div>
  );
}