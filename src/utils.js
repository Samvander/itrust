import {
    collection,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
    query,
    where,
    getDocs,
    serverTimestamp,
  } from "firebase/firestore";
  import db from "./firebase";
  
  export const handleNew = async () => {
    const title = prompt("Titre d'evenement");
    
    const collectionRef = collection(db, "events");
    const payload = { title, timestamp: serverTimestamp() };
  
    const docRef = await addDoc(collectionRef, payload);
    console.log("The new ID is: " + docRef.id);
  };
  
  export const handleEdit = async (id) => {
    const title = prompt("Titre d'evenement");
  
    const docRef = doc(db, "events", id);
    const payload = { title, timestamp: serverTimestamp() };
  
    updateDoc(docRef, payload);
  };
  
  export const handleDelete = async () => {
    const userInputName = prompt("Titre d'evenement");
  
    const collectionRef = collection(db, "events");
    const q = query(collectionRef, where("title", "==", userInputName));
    const snapshot = await getDocs(q);
  
    const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
    results.forEach(async (result) => {
      const docRef = doc(db, "events", result.id);
      await deleteDoc(docRef);
    });
  };
  
  export const handleQueryDelete = async () => {
    const userInputName = prompt("Titre d'evenement");
  
    const collectionRef = collection(db, "events");
    const q = query(collectionRef, where("title", "==", userInputName));
    const snapshot = await getDocs(q);
  
    const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
    results.forEach(async (result) => {
      const docRef = doc(db, "events", result.id);
      await deleteDoc(docRef);
    });
  };