import { useState } from 'react';
import ControlledForm from "./components/ControlledForm/ControledForm";
import UnControlledForm from "./components/UnControlledForm/UnControlledForm";

function App() {
  const [registeredUser, setRegisteredUser] = useState(null);
  const formSubmit = (values) => {
    setRegisteredUser(values);
    console.log("form submitted with: ", values);
  };
  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>forms</h1>
      {/* <ControlledForm formSubmit={formSubmit}/> */}
      <UnControlledForm formSubmit={formSubmit}/>;
      {registeredUser && (<div>
        <h2>Thanks for registering: {registeredUser.username}</h2>
      </div>)}
    </section>

  )
}

export default App
