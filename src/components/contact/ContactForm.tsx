import { FormEvent, useState } from 'react';
import CodeInputField from './CodeInputField';
import ContactRequest from './ContactRequest';
import Comment from '../general/Comment';
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
    <form className='contact-form' onSubmit={handleSubmit}>
      <div className='entries'>
        <Comment value={'//send me a message'}/>
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
          <CodeInputField name='message' value={contact.message} onChange={(e) => setContact({...contact, message: e.target.value})} input={false}/>
        </div>
      </div>
      <button type='submit' className='submit'>
        push
        <SendConfirmation/>
      </button>
    </form>
  );
}