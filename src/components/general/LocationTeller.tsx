import { Link } from 'react-scroll';
import './LocationTeller.css';

export default function LocationTeller(props: {locations: string[], ids: string[], currentLocation: string}) {
  return (
    <div className='location-teller'>
      {props.locations.map((location, i) => <Link key={i} to={props.ids[i]} smooth={true} offset={location === 'start' ?  -110 : 0} className={props.currentLocation === location ? 'selected' : 'unselected'}>{location}</Link>)}
    </div>
  );
}