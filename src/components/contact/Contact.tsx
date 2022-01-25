import ContactRequest from './ContactRequest';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './Contact.css';

export default function Contact(props: {handleContactRequest:  (contact : ContactRequest) => Promise<boolean>}) {
  return (
    <div className='contact'>
      <h1 className='heading'>lets talk!</h1>
      <div className='contact-container'>
        <ContactForm handleContactRequest={props.handleContactRequest}/>
        <ContactInfo/>        
      </div>
    </div>
  );
}
