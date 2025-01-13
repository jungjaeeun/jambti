import { db } from "./firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";

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