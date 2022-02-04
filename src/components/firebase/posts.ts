import { push, ref } from 'firebase/database'
import { db } from './firebase';

export function addPost(markdown: string, project: string) {
  push(ref(db), {markdown: markdown, project: project, timestamp: Date.now()}); //might be problematic
}