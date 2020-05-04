export default (state = '', action) => {
  const { id } = action;
  switch (action.type) {
    case 'UPDATE_SELECTED':
      const newSelected = { ...state[id], id: action.id };
      return newSelected;
    default:
      return state;
  }
};
