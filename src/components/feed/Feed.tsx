import gsap from 'gsap';
import Post from './Post';
import { Link } from 'react-scroll';
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
  const [newPost, setNewPost] = useState(false);

  useEffect(() => {
    setLoadTime(getServerTimestamp());
    fetchPosts(10);
  }, []);
  
  useEffect(() => {
    subscribeToNewPosts(loadTime, (post) => {unsubscribeFromNewPosts(loadTime); setLoadTime(getServerTimestamp()); setNewPost(true); setPosts([post].concat(posts));})

    return () => {
      unsubscribeFromNewPosts(loadTime);
    }
  }, [posts]);

  useEffect(() => {
    if (newPost) {
      gsap.timeline().fromTo('.notification',
      {
        y: -100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 0.9
      })
      .to('.notification',
      {
        delay: 5,
        opacity: 0,
        y: -200
      });
      setNewPost(false);
    }
  }, [newPost]);
  
  useEffect(() => {
    const localPosts = posts;
    if (!isLoading) {
      ScrollTrigger.create({
        trigger: `.post:nth-of-type(${localPosts.length - 3})`,
        start: "top bottom",
        end: "top bottom",
        once: true,
        onEnter: () => {fetchPosts(3)}
      });
    }
  }, [isLoading, isAllLoaded, posts]);

  const fetchPosts = async (amount: number) => {
    setIsLoading(true);
    const newPosts = await getPosts(posts.length ? posts[posts.length - 1].timestamp : getServerTimestamp(), amount);
    
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
      <span id='feed-start'></span>
      <div className='notification'><span>There is a new post! <Link to='feed-start' offset={-200} className='link' smooth={true}>check it out</Link></span></div>
      {posts.map((post, i) => <Post key={i} markdown={post.markdown} project={post.project} projectLink={post.projectLink} date={new Date(post.timestamp)}/>)}
      {isLoading && !isAllLoaded ? <div className='loading-container'><IphoneSpinner/></div> : <span></span>}
    </div>
  );
}

function onScroll(e: Event) {
  if (window.location.pathname === '/' && document.documentElement.scrollTop - parseInt(sessionStorage.getItem('feed-scrollPosition') ?? '0') < 100)
      sessionStorage.setItem('feed-scrollPosition', document.documentElement.scrollTop.toString());
}
