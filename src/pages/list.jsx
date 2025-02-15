import React from "react";
import "./list.css";

const Slideshow = ({ items, title }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="wrap">
        <div className="slideshow">
          {[...Array(3)].map((_, index) => (
            <ul key={index} className="slide">
              {items.map((item, idx) => (
                <li key={idx} className="content-hover">{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const jackets = ["ジャケット１", "ジャケット２", "ジャケット３", "ジャケット４"];
  const tops = ["トップス１", "トップス２", "トップス３", "トップス４"];
  const pants = ["ズボン１", "ズボン２", "ズボン３", "ズボン４"];

  return (
    <div>
      <h2 className="text-4xl font-bold mb-6">登録した服一覧</h2>
      <Slideshow items={jackets} title="ジャケット" />
      <Slideshow items={tops} title="トップス" />
      <Slideshow items={pants} title="ズボン" />
    </div>
  );
};

export default App;