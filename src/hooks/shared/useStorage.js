import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  return useStorage(key, defaultValue, window.localStorage);
};
export const useSessionStorage = (key, defaultValue) => {
  return useStorage(key, defaultValue, window.sessionStorage);
};

const useStorage = (key, defaultValue, storageObject) => {
  const [value, setValue] = useState(() => {
    const data = storageObject.getItem(key);
    if (data) return JSON.parse(data);
    if (typeof defaultValue === "function") return defaultValue();
    else return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) storageObject.removeItem(key);
    else {
      storageObject.setItem(key, JSON.stringify(value));
    }
  }, [storageObject, key, value]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);
  return [value, setValue, remove];
};
