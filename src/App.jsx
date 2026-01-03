import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import { UseMyNewsContext } from "./context/MyNewsContext";
import Card from "./components/Card";


const App = () => {
  const { fetchNewsApi, news, setNews, loading } = UseMyNewsContext();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchNewsApi();
        setNews(data?.articles);
      } catch (err) {
        // keep it simple for now — could add error state
        console.error(err);
      }
    })();
  }, [fetchNewsApi, setNews]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Category />
      <Card news={news} />

      {/* Full-screen loader on initial load */}
      {loading && (!news || news.length === 0) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
          <div className="animate-spin rounded-full h-14 w-14 border-4 border-t-indigo-600" />
        </div>
      )}
    </div>
  );
};

export default App;
