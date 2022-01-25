import './Contact.css';

export default function Header() {
  return (
    <div className='contact'>
      <h1 className='heading'>lets talk!</h1>
      <div className='inputs'>
        <div className='entry'>
          <label htmlFor='name'><code className='text'>&#60;name&#62;</code></label>
          <input id='name' className='field'></input>
          <label htmlFor='name'><code className='text'>&#60;/name&#62;</code></label>
        </div>
        <div className='entry'>
          <label htmlFor='email'><code className='text'>&#60;email&#62;</code></label>
          <input id='email' className='field'></input>
          <label htmlFor='email'><code className='text'>&#60;/email&#62;</code></label>
        </div>
        <div className='entry'>
          <label htmlFor='message'><code className='text'>&#60;message&#62;</code></label>
          <textarea id='message' className='big field'></textarea>
          <label htmlFor='message'><code className='text'>&#60;/message&#62;</code></label>
        </div>
        <button type='submit' className='submit'>send</button>
      </div>
      <div className='info text'>
        <span className='small second-heading'>You can also reach me at:</span>
        <a href='https://github.com/dandeduck' className='small'>github.com/dandeduck</a>
        <span className='small'>danielmkhlv@gmail.com</span>
        <span className='small'>+972 587976897</span>
      </div>
    </div>
  );
}
