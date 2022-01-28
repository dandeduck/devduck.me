import './LocationTeller.css';

export default function LocationTeller(props: {locations: string[], currentLocation: string}) {
  const onClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: "start"});
  };

  return (
    <div className='location-teller'>
      {props.locations.map(location => <a href='/' onClick={e => onClick(e, location)}>{props.currentLocation == location ? <span>_</span> : <span></span>}{location}</a>)}
    </div>
  );
}