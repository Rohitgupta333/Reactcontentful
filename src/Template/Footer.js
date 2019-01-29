import React, { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      FooterData: []
    };
  }

  render() {
    return (
      <div className="Footer">
        <div className="container">
          <span>Just FOr Leraning React js With Contentful</span>
        </div>
      </div>
    );
  }
}

export default Footer;
