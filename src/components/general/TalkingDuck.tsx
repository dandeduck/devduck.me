import duck from '../assets/duck.png';
import './TalkingDuck.css';

export default function ContactInfo(props: {sentence: string}) {
  return (
    <div className='speech'>
      <img src={duck} className='talking-duck' alt="duck"/>
      <span className='block sentence code-look '>{props.sentence}</span>
    </div>
  );
}