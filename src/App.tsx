import Header from './components/Header';
import Daily from './components/Daily';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Daily/>
      </div>
    </div>
  );
}
