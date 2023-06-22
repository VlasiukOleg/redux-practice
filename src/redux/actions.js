export const incrementValue = step => {
  return {
    type: 'total/increment',
    payload: step,
  };
};

export const decrementValue = step => {
  return {
    type: 'total/decrement',
    payload: step,
  };
};
