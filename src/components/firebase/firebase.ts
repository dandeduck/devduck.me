import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import config from '../../config';

const app = initializeApp(config.firebase);

export const db = getDatabase(app);
export const auth = getAuth(app);

export async function logInWithEmailAndPassword (email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};