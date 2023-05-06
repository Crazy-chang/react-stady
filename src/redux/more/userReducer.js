const initialState = { name: '', age: 0 };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.data };
    case 'SET_AGE':
      return { ...state, age: action.data };
    default:
      return state;
  }
};

export default userReducer;