import React, { Component } from "react";
import ArticalListItem from "./ArticalListItem";
import client from "./service";

class ArticalList extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    client.getEntries({ content_type: "post" }).then(response => {
      this.setState({ articles: response.items });
    });
  }

  render() {
    const articles = this.state.articles.map((article, i) => (
      <ArticalListItem id={i} key={i} article={article} />
    ));

    return (
      <div className="main-content">
        <div className="container">
          <div className="row">{articles}</div>
        </div>
      </div>
    );
  }
}

export default ArticalList;
