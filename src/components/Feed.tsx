import Post from './Post';
import './Feed.css';

export default function Daily() {
  const text : string = `
  # Heading
  Some text here.
  ## Second heading
  some more
  \`\`\`
  function(test) {
    lol
  }


  \`\`\`
  `;
  return (
    <div className='Feed'>
      <Post markdown={text}/>
    </div>
  );
}
