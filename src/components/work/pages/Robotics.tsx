import Project from '../../general/Project';
import Category from './Category';

export default function Robotics() {
  const projects = [(
    <Project name='Tracer' link='https://github.com/Flash3388/Tracer' description='My motion profiling library, originally built to help my team create complicated autonomous motion paths for the robot.' technologies={['Java', 'Motion Profiling', 'Control Loops']} />),
    (<Project name='Flash 2020' link='https://github.com/Flash3388/Flash2020' description='Code for the 2020 FRC robot. Which included a turret that has to autonomously align itself and shoot at a hight target using image processing on a separate board.' technologies={['Java', 'PID', 'Interpolation', 'Autonomous']} />),
    (<Project name='FlashLib and others' link='https://github.com/Flash3388/FlashLib' description='I had many contributions to this and other libraries under the Flash 3388 org on github.' technologies={['Java']} />)
  ];
    
  const text = (
    <div>
      <p>I love robotics &#60;3, software and hardware, be it in FRC, with an Arduino or a Raspberry pi. I've been a member in an FRC team for 3 years, 2of them as the lead programmer.</p>
      <p>During that time I contributed and created numerous open source projects, and earned a couple of awards. For robot automation in 2019 and innovation in control in 2020.</p> 
      <p>Since then I've been volunteering as mentor in some teams, building small Arduino projects and contributing to open source projects here and <a href='https://github.com/Flash3388' className='link'>there</a>.</p>
    </div>
  );

  return (
    <Category title='robotics' id='robotics' text={text} projects={projects}/>
  );
}