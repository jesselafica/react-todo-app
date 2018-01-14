var React = require("react");
var ReactDOM = require("react-dom");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");
var Main = require("Main");
var Checklist = require("Checklist");

// Load foundation
require("style!css!foundation-sites/dist/foundation.min.css");
require("style!css!sass!appStyles");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Checklist } />
    </Route>
  </Router>,
  document.getElementById("app")
);
