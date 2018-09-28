import React from "react";

export default ({ article }) => {
  return (
    <div className="row">
      <div className="card hoverable">
        <div className="card-image">
          <img src={article.urlToImage} alt="" />
          <span className="card-title">{article.title}</span>
        </div>
        <div className="card-content">
          <p>{article.content}</p>
        </div>
        <div className="card-action">
          <a href={article.url} target="_blank">
            Go To Article
          </a>
        </div>
      </div>
    </div>
  );
};
