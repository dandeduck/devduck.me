import arrow from '../assets/arrowDown.svg';
import './Page.css';

export default function Page(props: {html :(JSX.Element), hasNext: boolean}) {
  return (
    <div className='page'>
      <div className='content'>
        {props.html}
        {props.hasNext ? <img src={arrow} alt='arrow down' className='arrow'></img> : <span></span>}
      </div>
    </div>
  );
}

Page.defaultProps = {
  hasNext: true
}