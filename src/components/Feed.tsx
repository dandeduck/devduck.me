import Post from './Post';
import './Feed.css';

export default function Daily() {
  const text : string = `
  # Welcome the Destroyer!
  our second ship
  
  ![Destroyer](https://res.cloudinary.com/dandeduck/image/upload/v1642857955/cld-sample.jpg)
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
