import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import styles from "./Feed.module.css";
import Loading from "../helper/Loading";
import Error from "../helper/Error";

const Feed = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setLoading(true);

    const unsubscribe = onSnapshot(
      collection(db, "images"),
      (snapShot) => {
        const imgs = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setImages(imgs);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching images:", err);
        setError("Failed to fetch images. Please try again later.");
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className={styles.imagesContainer}>
      {images.length > 0 ? (
        images.map((img) => (
          <div key={img.id}>
            <img className={styles.image} src={img.url} alt="" />
          </div>
        ))
      ) : (
        <p>Não há imagens</p>
      )}
    </div>
  );
};

export default Feed;
