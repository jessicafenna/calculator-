import './App.css';
import { useState } from 'react'; 
import { evaluate } from 'mathjs';

const App = () =>{
  const [result, setResult] = useState ("")
  const numbers = [7, 8, 9, "/",4, 5, 6, "*",1, 2, 3, "-",0, ".", "+", "=", ]

  const clickHandler = (button) =>{ 
    // if button is = then evaluate the result, else whatever result is now and add the next button on 
    setResult (button === "=" ? evaluate (result) : result + button
    )}


  const del = () => { 
    const value = result.slice(0,-1);
    setResult(value)
  }

  const delAll = () => { 
    const value = ("0")
    setResult(value)
  }
  return (
    <div className='flex'>
    <div className = "container">
      <div className ="screen">
          <h1>{result || "0"}</h1>
      </div> 
          <div>
            <button onClick = {del} >Backspace</button>
            <button onClick = {delAll} >Clear All</button>
        
            
           </div>

          <div>
            <div className='buttons'> 
              {numbers.map((button,index) =>{ 
          return (
          <button onClick= {() => clickHandler(button)} key = {index}>{button}</button>
          )
        })}
              
          </div>
    </div>
    </div>
    </div>
  )
}

export default App;
