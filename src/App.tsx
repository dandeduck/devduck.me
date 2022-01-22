import Header from './components/Header';
import Feed from './components/Feed';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Feed/>
      </div>
    </div>
  );
}
