const { useRef, useState } = require("react");


function useDebounce(timer, value) {

    const timerRef = useRef(null);
    const [val, setVal] = useState();
    
    if (timerRef.current) {
        clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
        clearTimeout(timerRef.current);
        setVal(value);
    }, timer);

    return val;
}

// =========================================================================

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer); // cleanup on value change/unmount
  }, [value, delay]);

  return debouncedValue;
}