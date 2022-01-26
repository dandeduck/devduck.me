import Page from './Page';
import Quote from '../general/Quote';
import './Work.css'

export default function Work() {
  return (
    <div className='work'>
      <Page html={<FirstPage/>}/>
      <Page html={<FirstPage/>}/>
      <Page html={<FirstPage/>}/>
    </div>
  );
}

const FirstPage = () => {
  return (
    <div>
      <Quote sentence='Do or do not. There is no try.' source='Grand Master Yoda'/>
    </div>
  );
}