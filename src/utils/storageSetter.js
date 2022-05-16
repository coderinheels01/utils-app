export const storageSetter = (sessionStorage, value) =>
  sessionStorage ? [...sessionStorage, value] : [value];
