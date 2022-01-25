import duck from '../assets/duck.svg';
import './TalkingDuck.css';

export default function ContactInfo(props: {sentence: string}) {
  return (
    <div className='speech'>
      <img src={duck} className='neonDuck talking-duck' alt="duck"/>
      <span className='block sentence'>{props.sentence}</span>
    </div>
  );
}