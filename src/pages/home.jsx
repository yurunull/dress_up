import React, { useState } from "react";
import "../../styles/styles.css";
import { Table } from "../compoments/bunrui"; // bunrui.js からインポート

// 画像と名前のマッピング
const images = [
  Table.hat[0],
  Table.jacket[0],
  Table.tops[0],
  Table.pants[0],
  Table.shoes[0],
];

const names = ["帽子", "上着", "トップス", "パンツ・スカート", "靴"];

const Home = () => {
  const [currentImages, setCurrentImages] = useState(images);

  // 画像をランダムに並べ替える関数
  const shuffleImages = () => {
    const shuffledImages = images.map(
      () => images[Math.floor(Math.random() * images.length)]
    );
    setCurrentImages(shuffledImages);

    // ランダムに選ばれたアイテム名をローカルストレージに保存
    localStorage.setItem("selectedItems", JSON.stringify(shuffledImages));
  };

  return (
    <div className="w-full text-center px-4">
      <section id="hero" className="mb-12">
        <div className="relative w-full flex justify-center">
          <img
            src="./images/top.png"
            alt="top"
            className="w-auto max-w-full object-cover"
          />
        </div>
      </section>

      <section id="rule" className="mb-12 text-center">
        <div className="p-6 mb-2 border-2 border-dashed border-paleyellow">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold p-4">
            ✨プリキュアみたいに部屋着から大変身しよう✨
          </p>
        </div>
      </section>

      <section id="transform" className="mb-12 text-center mt-16">
        <h2 className="font-bold subtitle pop text-waterblue text-4xl sm:text-5xl lg:text-6xl mb-12 relative inline-block after:content-[''] after:block after:h-4 after:bg-yellow-300 after:w-[130%] after:left-[-15%] after:opacity-60 after:-bottom-2 after:absolute">
          変身✨
        </h2>
        <div className="flex flex-col items-center mt-8 gap-6">
  {currentImages.map((img, index) => (
    <div key={index} className="w-full flex flex-col items-center">
      <img
        src={"/images/" + img}
        alt={`transform-${index}`}
        className="w-48 h-48 object-cover transform transition duration-500 hover:scale-110"
      />
      <span className="name text-lg font-semibold mt-2">{names[index]}</span>
    </div>
  ))}
</div>

      </section>

      <button
        onClick={shuffleImages}
        className="mt-10 px-4 py-3 bg-pink-400 text-white font-bold rounded-lg shadow-md hover:bg-yellow-400 transition"
      >
        変身！
      </button>

      <div className="mt-12"></div>
    </div>
  );
};

export default Home;
