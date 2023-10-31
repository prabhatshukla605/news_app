import React, { useEffect, useState } from "react";
import News from "./News";

const Main = () => {
  // let headline;
  // let image;
  // let hashtag;
  // let date;

  const [items, setItems] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://linesnews.onrender.com/api/news-datas "
      );
      const data = await response.json();
      console.log(data);
      setItems({
        headline: data.data[0].attributes.headline,
        image: data.data[0].attributes.newsIcon,
        hashtag: data.data[0].attributes.hashtags.split(","),
        date: new Date(data.data[0].attributes.publishedAt),
      });
      setFetched(true);
    };
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <div className="main-wrapper">{fetched && <News data={items} />}</div>
    </div>
  );
};

export default Main;
