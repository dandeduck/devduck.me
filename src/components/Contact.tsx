import duck from './duck.svg';
import './Contact.css';

export default function Header() {
  return (
    <div className='contact'>
      <h1 className='heading'>lets talk!</h1>
      <div className='contact-container'>
        <form className='contact-form'>
          <div className='entries'>
          <span className='text comment'>//send me a message</span>
            <div className='line'>
              <p className='line-number text'>29</p>
              <div className='entry'>
                <label htmlFor='name'><code className='text'> &#60;<span className='key-word'>name</span>&#62;</code></label>
                <input id='name' className='field'></input>
                <label htmlFor='name'><code className='text'>&#60;/<span className='key-word'>name</span>&#62;</code></label>
              </div>
            </div>
            <div className='line'> 
              <p className='line-number text'>30</p>
              <div className='entry'>
                <label htmlFor='email'><code className='text'>&#60;<span className='key-word'>email</span>&#62;</code></label>
                <input id='email' className='field'></input>
                <label htmlFor='email'><code className='text'>&#60;/<span className='key-word'>email</span>&#62;</code></label>
              </div>
            </div>
            <div className='line'> 
              <p className='line-number text'>31</p>
              <div className='entry'>
                <label htmlFor='message'><code className='text'>&#60;<span className='key-word'>message</span>&#62;</code></label>
                <textarea id='message' className='big field'></textarea>
                <label htmlFor='message'><code className='text'>&#60;/<span className='key-word'>message</span>&#62;</code></label>
              </div>
            </div>
          </div>
          <button type='submit' className='submit'>push</button>
        </form>
        <div className='info text'>
          <div className='speach'>
            <img src={duck} className='neonDuck talking-duck' alt="duck"/>
            <span className='block second-heading'>"You can also reach me at"</span>
          </div>
          <span className='block'>danielmkhlv@gmail.com</span>
          <a href='https://github.com/dandeduck' className='block'>github.com/dandeduck</a>
          <span className='block'>+972 587976897</span>
        </div>
      </div>
    </div>
  );
}
