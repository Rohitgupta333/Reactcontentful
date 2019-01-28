import React, { Component } from "react";
import client from "./service";

class SingleArtical extends Component {
  constructor() {
    super();
    this.state = {
      article: null
    };
  }

  componentDidMount() {
    const rohit = this.props.match.params.slug;

    client
      .getEntries({ content_type: "post", "fields.slug": rohit })
      .then(response => {
        this.setState({ article: response.items });
        console.log(response.items);
      });
  }

  render() {
    let MainData = this.state.article + "Rohit";
    console.log(MainData);

    // const listItems = MainData.map(number => <li>{number}</li>);

    // if (!MainData) {
    //   console.log("No data Found");
    // }
    return (
      <div className="container">
        <div className="row">
          <h1>{this.props.match.params.slug}</h1>
        </div>
      </div>
    );
  }
}

export default SingleArtical;
