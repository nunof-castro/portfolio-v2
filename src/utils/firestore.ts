import { collection, getDocs, orderBy, query } from 'firebase/firestore';

import { ICertificate } from 'common/types';
import { db } from 'config/firebase';

export async function getFirebaseCollection<T extends ICertificate>(
  collectionName: 'certificates' | 'projects'
): Promise<T[]> {
  //Firestore collection reference
  const collectionRef = collection(db, collectionName);
  const orderedQuery = query(collectionRef, orderBy('year', 'desc'));
  const docsSnap = await getDocs(orderedQuery);

  const items: T[] = [];

  //Get collection items
  docsSnap.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() } as T);
  });

  return items;
}
