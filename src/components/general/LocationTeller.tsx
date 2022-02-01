import './LocationTeller.css';

export default function LocationTeller(props: {locations: string[], currentLocation: string}) {
  const onClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: "start"});
  };

  return (
    <div className='location-teller'>
      {props.locations.map((location, i) => <span key={i} className={props.currentLocation === location ? 'selected' : 'unselected'}>{location}</span>)}
    </div>
  );
}