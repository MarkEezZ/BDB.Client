import { useEffect, useState } from "react";
import "./Counter.css";

type CounterProps = {
    val: number,
    time: number,
    coef: number,
    condition: boolean
}

const Counter : React.FC<CounterProps> = ({ val, time, coef, condition }) => {
    const [ currVal, setCurrVal ] = useState(0);
  
    useEffect(() => {
        if (condition) {
            currVal !== val && setTimeout(setCurrVal, time, currVal + 1 * coef);            
        }
    }, [ currVal, condition ]);
  
    return <p className="counter">{currVal}</p>;
}

export default Counter;