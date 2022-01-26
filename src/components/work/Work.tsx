import Page from './Page';
import TableOfContents from './TableOfContents';
import Quote from '../general/Quote';
import './Work.css'

export default function Work() {
  return (
    <div className='work'>
      <Page html={<FirstPage/>}/>
      <Page html={<GameDevelopment/>} hasNext={false}/>
    </div>
  );
}

const FirstPage = () => {
  return (
    <div id='first-page'>
      <Quote sentence='Do or do not. There is no try.' source='Grand Master Yoda'/>
      <div className='table-container'>
        <TableOfContents title='What would you like to see first' sections={['game development', 'web development', 'robotics', 'other']}/>
      </div>
    </div>
  );
}

const GameDevelopment = () => {
  return (
    <div id='game development'>
      <Quote sentence='Do or do not. There is no try.' source='Grand Master Yoda'/>
      <div className='table-container'>
        <TableOfContents title='What would you like to see first' sections={['game development', 'web development', 'robotics', 'other']}/>
      </div>
    </div>
  );
}
