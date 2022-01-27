import github from '../../assets/github.svg';
import './Project.css';

export default function Project(props: {name: string, link: string, description: string, technologies: string[]}) {
  return (
    <a href={props.link} className='project-link' target="_blank" rel="noreferrer">
      <div className='project-block code-look'>
        <p className='project-name'>{props.name}<img className='project-icon' src={github} alt='external link'></img></p>
        <p className='project-description'>{props.description}</p>
        <div className='project-technologies'>{props.technologies.map(tech => <span className='project-technology'>{tech}</span>)}</div>
      </div>
    </a>
  );
}