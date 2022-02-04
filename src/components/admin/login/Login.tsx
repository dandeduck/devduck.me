import { useState } from 'react';
import { logInWithEmailAndPassword } from '../../firebase/firebase';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className='login code-look'>
      <h1>Please log in</h1>
      <div className='form'>
        <span>Email: <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)}></input></span>
        <span>Password: <input type={'password'} value={password} onChange={(e) => setPassword(e.target.value)}></input></span>
        <button  onClick={() => logInWithEmailAndPassword(email, password)}>Login</button>
      </div>
    </div>
  );
}