import Quote from '../../general/Quote';
import arrow from '../../assets/arrowDown.svg';
import './WorkIntro.css';

export default function WorkIntro() {
  return (
    <div id='start'>
      <div className='work-intro-container'>
        <Quote sentence='Do or do not. There is no try.' source='Grand Master Yoda'/>
      </div>
      <img src={arrow} alt='down'></img>
    </div>
  );
}