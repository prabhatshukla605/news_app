import React from "react";

const News = (props) => {
  const date = props.data.date.getDate();
  const day = props.data.date.toLocaleDateString("en-us", { weekday: "long" });

  console.log(props);
  return (
    <div id="container">
      <div className="card">
        <img className="card__image" src={props.data.image} alt="Image" />

        <div className="card__details">
          <div>
            {props.data.hashtag.map((item) => (
              <span key={Math.random()} className="tag">
                {item}
              </span>
            ))}
            {/* <span className="tag">{props.data.hashtag}</span> */}
          </div>

          <div className="name">{props.data.heading}</div>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, in
            accusantium. Inventore, voluptate velit. Asperiores dolore, quas
            labore delectus, laborum eligendi dolorum magni aspernatur deserunt
            aperiam illo fugiat est commodi?
          </p>
          <p className="date">{`8:30 pm on ${day}, ${date} October, 2023`}</p>
          <p className="source">Source: Google, Youtube</p>
        </div>
      </div>
    </div>
  );
};

export default News;
