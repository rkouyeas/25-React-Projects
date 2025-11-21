import { useEffect, useState } from "react";

const useDebounce = <T,>(value: T, delay: number = 200) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
