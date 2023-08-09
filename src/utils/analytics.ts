import { collection, getDocs } from 'firebase/firestore';

import { db } from 'config/firebase';

export async function getFirebaseCollection(collectionName: string) {
  //Firestore collection reference
  const collectionRef = collection(db, collectionName);

  //Get the list of items in the collection
  const items = []; //FIXME

  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}
