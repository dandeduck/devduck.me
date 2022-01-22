import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import './Post.css';

export default function Post(props : {markdown: string; project: string}) {
  return (
    <div className='Post'>
      <a className='project' href={props.project}><code>{props.project}</code></a>
      <span className='markdown'><ReactMarkdown  remarkPlugins={[gfm]}>{props.markdown}</ReactMarkdown></span>
    </div>
  );
}
