import React, { useEffect } from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import { UseMyNewsContext } from "./context/MyNewsContext";
import Card from "./components/Card";


const App = () => {
  const { fetchNewsApi, news, setNews } = UseMyNewsContext();
  useEffect(() => {
    (async () => {
      const { data } = await fetchNewsApi();
      setNews(data?.articles);
    })();
  }, []);
  return (
     <div className="min-h-screen bg-gray-50">
      <Header />
      <Category />
      <Card news={news} />
    </div>
  );
};

export default App;
