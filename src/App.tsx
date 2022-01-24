import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Feed />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
