//this component is used to take user input, basically

import { useEffect} from "react"

export default function UserInput({ onChange, userInput}) {
    
    useEffect(() => {
        console.log("Initial Investment: ", userInput.initialInvestment);
        console.log("Annual Investment: ", userInput.annualInvestment);
        console.log("Expected Return: ", userInput.expectedReturn);
        console.log("Duration: ", userInput.duration);
    }, [userInput]); // Executa sempre que userInput mudar

    
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                type="number" 
                required 
                value={userInput.initialInvestment}
                onChange={(event)=>
                    onChange('initialInvestment',event.target.value)
                }
                    
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required
                value={userInput.annualInvestment}
                onChange={(event)=>
                    onChange('annualInvestment',event.target.value)
                }
                />
            </p>
            <p>
                <label>Expected Return</label>
                <input type="number" required
                value={userInput.expectedReturn}
                onChange={(event)=>
                    onChange('expectedReturn',event.target.value)
                }
                />
            </p>
            <p>
                <label>Durtion</label>
                <input type="number" required
                value={userInput.duration}
                onChange={(event)=>
                    onChange('duration',event.target.value)
                }
                />
            </p>
        </div>
    </section>

}