import { useState } from 'react';
import './App.css'
import Card from './componenets/Card/Card'
import Counter from './componenets/Counter/Counter';
import Clock from './componenets/Clock/Clock'
import UserCard from './componenets/UserCard/UserCard';
import UserLoader from './container/UserLoader/UserLoader';

function App() {
  const [thingShown, setThingShown] = useState(true);
  return (
    // <>
    // <button 
    //   onClick={() => {setThingShown(!thingShown);
    //     }}
    //   >
    //     {thingShown ? "Hide" : "Show"} thing
    // </button>
    // {thingShown && (
    //     //<Card title="Example Card" content="blah blah blah some text"/>
    //     // <Counter/>
        
    //   )}
    // </>
    <UserLoader />
  )
}

export default App
