import Header from "./components/Header"; // Importing the Header component
import Results from "./components/Results"; // Importing the Results component
import UserInput from "./components/UserInput"; // Importing the UserInput component
import { useState } from "react"; // Importing the useState hook from React

function App() {
  // Initializing state with useState hook
  const [userInput, setUserInput] = useState({
    initialInvestment: 0, // Initial value for initial investment
    annualInvestment: 1200, // Initial value for annual investment
    expectedReturn: 6, // Initial value for expected return
    duration: 10 // Initial value for duration
  });

  // Function to handle changes in user input
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput, // Spread the previous state
        [inputIdentifier]: +newValue // Update the specific field with new value
      };
    });
  };

  // Each time the user types something in the field, the React state will be updated with the new value for initialInvestment,
  // and this updated value will be reflected in the input, creating a continuous link between the state and the interface.

  return (
    <>
      <Header /> {/* Rendering the Header component */}
      <UserInput userInput={userInput} onChange={handleChange} /> {/* Rendering the UserInput component and passing props */}
      <Results input={userInput} /> {/* Rendering the Results component and passing props */}
    </>
  );
}

export default App; // Exporting the App component as default
