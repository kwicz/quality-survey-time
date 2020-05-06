export default (state = '', action) => {
  const { surveyId, authorEmail, authorId, name, survey } = action;

  switch (action.type) {
    case 'UPDATE_SELECTED':
      const newSelected = { surveyId, authorEmail, authorId, name, survey };
      return newSelected;
    default:
      return state;
  }
};
