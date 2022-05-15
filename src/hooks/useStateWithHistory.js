import { useCallback, useRef, useState } from "react";

export const useStateWithHistory = (value, capacity = 10) => {
  const [currentValue, setCurrentValue] = useState(value);
  const historyRef = useRef([value]);
  const currentPointerRef = useRef(0);

  const set = useCallback(
    v => {
      const resolvedValue = typeof v === "function" ? v(value) : v;
      if (historyRef.current[currentPointerRef.current] !== resolvedValue) {
        if (currentPointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(currentPointerRef.current + 1);
        }
        historyRef.current.push(resolvedValue);
        while (historyRef.current.length > capacity) {
          historyRef.current.shift();
        }
        currentPointerRef.current = historyRef.current.length - 1;
      }
      setCurrentValue(resolvedValue);
    },
    [value, capacity]
  );

  const back = useCallback(() => {
    if (currentPointerRef.current <= 0) return;
    currentPointerRef.current--;
    setCurrentValue(historyRef.current[currentPointerRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (currentPointerRef.current >= historyRef.current.length - 1) return;
    currentPointerRef.current++;
    setCurrentValue(historyRef.current[currentPointerRef.current]);
  }, []);

  const go = useCallback(index => {
    if (index < 0 || index > historyRef.current.length) return;
    setCurrentValue(historyRef.current[index]);
  }, []);

  return [
    currentValue,
    set,
    {
      history: historyRef.current,
      pointer: currentPointerRef.current,
      back,
      forward,
      go
    }
  ];
};
