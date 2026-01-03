import React from "react";
import { UseMyNewsContext } from "../context/MyNewsContext";

const Category = () => {
  const { fetchNewsApi, setNews } = UseMyNewsContext();
  const buttonArr = [
    "Business",
    "Animals",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  const handleCategogy = async (e) => {
    const cat = e.target.value;
    const { data } = await fetchNewsApi(`everything?q=${cat}`);
    setNews(data?.articles);
  };
  return (
    <nav className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
        {buttonArr.map((item) => (
          <button
            key={item}
            value={item}
            onClick={handleCategogy}
            className="shrink-0 bg-white border border-gray-200 hover:bg-indigo-50 text-gray-700 py-2 px-4 rounded-full text-sm font-medium shadow-sm"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Category;
