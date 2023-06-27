import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';

type Image = {
    createdAt: Date,
    userEmail: string,
    imageUrl: string
}

const useFirestore = (collectionName: string) => {
    const [docs, setDocs] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        let unsubscribe: () => void

        const getData = async () => {
            try{
                const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
                unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                    const images: Image[] = [];
                    QuerySnapshot.forEach((doc) => {
                        const imageUrl = doc.data().imageUrl;
                        const createdAt = doc.data().createdAt.toDate();
                        const userEmail = doc.data().userEmail;
                        images.push({ imageUrl, createdAt, userEmail })
                    });
                    setDocs(images);
                    setIsLoading(false);
                });

            }catch(error){
                console.log(error);
                setIsLoading(false);
            }
        }
        getData();
        return () => unsubscribe && unsubscribe();

    }, [collectionName])

  return {
    docs, isLoading
  };
};

export default useFirestore;