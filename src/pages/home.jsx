import React from "react";
import "../../styles/styles.css";
import Top from "../images/top.png";
import Hat from "../images/hat.jpg";
import Jacket from "../images/jacket.jpg";
import Trainer from "../images/trainer.jpg";
import Pants from "../images/pants.png";
import Shoes from "../images/shoes.jpg";

const Home = () => {
  return (
    <div className="w-full text-center px-4">
      <section id="hero" className="mb-12">
        <div className="relative w-full flex justify-center">
          <img src={Top} alt="top" className="w-auto max-w-full object-cover" />
        </div>
      </section>

      <section id="rule" className="mb-12 text-left">
        <h2 className="subtitle pop text-waterblue text-7xl mb-10">このサイトの使い方は？</h2>
        <div className="p-3 mb-2 border-2 border-dashed border-paleyellow">
          <ul className="rule_list list-none p-3">
            {["このサイトを使って服選びという困難を解決しよう！", 
              "プリキュアみたいに大変身してね！"].map((text, index) => (
              <li key={index} className="relative mb-5 pl-8 before:content-['▶'] before:absolute before:left-0 before:top-0 before:text-waterblue before:text-2xl">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="member" className="mb-12 text-left">
        <h2 className="subtitle pop text-waterblue text-5xl mb-10">種類</h2>
        <div className="flex justify-center">
          <div className="image-container">
            {[Hat, Jacket, Trainer, Pants, Shoes].map((img, index) => (
              <div key={index} className="image-box">
                <img src={img} alt={`member-${index}`} />
                <span className="name">{["帽子", "上着", "トップス", "パンツ・スカート", "靴"][index]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

//こんにちは