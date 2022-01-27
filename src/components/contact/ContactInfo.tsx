import TalkingDuck from '../general/TalkingDuck';
import './ContactInfo.css';

export default function ContactInfo() {
  return (
    <div className='info'>
      <TalkingDuck sentence='"You can also reach me at"'/>
      <span className='block'>danielmkhlv@gmail.com</span>
      <a href='https://github.com/dandeduck' className='block'>github.com/dandeduck</a>
      <span className='block'>+972 587976897</span>
    </div>
  );
}