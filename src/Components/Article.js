import React from "react";

export default ({ article }) => {
  return (
    <div class="row">
      <div class="card">
        <div class="card-image">
          <img src={article.urlToImage} />
          <span class="card-title">{article.title}</span>
        </div>
        <div class="card-content">
          <p>{article.content}</p>
        </div>
        <div class="card-action">
          <a href={article.url} target="_blank">
            Go To Article
          </a>
        </div>
      </div>
    </div>
  );
};
