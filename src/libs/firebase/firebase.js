import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  collection,
  query,
  where,
  select,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";

import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const uploadFile = async (file, folder) => {
  // console.log(file);

  const path = `${folder}/${file.name}`;
  const storageRef = ref(storage, path);
  try {
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(ref(storage, path));
    return url;
  } catch (err) {
    throw new Error(err);
  }
};

export const deletFile = async (folder, fileName) => {
  try {
    const path = `${folder}/${fileName}`;
    const deleteRef = ref(storage, path);

    await deleteObject(deleteRef);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};

async function listItemsInDirectory(directoryPath) {
  const storageRef = ref(storage, directoryPath);
  try {
    const items = await listAll(storageRef);
    //console.log(items);
    return items;
  } catch (error) {
    console.error("Error listing items in directory:", error);
    throw error;
  }
}

export const deleteFolder = async (path) => {
  const items = await listItemsInDirectory(path);
  const promises = items.items.map((itemRef) => deleteObject(itemRef));
  try {
    await Promise.all(promises);
  } catch (error) {
    throw error;
  }
};

export const generateUid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const addData = async (collectionName, data, id) => {
  try {
    const res = await setDoc(doc(db, collectionName, id), data);
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const updateData = async (collectionName, data, id) => {
  try {
    const updateRef = doc(db, collectionName, id);
    const res = await updateDoc(updateRef, data);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const deletData = async (collectionName, id) => {
  try {
    const deletRef = doc(db, collectionName, id);
    const res = await deleteDoc(deletRef);
    return res || true;
  } catch (err) {
    throw new Error(err);
  }
};

export const getAllData = async (collectionName) => {
  try {
    const res = [];

    const querySnapshot = await getDocs(collection(db, collectionName));

    querySnapshot.forEach((doc) => {
      res.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return res;
  } catch (err) {
    throw new Error(err);
  }
};
export const getAllDataBySelect = async (collectionName) => {
  try {
    // const res = null;
    const q = query(
      collection(db, collectionName),
      // where("phone_number", "==", "7904236030")
      where("name", "!=", "x"),
      select()
    );

    // Execute the query and get the documents
    const querySnapshot = await getDocs(q);

    const res = [];
    querySnapshot.forEach((doc) => {
      res.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return res;
  } catch (err) {
    console.log(err);

    // throw new Error(err);
  }
};

export const getData = async (collectionName, queryArray) => {
  try {
    // const res = null;
    const q = query(
      collection(db, collectionName),
      // where("phone_number", "==", "7904236030")
      where(...queryArray)
    );

    // Execute the query and get the documents
    const querySnapshot = await getDocs(q);

    const res = [];
    querySnapshot.forEach((doc) => {
      res.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return res;
  } catch (err) {
    console.log(err);

    throw new Error(err);
  }
};

export const getDataByQuery = async (collectionName, queryArray) => {
  try {
    const res = [];
    const q = query(
      collection(db, collectionName),
      // where("phone_number", "==", "7904236030")
      where(...queryArray)
    );

    // Execute the query and get the documents
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      res.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return res;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const getLoggedInUser = async (phone_number) => {
  try {
    const user = await getData("Employer", [
      "phone_number",
      "==",
      phone_number,
    ]);

    return user;
  } catch (err) {
    throw new Error(err);
  }
};

export default firebaseApp;
