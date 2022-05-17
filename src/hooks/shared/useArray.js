import { useState } from "react";

export const useArray = defaultArray => {
  const [array, setArray] = useState(defaultArray);
  const push = element => {
    setArray(prevArray => [...prevArray, element]);
  };

  const filter = callback => setArray(prevArray => prevArray.filter(callback));

  const update = (index, element) => {
    if (index > array.length || index < 0) {
      alert("Index out of bound");
      return;
    }
    setArray(prevArray => [
      ...prevArray.slice(0, index),
      element,
      ...prevArray.slice(index + 1, prevArray.length)
    ]);
  };

  const remove = index => {
    if (index > array.length || index < 0) {
      alert("Index out of bound");
      return;
    }

    setArray(prevArray => [
      ...array.slice(0, index),
      ...array.slice(index + 1, array.length)
    ]);
  };

  const clear = () => {
    setArray([]);
  };
  return { array, set: setArray, filter, push, update, remove, clear };
};
