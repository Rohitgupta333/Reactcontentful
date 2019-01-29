import React, { Component, PropTypes } from "react";

class ArticalListItem extends Component {
  render() {
    const { article } = this.props;
    console.log(article);
    return (
      <div className="ArticalListItem col-md-12">
        <section className="Post">
          <div className="banner">
            <img src={article.fields.featureImage.fields.file.url} />
          </div>
          <div className="details">
            <h2 className="title">
              <a href={article.fields.slug}>{article.fields.title}</a>
            </h2>
            <div className="author">
              <img src={article.fields.author.fields.avatar.fields.file.url} />
              <strong>{article.fields.author.fields.fullName}</strong>
            </div>
            <p>{article.fields.content}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default ArticalListItem;
