import { push, ref } from 'firebase/database'
import { db } from './firebase';

export function addPost(markdown: string, project: string, projectLink: string) {
  push(ref(db), {markdown: markdown, project: project, projectLink: projectLink, timestamp: Date.now()}); //might be problematic
}