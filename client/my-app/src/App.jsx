import { useState, useRef } from 'react'
import './App.css'

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function App() {
  // const [count, setCount] = useState(0)
  const inputRefs = useRef([]); //useref simply stores an empty array in input refs
  const getInputs = () => {
    const inputs = inputRefs.current;
    console.log(inputs);
  }
  const handleKeyUp = (event,index) => { //Once key is released move to next square
    console.log(`Key pressed at ${index}:`, event.key); 
    if (event.key === "Backspace" && index < inputRefs.current.length-1) {
      inputRefs.current[index + 1].focus();
    } else if(event.key === "Backspace") {
      inputRefs.current[index-1].focus();
    }
  }
  return (
    <>
      <section id="word">
        <div id="first"> {/* first word*/}
          <input type = "text" id="first1" maxLength="1" ref={(e) => (inputRefs.current[0] = e)} onKeyUp={(e) => handleKeyUp(e,0)}></input>
          <input type = "text" id="first2" maxLength="1" ref={(e) => (inputRefs.current[1] = e)} onKeyUp={(e) => handleKeyUp(e,1)}></input>
          <input type = "text" id="first3" maxLength="1" ref={(e) => (inputRefs.current[2] = e)} onKeyUp={(e) => handleKeyUp(e,2)}></input>
          <input type = "text" id="first4" maxLength="1" ref={(e) => (inputRefs.current[3] = e)} onKeyUp={(e) => handleKeyUp(e,3)}></input>
          <input type = "text" id="first5" maxLength="1" ref={(e) => (inputRefs.current[4] = e)} onKeyUp={(e) => handleKeyUp(e,4)}></input>
        </div>
      </section>
      {/* create enter key handler */}
      {/* check input value by input id like if first1.value === word[0] */}
      {/* check if word is in dictionary */}
    </>
  )
}

export default App
