export var rankingsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_RANKINGS":
      return action.rankings;
    default:
      return state;
  }
};

export var hittingReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_HITTING":
      return action.hitting;
    default:
      return state;
  }
};

export var pitchingReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PITCHING":
      return action.pitching;
    default:
      return state;
  }
};
