import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import testImage from './testImage.jpeg';
import './Post.css';

export default function Post(props : {markdown: string}) {
  return (
    <div className='Post'>
      <span className='text'><ReactMarkdown  remarkPlugins={[gfm]}>{props.markdown}</ReactMarkdown></span>
      <div className='cover-container'>
        <img src={testImage} className="cover" alt='test image'></img>
      </div>
    </div>
  );
}
