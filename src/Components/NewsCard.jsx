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
    <div className="bg-yellow-300 flex gap-3 w-10/12 h-80 p-4 rounded-md">
      <img className="w-80 rounded-md" src={data.image_url} alt="Image" />
      <div className="p-2.5">
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <p className="font-thin">
          {time} on {day}
        </p>
        <p className="font-semibold">{data.content}</p>
        <button className="border-2 border-black text-white font-semibold bg-slate-900 rounded-md px-2 py-1">
          <a className="link" target="_blank" href={data.source_url}>
            Read more
          </a>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
