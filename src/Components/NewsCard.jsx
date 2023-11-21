import React from "react";

const NewsCard = ({ data }) => {
  const date = new Date(data.created_at);
  const time = date.toLocaleString("en-IN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const day = date.toLocaleDateString("en-IN", { weekday: "long" });

  return (
    <div className="card">
      <img src={data.image_url} alt="Image" />
      <div className="description">
        <h2 className="headline">{data.title}</h2>
        <p className="date">
          {time} on {day}
        </p>
        <p className="content">{data.content}</p>
        <p className="source">
          read more at
          <a className="link" target="_blank" href={data.source_url}>
            {" " + data.source_name}
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
