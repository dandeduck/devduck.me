import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Feed from './components/feed/Feed';
import Contact from './components/contact/Contact';
import Work from './components/work/Work';
import About from './components/about/About';
import Admin from './components/admin/Admin';
import { addPost } from './components/firebase/posts';
import './App.css';

export default function App() {  
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/daily" element={<Feed/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/*" element={<About/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
