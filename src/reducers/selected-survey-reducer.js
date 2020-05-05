export default (state = '', action) => {
  const { id, name, question1, answer1, answer2, answer3 } = action;

  switch (action.type) {
    case 'UPDATE_SELECTED':
      const newSelected = { id, name, question1, answer1, answer2, answer3 };
      return newSelected;
    default:
      return state;
  }
};
