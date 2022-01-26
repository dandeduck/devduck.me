import Page from './Page';
import TableOfContents from './TableOfContents';
import Quote from '../general/Quote';
import './Work.css'

export default function Work() {
  return (
    <div className='work'>
      <Page html={<FirstPage/>}/>
      <Page html={<FirstPage/>} hasNext={false}/>
    </div>
  );
}

const FirstPage = () => {
  return (
    <div>
      <Quote sentence='Do or do not. There is no try.' source='Grand Master Yoda'/>
      <TableOfContents name='categories'/>
    </div>
  );
}