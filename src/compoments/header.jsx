import React from "react";
import "../../styles/styles.css";
import "../App.css";

const Header = () => {
  return (
    <header className="py-10 md:px-8 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-pink-400 text-Light_brown text-3xl font-HANNARI font-bold">俺らプリキュア</p>

        {/* ナビゲーションメニュー */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-8 text-2xl text-gray-500">
            <li>
              <a
                href="/"
                className="btn btn--pink btn--emboss btn--cubic py-3 px-6 rounded-md hover:border-b-2 hover:border-[#ff1493] active:translate-y-1 transition-all duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/add"
                className="btn btn--pink btn--emboss btn--cubic py-3 px-6 rounded-md hover:bg-[#ff80bf] hover:border-b-2 hover:border-[#ff1493] active:scale-95 transition-all duration-200"
              >
                Add
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="btn btn--pink btn--emboss btn--cubic py-3 px-6 rounded-md hover:bg-[#ff80bf] hover:border-b-2 hover:border-[#ff1493] active:scale-95 transition-all duration-200"
              >
                login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
