import Page from './Page';
import WorkIntro from './pages/WorkIntro';
import OtherPage from './pages/OtherPage';
import './Work.css'

export default function Work() {
  return (
    <div className='work'>
      <Page html={<WorkIntro/>}/>
      <Page html={<OtherPage/>} hasNext={false}/>
    </div>
  );
}
