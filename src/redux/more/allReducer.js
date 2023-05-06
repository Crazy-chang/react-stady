const initialState = { title: '', content: '' };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.data };
    case 'SET_CONTENT':
      return { ...state, content: action.data };
    default:
      return state;
  }
};

export default postReducer;