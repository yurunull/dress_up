import React, { useState } from "react";
import "../../styles/styles.css";
import { Table } from "../compoments/bunrui";  // bunrui.js からインポート

// 画像と名前のマッピング
const images = [
  Table.hat[0], 
  Table.jacket[0], 
  Table.tops[0], 
  Table.pants[0], 
  Table.shoes[0]
];

const names = ["帽子", "上着", "トップス", "パンツ・スカート", "靴"];

const Home = () => {
  const [currentImages, setCurrentImages] = useState(images);

  // 画像をランダムに並べ替える関数
  const shuffleImages = () => {
    const shuffledImages = images.map(() => images[Math.floor(Math.random() * images.length)]);
    setCurrentImages(shuffledImages);

    // ランダムに選ばれたアイテム名をローカルストレージに保存
    localStorage.setItem("selectedItems", JSON.stringify(shuffledImages));
  };

  return (
    <div className="w-full text-center px-4">
      <section id="hero" className="mb-12">
        <div className="relative w-full flex justify-center">
          <img src="./images/top.png" alt="top" className="w-auto max-w-full object-cover" />
        </div>
      </section>

      <section id="rule" className="mb-12 text-center">
        <div className="p-6 mb-2 border-2 border-dashed border-paleyellow">
          <p className="text-5xl font-bold p-4">✨プリキュアみたいに部屋着から大変身しよう✨</p>
        </div>
      </section>

      <section id="transform" className="mb-12 text-center mt-16">
        <h2 className="font-bold subtitle pop text-waterblue text-6xl mb-12 relative inline-block after:content-[''] after:block after:h-4 after:bg-yellow-300 after:w-[130%] after:left-[-15%] after:opacity-60 after:-bottom-2 after:absolute">
          変身✨
        </h2>
        <div className="flex justify-center mt-8">
          <div className="image-container">
            {currentImages.map((img, index) => (
              <div key={index} className="image-box transform transition duration-500 hover:scale-110">
                <img src={"/images/" + img} alt={`transform-${index}`} />
                <span className="name text-lg font-semibold">{names[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <button onClick={shuffleImages} className="mt-8 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition">
        もう一度変身！
      </button>
    </div>
  );
};

export default Home;
