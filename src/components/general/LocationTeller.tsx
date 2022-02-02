import { Link } from 'react-scroll';
import './LocationTeller.css';

export default function LocationTeller(props: {locations: string[], ids: string[], currentLocation: string}) {
  // const onClick = (e: Event, id: string) => {
  //   e.preventDefault();
  //   document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: "start"});
  // };

  // const links = document.querySelectorAll('.location-teller a');

  // for (let i = 0; i < links.length; i++) {
  //   const element = links[i] as HTMLElement;
  //   element.addEventListener('click', event => onClick(event, props.ids[i%props.ids.length]));
  // }
  

  return (
    <div className='location-teller'>
      {props.locations.map((location, i) => <Link key={i} to={props.ids[i]} smooth={true} offset={location === 'start' ?  -110 : 0} className={props.currentLocation === location ? 'selected' : 'unselected'}>{location}</Link>)}
    </div>
  );
}