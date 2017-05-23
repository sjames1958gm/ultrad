import React from "react";
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from "Main";
import UltraDApp from "UltraDApp";
import HittingStats from "HittingStats";
import PitchingStats from "PitchingStats";
import FAHittersCurrent from "FAHittersCurrent";
import FAPitchersCurrent from "FAPitchersCurrent";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={UltraDApp}/>
      <Route path="hitting-stats" component={HittingStats} />
      <Route path="pitching-stats" component={PitchingStats} />
      <Route path="fa-hitters-current" component={FAHittersCurrent} />
      <Route path="fa-pitchers-current" component={FAPitchersCurrent} />
    </Route>
  </Router>
);
