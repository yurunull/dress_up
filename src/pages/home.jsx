import { useState, useRef, useEffect } from "react";
import "../../styles/styles.css";
import Movie from "../images/change.mp4";

const names = ["ジャケット", "トップス", "パンツ"];

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomImagesFromStorage = () => {
  const storedData = JSON.parse(localStorage.getItem("imagesData"));
  if (storedData && storedData.length > 0) {
    const topsImages = storedData.map((item) => item.tops).filter(Boolean);
    const pantsImages = storedData.map((item) => item.pants).filter(Boolean);
    const jacketImages = storedData.map((item) => item.jacket).filter(Boolean);

    const chosenTops = topsImages.length > 0 ? getRandomItem(topsImages) : "images/error/notfound.png";
    const chosenPants = pantsImages.length > 0 ? getRandomItem(pantsImages) : "images/error/notfound.png";
    const chosenJacket = jacketImages.length > 0 ? getRandomItem(jacketImages) : "images/error/notfound.png";

    return [chosenJacket, chosenTops, chosenPants];
  } else {
    return [
      "images/error/notfound.png",
      "images/error/notfound.png",
      "images/error/notfound.png",
    ];
  }
};

const Home = () => {
  const [currentImages, setCurrentImages] = useState([
    "./images/hat.jpg",
    "./images/pants.png",
    "./images/trainer.jpg",
  ]);
  const [isTransforming, setIsTransforming] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onended = () => {
        const newImages = getRandomImagesFromStorage();
        setCurrentImages(newImages);
        localStorage.setItem("selectedImages", JSON.stringify(newImages));
        setIsTransforming(false);
      };
    }
  }, []);

  const shuffleImages = () => {
    const video = videoRef.current;
    if (!video) {
      console.error("videoRef.current is null");
      return;
    }

    setIsTransforming(true);
    video.currentTime = 0;
    video.style.opacity = 1;
    video.style.zIndex = 10;

    if (video.readyState >= 3) {
      video.play().catch((error) => {
        console.error("動画の再生に失敗しました:", error);
        setIsTransforming(false);
        video.style.opacity = 0;
      });
    } else {
      video.oncanplaythrough = () => {
        video.play().catch((error) => {
          console.error("動画の再生に失敗しました:", error);
          setIsTransforming(false);
          video.style.opacity = 0;
        });
      };

      video.onerror = () => {
        console.error("動画のロードに失敗しました");
        setIsTransforming(false);
        video.style.opacity = 0;
      };
    }
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
        <h2 className="font-bold subtitle pop text-waterblue text-4xl sm:text-5xl lg:text-6xl mb-12 relative inline-block">
          変身✨
        </h2>
        <div className="relative w-full flex justify-center">
          <video
            ref={videoRef}
            className="absolute w-1/3 translate-y-12 transition-opacity duration-500"
            src={Movie}
            muted
            style={{
              opacity: isTransforming ? 1 : 0,
              pointerEvents: "none",
              zIndex: isTransforming ? 10 : -1,
            }}
          ></video>
          <div
            className={`flex flex-col items-center justify-center gap-8 mt-8 transition-opacity duration-500 ${isTransforming ? 'opacity-0' : 'opacity-100'}`}
          >
            {currentImages.map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={img.startsWith("data:") ? img : "/" + img}
                  alt={`transform-${index}`}
                  className="w-48 h-48 object-cover transform transition duration-500 hover:scale-110"
                />
                <span className="name text-lg font-semibold mt-2">{names[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <button
        onClick={shuffleImages}
        disabled={isTransforming}
        className={`text-5xl mt-10 px-7 py-5 font-bold rounded-lg shadow-md transition ${
          isTransforming ? "bg-gray-400" : "bg-pink-400 hover:bg-yellow-400 text-white"
        }`}
      >
        変身！
      </button>
    </div>
  );
};

export default Home;
