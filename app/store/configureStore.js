import * as redux from 'redux';
import thunk from 'redux-thunk';

import {rankingsReducer, hittingReducer, pitchingReducer, 
        fahittersReducer, fapitchersReducer, 
        assignedHittersReducer, assignedPitchersReducer}  from 'reducers';

export var configure = (intialState = {}) => {

  var reducer = redux.combineReducers({
    rankings: rankingsReducer,
    hitting: hittingReducer,
    pitching: pitchingReducer,
    fahitters: fahittersReducer,
    fapitchers: fapitchersReducer,
    assignedHitters: assignedHittersReducer,
    assignedPitchers: assignedPitchersReducer
  });

  return redux.createStore(reducer, 
    intialState, 
    redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f));
};