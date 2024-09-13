import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';  // Certifique-se de que o caminho está correto

function Feed() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'imagens'));
        const imageList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          url: doc.data().url
        }));
        console.log("Lista de imagens:", imageList);  // Adicionado para depuração
        setImages(imageList);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="feed">
      <h2>Feed de Imagens</h2>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.url} alt="Imagem do feed" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;