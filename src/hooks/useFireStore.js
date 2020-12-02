import { useState, useEffect } from "react";
import { projectFireStorage } from "../firebase/config";

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFireStorage
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((element) => {
          documents.push({ ...element.data(), id: element.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);
  return { docs };
};

export default useFireStore