import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Contact from './components/Contact';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path="/contact" element={<Contact handleContactRequest={() => {return Promise.resolve(true)}} />}/>
            <Route path="/" element={<Feed />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
