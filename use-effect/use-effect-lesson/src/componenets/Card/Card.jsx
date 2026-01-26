import { useEffect, useState } from "react";

const Card = ({title, content}) => {
    const [contentShown, setContentShown] = useState(false);
    const [count, setCount] = useState(0);
// when we call useeffect with no dependancy array the function runs on mount
// and also on every re render
// sometimes we do need side effects to run on every re render
    useEffect(() => {
        console.log("Card Rendered");
    })

// when we call useEffect with an **empty** dependacy array then the effect only runs on componenet mount
// very common pattern
// things like API calls etc

    useEffect(() => {
        console.log('Card Mounted');
        // the return value from a useEffect function must be a function
        // that function is used for clean up
        return () => {
            console.log("this cleanup function runs when the componenet is unmounted"   
            );
        };
    }, []);

    // when we have things in our dependancy array (state or props) 
    // the effect only runs when those things change
    // we'll watch for count
    // big goctha here is this will run on mount as well. 
    // think of it as the state/prop going from nothing to existing

useEffect(() => {
    console.log("count changed: ", count)
}, [count]);

    return <div>
        <h2>{title}</h2>
        <button onClick={() => setContentShown(!contentShown)}>
            {contentShown ? 'Hide' : 'Show'} Content
        </button>
            {contentShown && <p>{content}</p>}
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
}

export default Card;