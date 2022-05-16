export const makeArrayFromStorage = (sessionStorage, value) =>
  sessionStorage ? [...sessionStorage, value] : [value];
