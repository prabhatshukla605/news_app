import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const Body = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.inshorts.com/api/en/news?category=top_stories&max_limit=10&include_card_data=true"
    );
    const data = await res.json();
    setNews(data.data.news_list);
    setIsLoading(false);
  };

  return (
    <div className="wrapper">
      {isLoading ? <h1>Loading....</h1> : news.map((curr) => (
        <NewsCard key={curr.hash_id} data={curr.news_obj} />
      ))}
      {/* {isLoading ? <h1>Loading....</h1> : <NewsCard data={news} />} */}
    </div>
  );
};

export default Body;
