import Page from './Page';
import WorkIntro from './pages/WorkIntro';
import './Work.css'

export default function Work() {
  return (
    <div className='work'>
      <Page html={<WorkIntro/>}/>
    </div>
  );
}
