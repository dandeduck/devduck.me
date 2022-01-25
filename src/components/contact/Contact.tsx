import { FormEvent, useState } from 'react';
import duck from '../assets/duck.svg';
import ContactRequest from './ContactRequest';
import CodeInputField from '../codeInputField/CodeInputField';
import CodeTextareaField from '../codeTextareaField/CodeTextareaField';
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
          <span className='comment'>//send me a message</span>
            <div className='line'>
              <p className='line-number code-look'>29</p>
              <CodeInputField name='name' value={contact.name} onChange={(e) => setContact({...contact, name: e.target.value})}/>
            </div>
            <div className='line'> 
              <p className='line-number code-look'>30</p>
              <CodeInputField name='email' value={contact.email} onChange={(e) => setContact({...contact, email: e.target.value})}/>
            </div>
            <div className='line'> 
              <p className='line-number code-look'>31</p>
              <CodeTextareaField name='message' value={contact.message} onChange={(e) => setContact({...contact, message: e.target.value})}/>
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
