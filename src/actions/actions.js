import {
  CALCULATE_FIBONACCI_CLEAR,
  CALCULATE_FIBONACCI_FAILURE,
  CALCULATE_FIBONACCI_REQUEST,
  CALCULATE_FIBONACCI_SUCCESS
} from "./actionTypes";

export const calculateFibonacciRequest = () => {
  return {
    type: CALCULATE_FIBONACCI_REQUEST
  };
};

export const calculateFibonacciError = error => {
  return {
    type: CALCULATE_FIBONACCI_FAILURE,
    error
  };
};

export const calculateFibonacciSuccess = (n, data) => {
  return {
    type: CALCULATE_FIBONACCI_SUCCESS,
    n,
    data
  };
};
export const calculateFibonacciClear = () => {
  return {
    type: CALCULATE_FIBONACCI_CLEAR
  };
};
