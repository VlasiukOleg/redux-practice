export const increamentValue = step => {
  return {
    type: 'total/increment',
    payload: step,
  };
};

export const decreamentValue = step => {
  return {
    type: 'total/decrement',
    payload: step,
  };
};
