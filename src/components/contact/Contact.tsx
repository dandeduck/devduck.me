import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './Contact.css';

export default function Contact() {
  return (
    <div className='contact code-look'>
      <h1 className='heading'>lets talk!</h1>
      <div className='contact-container'>
        <ContactForm/>
        <ContactInfo/>        
      </div>
    </div>
  );
}
