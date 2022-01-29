import Post from './Post';
import './Feed.css';
import { useEffect, useState } from 'react';


export default function Daily() {
  const short : string = `
  # Update #24
  and gals [a link](https://www.google.com)
  `
  const long : string = `
  # Welcome the Destroyer!
  our second ship

  ![Destroyer](https://i.pinimg.com/originals/85/00/3b/85003b8e414d2708f18fcb0fd1ccecf0.png)
  ## Second heading
  ### Third heading
  some more
  \`\`\`
  function(test) {
    lol
  }


  \`\`\`
  `;
  const date = new Date(2022, 1, 24, 16);

  localStorage.getItem('feed-scrollPosition') ?? localStorage.setItem('feed-scrollPosition', '0');

  useEffect(() => {
    document.documentElement.scrollTop = parseInt(localStorage.getItem('feed-scrollPosition') ?? '0');

    return () =>{
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  window.addEventListener('scroll', onScroll);

  return (
    <div className='Feed code-look'>
      <Post markdown={long} project='Asteroids UNLIMITED' date={new Date(2022, 1, 24, 15, 50)} now={date}/>
      <Post markdown={short} project='Tracer' date={new Date(2022, 1, 24, 10)} now={date}/>
    </div>
  );
}

function onScroll(e: Event) {
  if (window.location.pathname == '/' && document.documentElement.scrollTop - parseInt(localStorage.getItem('feed-scrollPosition') ?? '0') < 100)
      localStorage.setItem('feed-scrollPosition', document.documentElement.scrollTop.toString());
}
