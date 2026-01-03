import React, { useRef } from "react";
import { UseMyNewsContext } from "../context/MyNewsContext";

const Header = () => {
  const { fetchNewsApi, setNews } = UseMyNewsContext();
  const timerId = useRef(null);

  const handleSearch = (e) => {
    const searchVal = e.target.value;
    clearTimeout(timerId.current);
    try {
      timerId.current = setTimeout(async () => {
        const { data } = await fetchNewsApi(`everything?q=${encodeURIComponent(searchVal)}`);
        setNews(data?.articles);
      }, 1000);
    } catch (err) { 
      console.log("Error Api fetching", err);
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white rounded-full w-12 h-12 grid place-items-center text-xl font-bold">S</div>
          <div>
            <h1 className="text-2xl font-semibold">Satya News</h1>
            <p className="text-sm text-gray-500">Top headlines &amp; latest stories</p>
          </div>
        </div>
        <div className="w-full sm:w-[60%] lg:w-[45%]">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
            </span>
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search news, topics, authors..."
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 shadow-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
