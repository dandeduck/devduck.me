import Login from './login/Login';
import BlogAdder from './BlogAdder';
import { useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Admin() {
  const [user, loading, error] = useAuthState(auth);
  
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);
  
  return (
    <div>
      {user === null ? <Login/> : <BlogAdder/>}
    </div>
  );
}