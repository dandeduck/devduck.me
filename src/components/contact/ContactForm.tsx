import { FormEvent, useState } from 'react';
import CodeInputField from './CodeInputField';
import Comment from '../general/Comment';
import IphoneSpinner from '../general/IphoneSpinner';
import{ init, send } from '@emailjs/browser';
import config from '../../config';
import './ContactForm.css';

export default function ContactForm() {
  init(config.emaljs.userId);

  const [sent, setSent] = useState(0);
  const [sending, setSending] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const SendConfirmation = () => {
    if (sent === 200)
      return <span className='text confirmation'>sent!</span>;
    else if (sent > 0)
      return <span className='text confirmation'>error</span>;
    return <span></span>;
  };

  const Sending = () => {
    if (sending)
      return <div className='sending'><IphoneSpinner/></div>;
    return <div></div>;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (contact.name === "" || contact.email === "" || contact.message === "") {
      alert('All the fields must be filled out.');
      return;
    }

    setSending(true);

    let wasSent = (await handleContactRequest()).status;

    setSent(wasSent);

    if (wasSent === 200) {
      setContact({
        name: "",
        email: "",
        message: ""
      });
    }

    setSending(false);
  }

  const handleContactRequest = () => {
    return send(config.emaljs.serviceId, config.emaljs.templateId,{
      from_name: contact.name,
      reply_to: contact.email,
      message: contact.message,
      });
  }
  
  return (
    <form className='contact-form code-look' onSubmit={handleSubmit}>
      <div className='entries'>
        <Comment value={'//send me a message'}/>
        <div className='line'>
          <p className='line-number'>29</p>
          <CodeInputField name='name' value={contact.name} onChange={(e) => setContact({...contact, name: e.target.value})}/>
        </div>
        <div className='line'> 
          <p className='line-number'>30</p>
          <CodeInputField name='email' value={contact.email} type='email' onChange={(e) => setContact({...contact, email: e.target.value})}/>
        </div>
        <div className='line'> 
          <p className='line-number'>31</p>
          <CodeInputField name='message' value={contact.message} onChange={(e) => setContact({...contact, message: e.target.value})} textarea={true}/>
        </div>
      </div>
      <button type='submit' className='submit code-look'>
        send
        <div className='send-container'>
          <SendConfirmation></SendConfirmation>
          <Sending/>
        </div>
      </button>
    </form>
  );
}