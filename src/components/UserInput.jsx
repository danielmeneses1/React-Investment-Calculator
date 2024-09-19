//this component is used to take user input, basically

import { useState, useEffect} from "react"

export default function UserInput(){
    const [userInput, setUserInput] =useState({
        initialInvestment: 0,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    useEffect(() => {
        console.log("Initial Investment: ", userInput.initialInvestment);
        console.log("Annual Investment: ", userInput.annualInvestment);
        console.log("Expected Return: ", userInput.expectedReturn);
        console.log("Duration: ", userInput.duration);
    }, [userInput]); // Executa sempre que userInput mudar

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
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                type="number" 
                required 
                value={userInput.initialInvestment}
                onChange={(event)=>
                    handleChange('initialInvestment',event.target.value)
                }
                    
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required
                value={userInput.annualInvestment}
                onChange={(event)=>
                    handleChange('annualInvestment',event.target.value)
                }
                />
            </p>
            <p>
                <label>Expected Return</label>
                <input type="number" required
                value={userInput.expectedReturn}
                onChange={(event)=>
                    handleChange('expectedReturn',event.target.value)
                }
                />
            </p>
            <p>
                <label>Durtion</label>
                <input type="number" required
                value={userInput.duration}
                onChange={(event)=>
                    handleChange('duration',event.target.value)
                }
                />
            </p>
        </div>
    </section>

}