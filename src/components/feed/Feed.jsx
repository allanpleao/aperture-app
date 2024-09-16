import { useEffect, useState } from "react"
import { db } from "../../../firebaseConfig"
import { onSnapshot, collection } from "firebase/firestore"
import styles from './Feed.module.css'

const Feed = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'images'), (snapShot) => {
      const imgs = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setImages(imgs)
      console.log(imgs)
    })
    return () => unsubscribe()
  },[])

  return (
    <div className={styles.imagesContainer}>
      {images&& images.map((img) => (
        <div  key={img.id}>
          <img className={styles.image} src={img.url} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Feed
