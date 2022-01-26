import icon from '../../assets/github.svg';
import './Project.css';

export default function Project(props: {name: string, link: string, description: string, technologies: string[]}) {
  return (
    <a href={props.link} className='project-link'>
      <div className='project-block'>
        <p className='project-name'>{props.name}<img className='project-icon' src={icon} alt='external link'></img></p>
        <p className='project-description'>{props.description}</p>
        {props.technologies.map(tech => <span className='project-technology'>{tech}</span>)}
      </div>
    </a>
  );
}