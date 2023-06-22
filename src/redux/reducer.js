const counterInitialState = {
  total: 0,
  step: 1,
  counterClick: 0,
};

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case 'total/increment':
      return { ...state, total: state.total + action.payload };

    case 'total/decrement':
      return { ...state, total: state.total - action.payload };

    default:
      return state;
  }
};
