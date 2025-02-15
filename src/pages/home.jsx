import { useState } from "react";
import "../../styles/styles.css";
// bunrui.js からインポート

// 部位ごとの名称（localStorageを利用する場合の順番です）
const names = ["ジャケット", "トップス", "パンツ"];

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomImagesFromStorage = () => {
  const storedData = JSON.parse(localStorage.getItem("imagesData"));
  if (storedData && storedData.length > 0) {
    // 各部位ごとに画像の配列を用意（nullもあり得るので後で判定）
    const topsImages = storedData.map((item) => item.tops);
    const pantsImages = storedData.map((item) => item.pants);
    const jacketImages = storedData.map((item) => item.jacket);
    // ランダムに選択し、nullの場合はフォールバック画像に置き換え
    const chosenTops = getRandomItem(topsImages) || "images/error/notfound.png";
    const chosenPants =
      getRandomItem(pantsImages) || "images/error/notfound.png";
    const chosenJacket =
      getRandomItem(jacketImages) || "images/error/notfound.png";
    return [chosenJacket, chosenTops, chosenPants];
  } else {
    // localStorageに画像データがない場合は全てフォールバック画像を使用
    return [
      "images/error/notfound.png",
      "images/error/notfound.png",
      "images/error/notfound.png",
    ];
  }
};

const Home = () => {
  // 初期表示はTableから（Table.jacket, Table.tops, Table.pants）
  const [currentImages, setCurrentImages] = useState([
    "./images/hat.jpg",
    "./images/pants.png",
    "./images/trainer.jpg",
  ]);

  // 返信（変身）ボタンを押したらlocalStorageからランダムに画像を表示
  const shuffleImages = () => {
    const newImages = getRandomImagesFromStorage();
    setCurrentImages(newImages);
    localStorage.setItem("selectedImages", JSON.stringify(newImages));
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
          <p className="text-3xl sm:text-4xl lg:text-4xl font-bold p-4">
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
                src={img.startsWith("data:") ? img : "/" + img}
                alt={`transform-${index}`}
                className="w-48 h-48 object-cover transform transition duration-500 hover:scale-110"
              />
              <span className="name text-lg font-semibold mt-2">
                {names[index]}
              </span>
            </div>
          ))}
        </div>
      </section>

      <button
        onClick={shuffleImages}
        className="mt-10 px-4 py-3 bg-pink-400 text-white font-bold rounded-lg shadow-md hover:bg-yellow-400 transition"
      >
        返信！
      </button>

      <div className="mt-12"></div>
    </div>
  );
};

export default Home;
