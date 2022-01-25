import { FormEvent, useState } from 'react';
import duck from './duck.svg';
import ContactRequest from './ContactRequest';
import './Contact.css';

export default function Contact(props: {handleContactRequest:(contact : ContactRequest) => void}) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.handleContactRequest(contact);

    setContact({
      name: "",
      email: "",
      message: ""
    });
  }
  
  return (
    <div className='contact'>
      <h1 className='heading'>lets talk!</h1>
      <div className='contact-container'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='entries'>
          <span className='text comment'>//send me a message</span>
            <div className='line'>
              <p className='line-number text'>29</p>
              <div className='entry'>
                <label htmlFor='name'><code className='text'> &#60;<span className='key-word'>name</span>&#62;</code></label>
                <input id='name' className='field' onChange={e => setContact({...contact, name: e.target.value})} value={contact.name}></input>
                <label htmlFor='name'><code className='text'>&#60;/<span className='key-word'>name</span>&#62;</code></label>
              </div>
            </div>
            <div className='line'> 
              <p className='line-number text'>30</p>
              <div className='entry'>
                <label htmlFor='email'><code className='text'>&#60;<span className='key-word'>email</span>&#62;</code></label>
                <input id='email' className='field' required onChange={e => setContact({...contact, email: e.target.value})} value={contact.email}></input>
                <label htmlFor='email'><code className='text'>&#60;/<span className='key-word'>email</span>&#62;</code></label>
              </div>
            </div>
            <div className='line'> 
              <p className='line-number text'>31</p>
              <div className='entry'>
                <label htmlFor='message'><code className='text'>&#60;<span className='key-word'>message</span>&#62;</code></label>
                <textarea id='message' className='big field' required onChange={e => setContact({...contact, message: e.target.value})} value={contact.message}></textarea>
                <label htmlFor='message'><code className='text'>&#60;/<span className='key-word'>message</span>&#62;</code></label>
              </div>
            </div>
          </div>
          <button type='submit' className='submit'>push</button>
        </form>
        <div className='info text'>
          <div className='speech'>
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
