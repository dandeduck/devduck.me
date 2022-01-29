import TableOfContents from '../TableOfContents';
import Quote from '../../general/Quote';
import arrow from '../../assets/arrowDown.svg';
import './WorkIntro.css';

export default function WorkIntro() {
  return (
    <div id='start'>
      <div className='work-intro-container'>
        <Quote sentence='Do or do not. There is no try.' source='Grand Master Yoda'/>
        <TableOfContents title='What would you like to see first?' sections={['game development', 'web fullstack', 'robotics']}/>
      </div>
      <img src={arrow} alt='down'></img>
    </div>
  );
}