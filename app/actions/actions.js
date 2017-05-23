/* global fetch */
export var addRankings = (rankings) => ({
  type: "ADD_RANKINGS", rankings
});

export var startAddRankings = () => {
  return (dispatch, getState) => {
    return fetch("https://api.myjson.com/bins/1b9jw9") //fetch("/rankings")
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
    return fetch("https://api.myjson.com/bins/jzwe1") //fetch("/hitting")
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
    return fetch("https://api.myjson.com/bins/b2ebd") //fetch("/pitching")
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
    return fetch("https://api.myjson.com/bins/1fm0m1") //fetch("/fa-hitters")
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
    return fetch("https://api.myjson.com/bins/18iyih") //fetch("/fa-pitchers")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(addFAPitchers(json));
      });
  };
};

export var addAssignedHitters = (assignedHitters) => ({
  type: "ADD_ASSIGNED_HITTERS", assignedHitters
});

export var startAddAssignedHitters = () => {
  return (dispatch, getState) => {
    return fetch("https://api.myjson.com/bins/11fwex") //fetch("/assigned-hitters")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(addAssignedHitters(json));
      });
  };
};

export var addAssignedPitchers = (assignedPitchers) => ({
  type: "ADD_ASSIGNED_PITCHERS", assignedPitchers
});

export var startAddAssignedPitchers = () => {
  return (dispatch, getState) => {
    return fetch("https://api.myjson.com/bins/1bk9p5") //fetch("/assigned-pitchers")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(addAssignedPitchers(json));
      });
  };
};