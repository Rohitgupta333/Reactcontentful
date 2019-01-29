import React, { Component } from "react";
import client from "./service";

class SingleArtical extends Component {
  constructor() {
    super();
    this.state = {
      article: []
    };
  }

  componentDidMount() {
    const rohit = this.props.match.params.slug;

    client
      .getEntries({ content_type: "post", "fields.slug": rohit })
      .then(response => {
        this.setState({ article: response.items });
      });
  }

  render() {
    let MainData = this.state.article;
    console.log(MainData);

    const SingleDataMain = MainData.map((Data,index) => (
      <div key="index">
        <div className="feature-banner">
          <img src={Data.fields.featureImage.fields.file.url} />
        </div>
        <div className="main-content">
          <div className="container">
            <h2>{Data.fields.title}</h2>
            <div className="author">
              <img src={Data.fields.author.fields.avatar.fields.file.url} />
              <strong>{Data.fields.author.fields.fullName}</strong>
            </div>
            <p>{Data.fields.content}</p>
          </div>
        </div>
      </div>
    ));

    return <div className="single-page">{SingleDataMain}</div>;
  }
}

export default SingleArtical;
