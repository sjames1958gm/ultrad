/* global $ */
var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require('react-redux');
require("font-awesome-webpack");

import router from 'app/router';

var store = require('configureStore').configure();

// Load foundation
$(document).foundation();

// App css (sccs/sass)
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
