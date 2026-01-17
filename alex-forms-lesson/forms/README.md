# Forms
- huge part of web dev
- seem simple but get complicated quickly
    - multi part forms
    - forms that interact with different parts of the application
    - complex sort/filter/search etc
- primary mechanism for interaction with most apps
- core API is **very** powerful
- types of products that exisit cause forms are **hard**
    - formspree
    - hubspot
    - google forms
    - microsoft forms

## React forms
- 3 common ways / approaches
    - controlled components (useState)
    - uncontrolled components (useRef)
    - other libs
        libs (libraries exist cause forms are hard lol)

### controlled forms 
- controlled componenets value is **determined** by its state
- because the value is in **state** React **always** knows what the value is

#### pros
- gives finely grained control of the form
    - can render things based on the state of our form
- great for complex interactions, responsive uis and ux

#### cons
- state management 
    - makes us write more code
    - have to maintain the state
    - code becomes more complex
- performance
    - lots of re rendering

### uncontrolled forms
- value of inputs grabbed in another way
    - form submit event
    - refs 
    - formData webAPI
- dont know about the field values until clicked submit

#### pros
- better performance
    - les re-renders
- less code
    - dont have to manage state
- simpler UI / less cluttered

#### cons
- less responsive ui
    - error msgs out of date
- formData API a little clunky
    - harder to get the data we need
    - confusing sometimes
- we may sometimes **need** conditional rendering