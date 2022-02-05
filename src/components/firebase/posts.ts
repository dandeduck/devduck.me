import { push, ref, get, child, orderByChild, query, startAt, limitToFirst, limitToLast, QueryConstraint, startAfter, endBefore } from 'firebase/database'
import { db } from './firebase';

const dbRef = ref(db);

export function addPost(markdown: string, project: string, projectLink: string) {
  push(ref(db, "Posts"), {markdown: markdown, project: project, projectLink: projectLink, timestamp: {'.sv': 'timestamp'}});
}

export function getAllPosts() {
  return get(child(dbRef, "Posts")).then(snapshot => {
    const posts: Array<{markdown: string, project: string, projectLink: string, timestamp: number}> = [];

    snapshot.forEach(childSnapshot => {
      posts.push(childSnapshot.val());
    });

    return posts.reverse();
  });
}

export function getPosts(before: number, amount: number) {
  return get(query(ref(db, "Posts"), 
    orderByChild('timestamp'),
    endBefore(before),
    limitToLast(amount))).then(snapshot => {
      const posts: Array<{markdown: string, project: string, projectLink: string, timestamp: number}> = [];

      snapshot.forEach(childSnapshot => {
        posts.push(childSnapshot.val());
      });
  
      return posts.reverse();
    });
}
