import './LocationTeller.css';

export default function LocationTeller(props: {locations: string[], currentLocation: string}) {
  return (
    <div className='location-teller'>
      {props.locations.map((location, i) => <span key={i} className={props.currentLocation === location ? 'selected' : 'unselected'}>{location}</span>)}
    </div>
  );
}