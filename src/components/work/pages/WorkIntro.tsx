import TableOfContents from '../TableOfContents';
import Quote from '../../general/Quote';

export default function WorkIntro() {
  return (
    <div id='first-page'>
      <Quote sentence='Do or do not. There is no try.' source='Grand Master Yoda'/>
      <div className='table-container'>
        <TableOfContents title='What would you like to see first' sections={['game development', 'web development', 'robotics']}/>
      </div>
    </div>
  );
}