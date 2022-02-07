import { push, ref, get, child, orderByChild, query, startAt, limitToLast, endBefore, onChildAdded, off } from 'firebase/database'
import { db } from './firebase';
import { Timestamp } from 'firebase/firestore';

const dbRef = ref(db);

export function addPost(markdown: string, project: string, projectLink: string) {
  push(ref(db, "Posts"), {markdown: markdown, project: project, projectLink: projectLink, timestamp: getServerTimestamp()});
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

export function subscribeToNewPosts(timeNow: number, onNewPost: (post: {markdown: string, project: string, projectLink: string, timestamp: number}) => void) {
  onChildAdded(query(ref(db, "Posts"),
    orderByChild("timestamp"),
    limitToLast(1),
    startAt(timeNow)), (snapshot) => onNewPost(snapshot.val()));
}

export function unsubscribeFromNewPosts(timeNow: number) {
  off(query(ref(db, "Posts"),
    orderByChild("timestamp"),
    limitToLast(1),
    startAt(timeNow)));
}

export function getServerTimestamp() {
  return Timestamp.now().toMillis();
}
