import axios from "axios";
import { createContext, useContext, useState } from "react";

const MyNewsContext = createContext();

const MyNewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const fetchNewsApi = async (url = "everything?q=india") => {
    const res = await axios(
      `https://newsapi.org/v2/${url}&apiKey=9bb6b7a6373e4a7aae61c33c83b3c860`
    );
    return res;
  };

  const value = {
    fetchNewsApi,
    news,
    setNews,
  };
  return (
    <MyNewsContext.Provider value={value}>{children}</MyNewsContext.Provider>
  );
};

const UseMyNewsContext = () => {
  return useContext(MyNewsContext);
};

export { MyNewsContextProvider, UseMyNewsContext };

