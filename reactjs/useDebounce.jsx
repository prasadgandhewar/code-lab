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