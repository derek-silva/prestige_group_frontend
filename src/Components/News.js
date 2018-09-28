import React, { Component } from "react";
import Article from "./Article.js";

export default class News extends Component {
  constructor() {
    super();

    this.state = {
      Articles: []
    };
  }

  fetchNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?sources=the-wall-street-journal&apiKey=1240d6f804a4436f8b5c5cc8cfecdd6e`
    )
      .then(res => res.json())
      .then(newsArray => this.setState({ Articles: newsArray }));
  };

  renderNews = () => {
    return this.state.Articles.length === 0 ? (
      <h5 align="center">Loading...</h5>
    ) : (
      this.state.Articles.articles.map(article => <Article article={article} />)
    );
  };

  componentDidMount() {
    this.fetchNews();
  }

  render() {
    return (
      <div
        style={{
          width: "1000px",
          margin: "auto"
        }}
      >
        <h1 className="header center indigo-text">Recent Articles</h1>
        {this.renderNews()}
      </div>
    );
  }
}
