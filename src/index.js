import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArticalList from "./Artical/ArticalList";
import Header from "./Template/Header";
import Footer from "./Template/Footer";
import SingleArtical from "./Artical/SingleArtical";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

render(
  <Router>
    <div>
      <Route path="/" component={Header} />
      <div className="main">
        <Route exact path="/" component={ArticalList} />
        <Route path="/:slug" component={SingleArtical} />
      </div>
      <Route path="/" component={Footer} />
    </div>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
