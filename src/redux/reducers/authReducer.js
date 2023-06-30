// authReducer.js

const initialState = {
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_IN_SUCCESS":
        return {
          ...state,
          loading: false,
          error: null,
          // Set any relevant authentication data in the state
        };
      case "SIGN_IN_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case "SIGN_UP_SUCCESS":
        return {
          ...state,
          loading: false,
          error: null,
          // Set any relevant authentication data in the state
        };
      case "SIGN_UP_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  