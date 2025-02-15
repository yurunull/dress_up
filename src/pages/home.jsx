import React from "react";
import Top from "../images/top.jpg";
import Mai from "../assets/mai.jpg";
import Miyuki from "../assets/miyuki.jpg";
import Honoka from "../assets/honoka.jpg";
import Rioko from "../assets/rioko.jpg";
import Haruka from "../assets/haruka.jpg";

const Home = () => {
  return (
    <>
      <section id="hero" className="mb-12">
        <div className="relative -mx-[32px]">
          <img src={Top} alt="top" className="w-full" />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-4xl lg:text-5xl font-bold pop">
            きとあすまとめさいと
          </h1>
        </div>
      </section>

      <section id="member" className="mb-12">
        <h2 className="subtitle pop text-waterblue text-left text-5xl mb-10">
          種類
        </h2>
        <div className="flex">
          <div className="image-container">
            {[Mai, Miyuki, Honoka, Rioko, Haruka].map((img, index) => (
              <div key={index} className="image-box">
                <img src={img} alt={`member-${index}`} />
                <span className="name">{["池田麻衣", "久保みゆき", "岸村帆栞", "藤田梨緒子", "山田悠加"][index]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rule" className="mb-12">
        <h2 className="subtitle pop text-waterblue text-left text-5xl mb-10">
          Site Rule
        </h2>
        <div className="p-4 mb-2 border-2 border-dashed border-paleyellow">
          <ul className="rule_list list-none p-0 text-left">
            {["このサイト内のものを漏洩したり、パスワードを他人に教えたりしないでね", 
              "作品や写真などは追加できるようになってるよ！動画は私にContact Formでギガファイル便のリンクを貼って送ってね", 
              "写真や作品などは、きとあすに関係あるものだったらどんどん載せてね！", 
              "このサイトでつけてほしい機能とかあったら教えて！大体いけると思う！！", 
              "このサイトを使ってくれると山田がとっても喜びます💕"].map((text, index) => (
              <li key={index} className="relative mb-5 pl-8 before:content-['▶'] before:absolute before:left-0 before:top-0 before:text-waterblue before:text-2xl">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="news" className="mb-20 py-12">
        <h2 className="subtitle pop text-waterblue text-left text-5xl mb-10">
          News
        </h2>
        <ul className="news_list mx-5">
          {["問い合わせフォームを設置しました。", "カレンダー機能を追加"].map((news, index) => (
            <li key={index} className="news_list_item border-t border-b border-gray-300 py-6">
              <a href={`/news${3 - index}`} className="flex items-center relative pr-8">
                <div className="news_list_date flex items-center text-sm mr-4">
                  <time>2024.09.05</time>
                  <p className="news_item bg-[#40a2fd] rounded-lg text-white text-center ml-5 w-24 h-5 flex items-center justify-center">
                    お知らせ
                  </p>
                </div>
                <p>{news}</p>
                <span className="news_detail absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-waterblue">
                  ⇒
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;