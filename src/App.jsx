import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from "react"


function App() {

  const [userInput, setUserInput] =useState({
    initialInvestment: 0,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const handleChange= (inputIdentifier, newValue) =>{
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: newValue
      }
  })
  
}

//Cada vez que o usuário digitar algo no campo, o estado do React será atualizado com o novo valor para initialInvestment, 
//e esse valor atualizado será refletido no input, criando uma ligação contínua entre o estado e a interface.

  return (
    <>
      <Header />
      <UserInput userInput = {userInput} onChange={handleChange}/>
      <Results input={userInput}/>
    </>
  )
}

export default App
