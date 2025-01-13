import { db } from "./firebase";
import {
  collection,
  getDocs,
  DocumentData,
  QueryConstraint,
  query,
} from "firebase/firestore";

export const fetchDataFromFirestore = async (
  collectionName: string
): Promise<DocumentData[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw new Error("Failed to fetch data from Firestore");
  }
};

export const fetchDataFromFirestoreWithQuery = async (
  collectionName: string,
  queryConstraints: QueryConstraint[]
): Promise<DocumentData[]> => {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, ...queryConstraints);
    const querySnapshot = await getDocs(q);
    const data: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw new Error("Failed to fetch data from Firestore");
  }
};

// export const signupWithEmail = (
//   email: string,
//   password: string
// ): Promise<any> => {
//   return new Promise((resolve, reject) => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         resolve(userCredential.user);
//       })
//       .catch((error) => {
//         reject(new Error("fail signup"));
//       });
//   });
// };
