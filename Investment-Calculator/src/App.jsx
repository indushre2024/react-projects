import UserInput from "./UserInput"
import Result from "./Result"
import {useState} from "react";

const INPUTS = { initialInvestment:15000,
  annualInvestment:900,
  expectedReturn:5.5,
  duration:12} 

function App() {
  const [inputValues, setInputValues] = useState(INPUTS);

  function handleInputChange(target, value){
    const newValues = {...inputValues};
    newValues[target] = value;
    setInputValues(()=>newValues);
  }

  return (
    <main>
      <UserInput inputValues = {inputValues} handleInputChange={handleInputChange}/>
      <Result inputValues={inputValues}></Result>
    </main>
  )
}

export default App
