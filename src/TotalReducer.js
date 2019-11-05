function TotalReducer(state, action) {
  const { total, invocationHistory } = state;
  switch (action.type) {
    case 'triple':
      return {
        total: total * 3,
        lastAction: 'Triple',
        invocationHistory: {
          ...invocationHistory,
          triple: [...invocationHistory.triple, total],
        },
      };
    case 'half':
      return {
        total: Math.ceil(total / 2),
        lastAction: 'Half',
        invocationHistory: {
          ...invocationHistory,
          half: [...invocationHistory.half, total],
        },
      };
    default:
      return state;
  }
}

export default TotalReducer;
