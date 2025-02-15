import React, { useState } from "react";

const Add = () => {
  const [topsImage, setTopsImage] = useState(null);
  const [pantsImage, setPantsImage] = useState(null);
  const [shoesImage, setShoesImage] = useState(null);

  const handleImageChange = async (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      // ファイルをBase64形式に変換
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Data = reader.result;
        setImage(base64Data); // Base64データをセット
      };
      reader.readAsDataURL(file);
    }
  };

  const saveImagesToStorage = () => {
    const imagesData = {
      tops: topsImage,
      pants: pantsImage,
      shoes: shoesImage,
    };

    let currentImageData = JSON.parse(localStorage.getItem("imagesData") || "[]");
    currentImagedata.push(imagesData);
    // ローカルストレージに保存
    localStorage.setItem("imagesData", JSON.stringify(currentImagedata));
    alert("画像が保存されました！");

    // ページをリロードしてAdd画面に戻る
    window.location.reload(); // Add画面に戻すためにリロード
  };

  return (
    <div className="w-full text-center p-4">
      <h2 className="text-4xl font-bold mb-6">画像を追加しよう！</h2>

      {/* トップスセクション */}
      <div className="mb-6 p-4 border-4 border-dashed border-gray-400 w-full sm:w-[300px] mx-auto">
        <h3 className="text-2xl font-semibold mb-4">トップスの画像</h3>
        <button
          className="px-6 py-3 bg-blue-400 text-white font-bold rounded-lg"
          onClick={() => document.getElementById("topsInput").click()}
        >
          画像を選択
        </button>
        <input
          type="file"
          id="topsInput"
          style={{ display: "none" }}
          onChange={(e) => handleImageChange(e, setTopsImage)}
        />
        {topsImage ? (
          <div>
            <img
              src={topsImage}
              alt="Tops Preview"
              className="mt-2 max-w-[200px]"
            />
            <button
              onClick={() => setTopsImage(null)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              削除
            </button>
          </div>
        ) : (
          <p className="mt-2">選択されていません</p>
        )}
      </div>

      {/* ズボンセクション */}
      <div className="mb-6 p-4 border-4 border-dashed border-gray-400 w-full sm:w-[300px] mx-auto">
        <h3 className="text-2xl font-semibold mb-4">ズボン・スカートの画像</h3>
        <button
          className="px-6 py-3 bg-blue-400 text-white font-bold rounded-lg"
          onClick={() => document.getElementById("pantsInput").click()}
        >
          画像を選択
        </button>
        <input
          type="file"
          id="pantsInput"
          style={{ display: "none" }}
          onChange={(e) => handleImageChange(e, setPantsImage)}
        />
        {pantsImage ? (
          <div>
            <img
              src={pantsImage}
              alt="Pants Preview"
              className="mt-2 max-w-[200px]"
            />
            <button
              onClick={() => setPantsImage(null)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              削除
            </button>
          </div>
        ) : (
          <p className="mt-2">選択されていません</p>
        )}
      </div>

      {/* 靴セクション */}
      <div className="mb-6 p-4 border-4 border-dashed border-gray-400 w-full sm:w-[300px] mx-auto">
        <h3 className="text-2xl font-semibold mb-4">靴の画像</h3>
        <button
          className="px-6 py-3 bg-blue-400 text-white font-bold rounded-lg"
          onClick={() => document.getElementById("shoesInput").click()}
        >
          画像を選択
        </button>
        <input
          type="file"
          id="shoesInput"
          style={{ display: "none" }}
          onChange={(e) => handleImageChange(e, setShoesImage)}
        />
        {shoesImage ? (
          <div>
            <img
              src={shoesImage}
              alt="Shoes Preview"
              className="mt-2 max-w-[200px]"
            />
            <button
              onClick={() => setShoesImage(null)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              削除
            </button>
          </div>
        ) : (
          <p className="mt-2">選択されていません</p>
        )}
      </div>

      {/* 保存ボタン */}
      <div className="mt-8">
        <button
          onClick={saveImagesToStorage}
          className="px-6 py-3 bg-pink-400 text-white font-bold rounded-lg shadow-md hover:bg-yellow-400 transition"
        >
          保存する
        </button>
      </div>
    </div>
  );
};

export default Add;
