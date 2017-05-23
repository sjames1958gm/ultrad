/* global fetch */
export var addRankings = (rankings) => ({
  type: "ADD_RANKINGS", rankings
});

export var startAddRankings = () => {
  return (dispatch, getState) => {
    return fetch("/rankings")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(addRankings(json));
      });
  };
};

export var addHitting = (hitting) => ({
  type: "ADD_HITTING", hitting
});

export var startAddHitting = () => {
  return (dispatch, getState) => {
    return fetch("/hitting")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(addHitting(json));
      });
  };
};

export var addPitching = (pitching) => ({
  type: "ADD_PITCHING", pitching
});

export var startAddPitching = () => {
  return (dispatch, getState) => {
    return fetch("/pitching")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(addPitching(json));
      });
  };
};

export var addFAHitters = (fahitters) => ({
  type: "ADD_FA_HITTERS", fahitters
});

export var startAddFAHitters = () => {
  return (dispatch, getState) => {
    return fetch("/fa-hitters")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(addFAHitters(json));
      });
  };
};

export var addFAPitchers = (fapitchers) => ({
  type: "ADD_FA_PITCHERS", fapitchers
});

export var startAddFAPitchers = () => {
  return (dispatch, getState) => {
    return fetch("/fa-pitchers")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(addFAPitchers(json));
      });
  };
};
