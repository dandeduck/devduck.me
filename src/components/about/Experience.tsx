import './Experience.css';

export default function Experience(props: {company: string, title: string, from: string, to: string, points: string[]}) {
  return (
    <div className='experience code-look'>
      <h3>{props.from} - {props.to}</h3>
      <h2 className='company'>{props.company} </h2> <h2 className='position'> — {props.title}</h2>
      <ul>
        {props.points.map(point => <li>{point}</li>)}
      </ul>
    </div>
  );
}