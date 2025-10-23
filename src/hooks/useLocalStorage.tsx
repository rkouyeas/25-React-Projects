import { useState, useEffect } from "react";

const useLocalStorage = <T,>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    let currentValue: T;

    try {
      const storedValue = localStorage.getItem(key);
      currentValue = storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (err) {
      console.error(err);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
