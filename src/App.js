import './App.css';
import { useState } from 'react'; 
import { evaluate } from 'mathjs';

const App = () =>{
  let [result,setResult] = useState("");

  // const operators = ["/","*","-,","+","."]

  const updateResult = value => { 
    setResult(result+value);
  }
  const calculate = () => { 
    setResult(evaluate(result).toString());
  }
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

          <div className = "numberButtons">
            <div>
              <button onClick ={() => updateResult ('7')}>7</button>
              <button onClick ={() => updateResult ('8')}>8</button>
              <button onClick ={() => updateResult ('9')}>9</button>
              <button onClick = {() => updateResult("/")} >*</button>
           
            </div>
            <div>
              <button onClick ={() => updateResult ('4')}>4</button>
              <button onClick ={() => updateResult ('5')}>5</button>
              <button onClick ={() => updateResult ('6')}>6</button>
              <button onClick = {() => updateResult("-")} >-</button>
          
            </div>
            <div>         
              <button onClick ={() => updateResult ('1')}>1</button>
              <button onClick ={() => updateResult ('2')}>2</button>
              <button onClick ={() => updateResult ('3')}>3</button>
              <button onClick = {() => updateResult("+")} >+</button>
             
            </div>
            <div>
              <button onClick ={() => updateResult ('0')}>0</button>
              <button onClick = {() => updateResult(".")} >.</button>              
              <button onClick = {() => updateResult("/")} >/</button>
              <button onClick ={calculate}>=</button>              
          </div>
    </div>
    </div>
    </div>
  )
}

export default App;
