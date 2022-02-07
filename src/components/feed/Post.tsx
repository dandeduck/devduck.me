import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import './Post.css';

export default function Post(props : {markdown: string; project: string; projectLink: string, date: Date}) {
  return (
    <div className='post code-look'>
      <code className='date'>{PassedTimeString(props.date)}...</code>
      <code className='project'>[<a style={{opacity: 1}} className='link' href={props.projectLink} target="_blank" rel="noreferrer">{props.project}</a>]</code>
      <span className='markdown'><span className='console-start'><span className='post-user'>dandeduck@web</span>:<span className='post-dir'>~/dev</span>$</span><ReactMarkdown  remarkPlugins={[gfm]}>{props.markdown}</ReactMarkdown></span>
    </div>
  );
}

function PassedTimeString(postDate: Date) {
  let diff = (Date.now() - postDate.getTime()) / 1000;
  let units : string;

  if (diff < 60)
    units = "seconds";
  
  else if ((diff /= 60) < 60)
    units = "minutes";

  else if ((diff /= 60) < 60)
    units = "hours";
    
  else if ((diff /= 24) < 7)
    units = "days ago";
  
  else if ((diff /= 7) < 52)
    units = "weeks ";
  
  else {
    diff /= 52;
    units = "years";
  }

  return Math.floor(diff) + " " + units + " ago";
}
