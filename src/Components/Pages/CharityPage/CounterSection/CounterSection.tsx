import { useEffect, useState } from "react";
import Counter from "./Counter/Counter";
import "./CounterSection.css";

const CounterSection : React.FC = () => {
    const [condition, setCondition] = useState<boolean>(false);

    useEffect(() => {
        const section : HTMLElement = document.getElementById("counter_wrapper")!;

        const refreshCondition = () => {
            let rect : DOMRect = section.getBoundingClientRect();
            console.log(Math.floor(rect.y - window.innerHeight + 170));
            if (Math.floor(rect.y - window.innerHeight + 170) < 0) {
                setCondition(true);
                document.removeEventListener('scroll', refreshCondition);
            }
        }
        document.addEventListener('scroll', refreshCondition);
    }, []);

    return (
        <section id="section_counter">
            <h2>Количество ДДП за 2022 год</h2>
            <p>Ежегодно на дорогах Беларуси гибнет более полутысячи человек</p>
            <div id="counter_wrapper">
                <div>
                    <Counter time={3} val={551} coef={1} condition={condition}></Counter>
                    <hr />
                    <p>ДТП со смертельным исходом в 2022 году</p>
                </div>
                <div>
                    <Counter time={1} val={3678} coef={3} condition={condition}></Counter>
                    <hr />
                    <p>ДТП с человеческими жертвами в 2022 году</p>
                </div>
                <div>
                    <Counter time={150} val={13} coef={1} condition={condition}></Counter>
                    <hr />
                    <p>ДТП со смертельным исходом в 2022 году</p>
                </div>
                <div>
                    <Counter time={3} val={561} coef={1} condition={condition}></Counter>
                    <hr />
                    <p>ДТП с пострадавшими в 2022 году</p>
                </div>
            </div>
        </section>
    );
}

export default CounterSection;