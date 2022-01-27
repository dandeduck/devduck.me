import { FormEvent, useState } from 'react';
import CodeInputField from './CodeInputField';
import ContactRequest from './ContactRequest';
import Comment from '../general/Comment';
import IphoneSpinner from '../general/IphoneSpinner';
import './ContactForm.css';

export default function ContactForm(props: {handleContactRequest:  (contact : ContactRequest) => Promise<boolean>}) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const SendConfirmation = () => {
    if (sent)
      return <span className='text confirmation'>sent!</span>;
    return <span></span>;
  };

  const Sending = () => {
    if (sending)
      return <div className='sending'><IphoneSpinner/></div>;
    return <div></div>;
  }

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
        push
        <SendConfirmation></SendConfirmation>
        <Sending/>
      </button>
    </form>
  );
}