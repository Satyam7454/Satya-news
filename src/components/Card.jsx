import React from "react";
import { UseMyNewsContext } from "../context/MyNewsContext";

const Card = ({ news = [] }) => {
  const { loading } = UseMyNewsContext();

  if (loading && (!news || news.length === 0)) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <article key={i} className="bg-white rounded-lg overflow-hidden shadow animate-pulse">
              <div className="w-full h-48 bg-gray-200" />
              <div className="p-4">
                <div className="h-3 bg-gray-200 rounded w-1/4 mb-3" />
                <div className="h-5 bg-gray-200 rounded w-11/12 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-10/12 mb-4" />
                <div className="flex items-center justify-between">
                  <div className="h-8 bg-gray-200 rounded w-24" />
                  <div className="h-6 bg-gray-200 rounded w-20" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {news?.map((item, index) => {
          if (!item.urlToImage) return null;
          return (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 flex flex-col">
              <div className="w-full h-48 bg-gray-100">
                <img src={item.urlToImage} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">{item.source?.name || "Source"}</span>
                  <time className="text-xs text-gray-400">{item.publishedAt ? new Date(item.publishedAt).toLocaleDateString() : ""}</time>
                </div>
                <h2 className="text-lg font-semibold line-clamp-2 mb-2">{item?.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">{item?.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <button
                    onClick={() => window.open(`${item?.url}`, "_blank")}
                    className="bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm"
                  >
                    Read More
                  </button>
                  <span className="text-xs text-gray-500">{item.author ? `By ${item.author}` : ""}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
