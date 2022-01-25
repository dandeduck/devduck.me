import { FormEvent, useState } from 'react';
import duck from './duck.svg';
import ContactRequest from './ContactRequest';
import './Contact.css';

export default function Contact(props: {handleContactRequest:  (contact : ContactRequest) => Promise<boolean>}) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const SendConfirmation = () => {
    if (sent)
      return <span className='text confirmation'>sent!</span>
    return <span></span>;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    let wasSent = await props.handleContactRequest(contact);

    console.log(wasSent);
    setSent(wasSent);

    if (wasSent) {
      setContact({
        name: "",
        email: "",
        message: ""
      });
    }

    setSending(false);
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
          <button type='submit' className='submit'>
            push
            <SendConfirmation/>
          </button>
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
