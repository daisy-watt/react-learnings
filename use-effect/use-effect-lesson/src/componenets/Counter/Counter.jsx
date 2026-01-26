import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count: ${count}`;
        // be careful, you might run your cleanup too often
        // the cleanup function also runs every time count changes
        // return () => {
        //     console.log("this runs")
        //     document.title = 'useEffect';
        // }
    }, [count]);

    useEffect(() => {
        return () => {
            console.log("This runs")
            document.title = 'useEffect';
        }
    }, [])
    return (

        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}