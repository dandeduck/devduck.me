import Post from './Post';
import { useEffect, useState, } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { addPost, getAllPosts, getPosts, getServerTimestamp, subscribeToNewPosts, unsubscribeFromNewPosts } from '../firebase/posts';
import './Feed.css';
import IphoneSpinner from '../general/IphoneSpinner';


export default function Daily() {
  const [posts, setPosts] = useState<{markdown: string, project: string, projectLink: string, timestamp: number}[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAllLoaded, setIsAllLoaded] = useState(false);
  const [loadTime, setLoadTime] = useState(Date.now());

  useEffect(() => {
    setLoadTime(getServerTimestamp());
    fetchPosts(10);
  }, []);
  
  useEffect(() => {
    subscribeToNewPosts(loadTime, (post) => {unsubscribeFromNewPosts(loadTime); setLoadTime(getServerTimestamp()); console.log(post, posts.length); setPosts([post].concat(posts));})

    return () => {
      unsubscribeFromNewPosts(loadTime);
    }
  });
  
  useEffect(() => {
    if (!isLoading) {
      ScrollTrigger.create({
        trigger: `.post:nth-of-type(${posts.length - 3})`,
        start: "top bottom",
        end: "top bottom",
        once: true,
        onEnter: () => {fetchPosts(3)}
      });
    }
  }, [isLoading, isAllLoaded]);

  const fetchPosts = async (amount: number) => {
    setIsLoading(true);
    const newPosts = await getPosts(posts.length ? posts[posts.length - 1].timestamp : Date.now(), amount);
    
    if (newPosts.length) {
      setPosts(posts.concat(newPosts));
      setIsLoading(false);
    }

    else
      setIsAllLoaded(true);
  }

  sessionStorage.getItem('feed-scrollPosition') ?? sessionStorage.setItem('feed-scrollPosition', '0');

  useEffect(() => {
    document.documentElement.scrollTop = parseInt(sessionStorage.getItem('feed-scrollPosition') ?? '0');

    return () =>{
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  window.addEventListener('scroll', onScroll);

  return (
    <div className='Feed code-look'>
      {posts.map((post, i) => <Post key={i} markdown={post.markdown} project={post.project} projectLink={post.projectLink} date={new Date(post.timestamp)}/>)}
      {isLoading && !isAllLoaded ? <div className='loading-container'><IphoneSpinner/></div> : <span></span>}
    </div>
  );
}

function onScroll(e: Event) {
  if (window.location.pathname === '/' && document.documentElement.scrollTop - parseInt(sessionStorage.getItem('feed-scrollPosition') ?? '0') < 100)
      sessionStorage.setItem('feed-scrollPosition', document.documentElement.scrollTop.toString());
}
