import { useState, useRef } from 'react'
import './App.css'

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
function entry(formData) {
  // const words = formData.get("");
  let word = "";
  for(let i = 1; i < 6; i++) {
    word += formData.get(`${i}`);
  }
  console.log(`${word}`)

}
function App() {
  // const [count, setCount] = useState(0)
  const inputRefs = useRef([]); //useref simply stores an empty array in input refs
  const getInputs = () => {
    const inputs = inputRefs.current;
    console.log(inputs);
  }
  // const handleSubmit = (event,index) => {
  //   console.log("Submit");
  // }
  const handleKeyUp = (event,index) => { //Once key is released move to next square
    console.log(`Key pressed at ${index}:`, event.key); 
    if (event.key !== "Backspace" && index < inputRefs.current.length-1) {
      inputRefs.current[index + 1].focus();
    } else if(event.key === "Backspace") {
      inputRefs.current[index-1].focus();
    }
    //  else if (index === 4 && event.key === "Enter" && inputRefs.current[index].value.length === 1) {
    //   // console.log("Submitting");
    // }
  }
  return (
    <>
      <section id="word">
        <div id="first"> {/* first word*/}
          <form id="word1" action={entry}>
            <input type = "text" name='1' id="first1" maxLength="1" ref={(e) => (inputRefs.current[0] = e)} onKeyUp={(e) => handleKeyUp(e,0)}></input>
            <input type = "text" name='2' id="first2" maxLength="1" ref={(e) => (inputRefs.current[1] = e)} onKeyUp={(e) => handleKeyUp(e,1)}></input>
            <input type = "text" name='3' id="first3" maxLength="1" ref={(e) => (inputRefs.current[2] = e)} onKeyUp={(e) => handleKeyUp(e,2)}></input>
            <input type = "text" name='4' id="first4" maxLength="1" ref={(e) => (inputRefs.current[3] = e)} onKeyUp={(e) => handleKeyUp(e,3)}></input>
            <input type = "text" name='5' id="first5" maxLength="1" ref={(e) => (inputRefs.current[4] = e)} onKeyUp={(e) => handleKeyUp(e,4)}></input>
            <input type="submit" hidden />
          </form>
          
        </div>
      </section>
      {/* create enter key handler * done */}
      {/* check input value by input id like if first1.value === word[0] */}
      {/* check if word is in dictionary */}
      {/* dont understand useState and useEffect yet */}
      {/* handle illegal characters */}

    </>
  )
}

export default App
