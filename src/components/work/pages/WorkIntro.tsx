import TableOfContents from '../TableOfContents';
import Quote from '../../general/Quote';

export default function WorkIntro() {
  return (
    <div id='start'>
      <Quote sentence='Do or do not. There is no try.' source='Grand Master Yoda'/>
      <TableOfContents title='What would you like to see first?' sections={['game development', 'web fullstack', 'robotics']}/>
    </div>
  );
}