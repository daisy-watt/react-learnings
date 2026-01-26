import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const tick = () => {
        console.log('tick');
        setTime(new Date())
    }
    useEffect(() => {
        const tickInterval = setInterval(tick, 1000);
        // cleaning up after ourselves is important
        return () => {
            clearInterval(tickInterval);
        }
    }, [])
    return (
        <h3>{new Date().toLocaleTimeString()}</h3>
    );
}