import Post from './Post';
import './Feed.css';

export default function Daily() {
  const short : string = `
  # Update #24
  and gals [a link](https://www.google.com)
  `
  const long : string = `
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
  const date = new Date(2022, 1, 24, 16);

  return (
    <div className='Feed code-look'>
      <Post markdown={short} project='Tracer' date={new Date(2022, 1, 24, 10)} now={date}/>
      <Post markdown={long} project='Asteroids UNLIMITED' date={new Date(2022, 1, 24, 15, 50)} now={date}/>
    </div>
  );
}
