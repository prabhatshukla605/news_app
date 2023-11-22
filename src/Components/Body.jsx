import React, { useEffect, useState } from "react";
import { getNews } from "inshorts-news-api";
import NewsCard from "./NewsCard";

const Body = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let options = {
    language: "en",
    category: "",
  };

  const fetchData = async () => {
    const data = await getNews(options);
    setNews(data.news);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        news.map((curr) => <NewsCard key={curr.hash_id} data={curr.news_obj} />)
      )}
      {/* {isLoading ? <h1>Loading....</h1> : <NewsCard data={news} />} */}
    </div>
  );
};

export default Body;
