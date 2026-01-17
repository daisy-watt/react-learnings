import ControlledForm from "./components/ControlledForm/ControledForm"

function App() {
  const formSubmit = (values) => {
    console.log("form submitted with: ", values);
  };
  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>forms</h1>
      <ControlledForm formSubmit={formSubmit}/>
    </section>

  )
}

export default App
