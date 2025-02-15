import React, { useState, useEffect } from "react";

const Home = () => {
  // デフォルト画像のプレースホルダー
  const defaultImages = [
    "https://via.placeholder.com/150?text=Tops",
    "https://via.placeholder.com/150?text=Pants",
    "https://via.placeholder.com/150?text=Shoes"
  ];

  // 表示する画像の状態
  const [currentImages, setCurrentImages] = useState(
    Array(defaultImages.length).fill(null)
  );

  useEffect(() => {
    const savedImages = localStorage.getItem("imagesData");
    console.log("LocalStorage Data:", savedImages);

    if (savedImages) {
      try {
        const parsedImages = JSON.parse(savedImages);
        console.log("Parsed Images:", parsedImages);

        if (Array.isArray(parsedImages) && parsedImages.length > 0) {
          const lastImageSet = parsedImages[parsedImages.length - 1]; // 最新のデータを取得
          console.log("Last Image Set:", lastImageSet);

          const formattedImages = [
            lastImageSet.tops || null,
            lastImageSet.pants || null,
            lastImageSet.shoes || null
          ];

          console.log("Formatted Images:", formattedImages);
          setCurrentImages(formattedImages);
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  return (
    <div>
      <h1>My Outfit</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image || defaultImages[index]}
            alt={`Clothing ${index}`}
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
