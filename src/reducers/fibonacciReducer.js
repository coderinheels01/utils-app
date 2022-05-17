import {
  CALCULATE_FIBONACCI_CLEAR,
  CALCULATE_FIBONACCI_FAILURE,
  CALCULATE_FIBONACCI_REQUEST,
  CALCULATE_FIBONACCI_SUCCESS
} from "../actions/actionTypes";

const fibonacciInitialState = {
  fibonacci: [],
  error: null,
  loading: false
};
export const fibonacciReducer = (state = fibonacciInitialState, action) => {
  switch (action.type) {
    case CALCULATE_FIBONACCI_REQUEST:
      return { ...state, error: null, loading: true };
    case CALCULATE_FIBONACCI_SUCCESS:
      return {
        ...state,
        fibonacci: [...state.fibonacci, { n: action.n, data: action.data }],
        loading: false
      };
    case CALCULATE_FIBONACCI_FAILURE:
      return { ...state, error: action.error, loading: false };
    case CALCULATE_FIBONACCI_CLEAR:
      return { ...fibonacciInitialState };
    default:
      return state;
  }
};
