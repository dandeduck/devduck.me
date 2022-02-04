import { useEffect, useState } from 'react';
import Post from '../feed/Post';
import { addPost } from '../firebase/posts';
import './BlogAdder.css'

export default function BlogAdder() {
  const [project, setProject] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [markdown, setMarkdown] = useState('');

  useEffect(() =>{
    setProject(localStorage.getItem('project') ?? '');
    setProjectLink(localStorage.getItem('project-link') ?? '');
    setMarkdown(localStorage.getItem('markdown') ?? '');
  }, []);

  const onSubmit = () => {
    addPost(markdown, project, projectLink);
    clearData();
  };

  const clearData = () => {
    setProject('');
    setProjectLink('');
    setMarkdown('');
    localStorage.setItem('project', '');
    localStorage.setItem('project-link', '');
    localStorage.setItem('markdown', '');
  }

  return (
    <div className='blog-adder code-look'>
      <h2>Project</h2>
      <input value={project} onChange={e => {setProject(e.target.value); localStorage.setItem('project', e.target.value);}}></input>
      <h2>Project Link</h2>
      <input value={projectLink} onChange={e => {setProjectLink(e.target.value); localStorage.setItem('project-link', e.target.value);}}></input>
      <h2>Markdown</h2>
      <textarea value={markdown} onChange={e => {setMarkdown(e.target.value); localStorage.setItem('markdown', e.target.value);}}></textarea>
      <button onClick={onSubmit}>Upload</button>
      <Post project={project} projectLink={projectLink} markdown={markdown} date={new Date()} now={new Date()}/>
    </div>
  );
}
