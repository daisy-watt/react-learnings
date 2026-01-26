# Use Effect

- a hook for performing **side effects** based on changes to a component 
- useEffect is one of the most misunderstood/poorly used hooks
    - lots of devs say you should never use it / that it was a mistake
- some of this lesson will **not** be best practice
    - particularly fetching data
React 19 will introduce the 'use' hook so we might not even need useEffect anymore

## what is a side effect?

- Anything outside of Reacts direct controll
- Any action or behavior that is outside of state/props/virtual dom
    - Updating the title of the document (we have to use the document api)
    - setting intervals or timeouts (window)
    - subscribing to websockets
    -fetching data from external API's (fetch request)

## Componenet Lifecycle

- a mental model for whats happening with React compoenets
- based on **class** componenets
- A **better** mental model is thinking about componenets in terms of their state changing
- this model is extermly pervasive, lots of developers will speak in these terms, therfore worth knowing
    1. Load - _before_ the compoenent renders
    2. Mount - the first time a compoenent renders/attached to the DOM
    3. Update - When a componenet re-renders because of a cyhange in props or state 
    4. Unmount - when a component is removed from the dom
- in class compoenents we has methods `componenetDidMount` `componentDidUpdate` `comppnenetWillUpdate` `componenetWillUnmount`
- useEffect replaces all these methods

## Strict Mode/Dev mode
    - in React 18+ in dev mode only, componenets mount then unmount then mount again
        - this means all effecrs run **twice**
        - this **only** happens in dev not in prod
        - Its part of a bigger feature that may or may not be finished
        - dontstress if you effects run twice
        - easily googlable solutions..
        - or just remove strict mode